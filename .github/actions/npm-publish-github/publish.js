"use strict";

const { execFileSync, spawnSync } = require("node:child_process");
const { readFileSync } = require("node:fs");
const { createHash } = require("node:crypto");
const { isDeepStrictEqual } = require("node:util");

const registry = "https://npm.pkg.github.com/";
const stableTag = /^refs\/tags\/v(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/;

function verifyRelease(ref, packageJson, git) {
  const match = stableTag.exec(ref || "");
  if (!match) throw new Error("Publishing requires a stable SemVer tag");
  if (packageJson.version !== match.slice(1).join(".")) {
    throw new Error("The tag and package version must match exactly");
  }
  if (!/^@fulcrumapp\/[a-z0-9][a-z0-9._-]*$/.test(packageJson.name || "")) {
    throw new Error("The package must use the @fulcrumapp scope");
  }
  const commits = git("rev-list", "--parents", "-n", "1", "HEAD").split(/\s+/);
  if (commits.length !== 2) throw new Error("The release commit must have exactly one parent");
  git("merge-base", "--is-ancestor", commits[1], "refs/remotes/origin/main");
  if (git("diff", "--name-only", `${commits[1]}..HEAD`) !== "package.json") {
    throw new Error("The release commit must only change package.json");
  }
  const previous = JSON.parse(git("show", `${commits[1]}:package.json`));
  const current = JSON.parse(git("show", "HEAD:package.json"));
  if (!isDeepStrictEqual(current, packageJson)) throw new Error("The workspace package.json differs from the tagged commit");
  delete previous.version;
  const withoutVersion = { ...current };
  delete withoutVersion.version;
  if (!isDeepStrictEqual(previous, withoutVersion)) throw new Error("Only the package version may change in a release commit");
  return packageJson;
}

function publishPackage(packageJson, npm, tarball, integrity = () =>
  `sha512-${createHash("sha512").update(readFileSync(tarball)).digest("base64")}`) {
  const result = npm("view", `${packageJson.name}@${packageJson.version}`, "version", "--json", `--registry=${registry}`);
  let response;
  try {
    response = JSON.parse(result.stdout || "");
  } catch {
    throw new Error(`Unable to query the package registry (exit ${result.status})`);
  }
  if (result.status === 0) {
    if (response !== packageJson.version) throw new Error("Package registry returned a mismatched version");
    const stored = npm("view", `${packageJson.name}@${packageJson.version}`, "dist.integrity", "--json", `--registry=${registry}`);
    let storedIntegrity;
    try {
      storedIntegrity = JSON.parse(stored.stdout || "");
    } catch {
      throw new Error("Unable to read existing package registry integrity");
    }
    if (stored.status !== 0 || storedIntegrity !== integrity()) {
      throw new Error("Existing package registry integrity does not match the release tarball");
    }
    return "already published";
  }
  if (result.status !== 1 || response?.error?.code !== "E404") {
    throw new Error(`Package registry query failed: ${response?.error?.code || result.status}`);
  }
  const publish = npm("publish", tarball, "--ignore-scripts", `--registry=${registry}`, `--@fulcrumapp:registry=${registry}`);
  if (publish.status !== 0) throw new Error(`npm publish failed (exit ${publish.status}): ${publish.stderr || ""}`);
  return "published";
}

function git(...args) {
  return execFileSync("git", args, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
}

if (require.main === module) {
  try {
    const packageJson = JSON.parse(readFileSync("package.json", "utf8"));
    verifyRelease(process.env.GITHUB_REF, packageJson, git);
    if (git("rev-parse", "HEAD") !== process.env.GITHUB_SHA) throw new Error("Checked-out tag differs from the triggering revision");
    if (process.argv[2] === "verify") {
      console.log(`Verified ${packageJson.name}@${packageJson.version}`);
    } else if (process.argv[2] === "publish" && process.argv[3]) {
      const packed = JSON.parse(execFileSync("tar", ["-xOzf", process.argv[3], "package/package.json"], { encoding: "utf8" }));
      if (packed.name !== packageJson.name || packed.version !== packageJson.version) {
        throw new Error("Packed package identity does not match the verified tag");
      }
      if (!process.env.NODE_AUTH_TOKEN) throw new Error("NODE_AUTH_TOKEN is required to publish");
      const npm = (...args) => {
        const result = spawnSync("npm", args, { encoding: "utf8" });
        if (result.error) throw result.error;
        if (result.stderr) result.stderr = result.stderr.split(process.env.NODE_AUTH_TOKEN).join("[REDACTED]");
        return result;
      };
      console.log(`${packageJson.name}@${packageJson.version}: ${publishPackage(packageJson, npm, process.argv[3])}`);
    } else {
      throw new Error("Expected verify or publish <tarball>");
    }
  } catch (error) {
    console.error(`Unable to publish npm package: ${error.message}`);
    process.exitCode = 1;
  }
}

module.exports = { verifyRelease, publishPackage };
