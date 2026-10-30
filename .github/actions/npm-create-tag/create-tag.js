"use strict";

const { execFileSync, spawnSync } = require("node:child_process");
const { appendFileSync } = require("node:fs");
const { devNull } = require("node:os");
const { calculateVersion } = require("../npm-next-version/next-version.js");

const commitMutation = `
  mutation($input: CreateCommitOnBranchInput!) {
    createCommitOnBranch(input: $input) {
      commit { oid signature { isValid } }
    }
  }
`;

function command(program, args, input) {
  return execFileSync(program, args, {
    encoding: "utf8",
    input,
    stdio: [input === undefined ? "ignore" : "pipe", "pipe", "pipe"]
  }).trim();
}

function checkPublicRegistry(name, version, npm) {
  const result = npm("view", name, "versions", "--json",
    "--registry=https://registry.npmjs.org/", "--@fulcrumapp:registry=https://registry.npmjs.org/");
  let versions;
  try {
    versions = JSON.parse(result.stdout || "");
  } catch {
    throw new Error("Unable to read npmjs.org versions before tagging");
  }
  if (result.status === 1 && versions?.error?.code === "E404") return;
  if (result.status !== 0) throw new Error(`npmjs.org version lookup failed: ${versions?.error?.code || result.status}`);
  versions = Array.isArray(versions) ? versions : [versions];
  if (!versions.every((item) => typeof item === "string")) {
    throw new Error("npmjs.org returned malformed version data");
  }
  const target = version.split(".").map(BigInt);
  for (const candidate of versions) {
    const match = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/.exec(candidate);
    if (!match) continue;
    const parts = match.slice(1).map(BigInt);
    const comparison = parts.findIndex((part, index) => part !== target[index]);
    if (comparison === -1 || parts[comparison] > target[comparison]) {
      throw new Error(`Planned version ${version} is not newer than published npmjs.org version ${candidate}`);
    }
  }
}

function createReleaseTag(options) {
  const { head, repository, runId, attempt, eventName, ref, git, gh } = options;
  if (!/^[0-9a-f]{40}$/i.test(head) ||
      !/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(repository) ||
      !/^\d+$/.test(runId) || !/^\d+$/.test(attempt) ||
      eventName !== "push" || ref !== "refs/heads/main") {
    throw new Error("Release tagging requires a tested main push and valid GitHub run metadata");
  }

  git("merge-base", "--is-ancestor", head, "refs/remotes/origin/main");
  const plan = options.calculateVersion(head);
  if (plan.head !== head) throw new Error("Version plan does not match the tested commit");
  if (plan.alreadyReleased) return { tag: plan.tag, alreadyReleased: true };
  if (!/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/.test(plan.version) ||
      plan.tag !== `v${plan.version}`) {
    throw new Error("Version plan does not contain a matching stable SemVer tag");
  }

  const packageJson = JSON.parse(git("show", `${head}:package.json`));
  if (typeof packageJson.version !== "string" ||
      !/^@fulcrumapp\/[a-z0-9][a-z0-9._-]*$/.test(packageJson.name || "")) {
    throw new Error("package.json must contain a version and an @fulcrumapp package name");
  }
  if (!/^yarn@1\.\d+\.\d+$/.test(packageJson.packageManager || "") || packageJson.workspaces ||
      git("ls-tree", "--name-only", head, "--", "package-lock.json", "npm-shrinkwrap.json", "pnpm-lock.yaml")) {
    throw new Error("Release tagging supports single-package Yarn classic repositories only");
  }
  if (options.checkPublicRegistry) options.checkPublicRegistry(packageJson.name, plan.version);
  packageJson.version = plan.version;
  const contents = Buffer.from(`${JSON.stringify(packageJson, null, 2)}\n`).toString("base64");
  const temporaryBranch = `ci/npm-release/${runId}-${attempt}`;
  const endpoint = `repos/${repository}/git/refs`;
  const mutation = {
    query: commitMutation,
    variables: {
      input: {
        branch: { repositoryNameWithOwner: repository, branchName: temporaryBranch },
        expectedHeadOid: head,
        message: { headline: `chore(release): ${plan.tag}` },
        fileChanges: { additions: [{ path: "package.json", contents }] }
      }
    }
  };
  gh(["api", "--method", "POST", endpoint, "-f", `ref=refs/heads/${temporaryBranch}`, "-f", `sha=${head}`]);
  let failure;
  try {
    const response = JSON.parse(gh(["api", "graphql", "--input", "-"], JSON.stringify(mutation)));
    if (response.errors?.length) throw new Error(`GitHub rejected the release commit: ${JSON.stringify(response.errors)}`);
    const commit = response.data?.createCommitOnBranch?.commit;
    if (!commit || !/^[0-9a-f]{40}$/i.test(commit.oid) || commit.signature?.isValid !== true) {
      throw new Error("GitHub did not return a valid release commit signature");
    }
    gh(["api", "--method", "POST", endpoint, "-f", `ref=refs/tags/${plan.tag}`, "-f", `sha=${commit.oid}`]);
    return { tag: plan.tag, commit: commit.oid, alreadyReleased: false };
  } catch (error) {
    failure = error;
    throw error;
  } finally {
    try {
      gh(["api", "--method", "DELETE", `${endpoint}/heads/${temporaryBranch}`]);
    } catch (error) {
      if (failure) throw new AggregateError([failure, error], "Release tagging failed and temporary branch cleanup failed");
      throw error;
    }
  }
}

if (require.main === module) {
  try {
    const result = createReleaseTag({
      head: process.env.GITHUB_SHA,
      repository: process.env.GITHUB_REPOSITORY,
      runId: process.env.GITHUB_RUN_ID,
      attempt: process.env.GITHUB_RUN_ATTEMPT,
      eventName: process.env.GITHUB_EVENT_NAME,
      ref: process.env.GITHUB_REF,
      git: (...args) => command("git", args),
      gh: (args, input) => command("gh", args, input),
      calculateVersion,
      checkPublicRegistry: process.env.CHECK_NPMJS === "true" ? (name, version) =>
        checkPublicRegistry(name, version, (...args) => {
          const env = { ...process.env, NPM_CONFIG_USERCONFIG: devNull };
          delete env.GH_TOKEN;
          delete env.NODE_AUTH_TOKEN;
          const result = spawnSync("npm", args, { encoding: "utf8", env });
          if (result.error) throw result.error;
          return result;
        }) : undefined
    });
    console.log(JSON.stringify(result));
    if (process.env.GITHUB_OUTPUT) {
      for (const [key, value] of Object.entries(result)) {
        appendFileSync(process.env.GITHUB_OUTPUT, `${key}=${value}\n`);
      }
    }
  } catch (error) {
    console.error(`Unable to create npm release tag: ${error.stack || error.message}`);
    process.exitCode = 1;
  }
}

module.exports = { createReleaseTag, checkPublicRegistry };
