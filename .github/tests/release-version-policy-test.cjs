const assert = require("node:assert/strict");
const { spawnSync } = require("node:child_process");
const { mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { test } = require("node:test");

const workflows = path.resolve(__dirname, "../workflows");
const workflow = readFileSync(path.join(workflows, "ci.yml"), "utf8");
const buildJob = workflow.match(/^  build-and-test:\n([\s\S]*?)(?=^  (?:sonar|tag):)/m)?.[1];
assert.ok(buildJob, "build-and-test job is present");
const guard = buildJob.match(/node <<'NODE'\n([\s\S]*?)^\s*NODE$/m)?.[1];
assert.ok(guard, "version guard is present");

function runCheck(base, head, sha = "a".repeat(40)) {
  const dir = mkdtempSync(path.join(os.tmpdir(), "version-policy-"));
  try {
    if (base !== null) writeFileSync(path.join(dir, "base"), base);
    if (head !== null) writeFileSync(path.join(dir, "head"), head);
    writeFileSync(path.join(dir, "git"), `#!/bin/sh
case "$2" in
  HEAD:package.json) cat "$FIXTURES/head" ;;
  *:package.json) cat "$FIXTURES/base" ;;
  *) exit 1 ;;
esac
`, { mode: 0o755 });
    return spawnSync(process.execPath, ["-e", guard], {
      encoding: "utf8",
      env: { ...process.env, PATH: `${dir}:${process.env.PATH}`, FIXTURES: dir, BASE_SHA: sha }
    });
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}

test("event bases, checkout and GitHub-hosted runners are configured", () => {
  for (const field of ["pull_request.base.sha", "merge_group.base_sha", "event.before"]) {
    assert.ok(buildJob.includes(field), field);
  }
  assert.match(buildJob, /fetch-depth:\s*0/);
  assert.match(buildJob, /runs-on:\s*ubuntu-latest/);
  assert.match(workflow, /^  tag:[\s\S]*?runs-on:\s*ubuntu-latest/m);
  assert.match(workflow, /node --test \.github\/tests\/\*\.cjs/);
  if (/^  sonar:/m.test(workflow)) assert.match(workflow, /^  sonar:[\s\S]*?runs-on:\s*ubuntu-latest/m);
});

test("all workflow jobs use GitHub-hosted Ubuntu runners", () => {
  for (const name of readdirSync(workflows).filter((file) => /\.ya?ml$/.test(file))) {
    const contents = readFileSync(path.join(workflows, name), "utf8");
    for (const line of contents.match(/^\s+runs-on:.*$/gm) || []) {
      assert.match(line, /^\s+runs-on:\s*ubuntu-latest\s*$/, `${name}: ${line}`);
    }
  }
});

test("the version guard accepts unchanged versions and rejects invalid changes", () => {
  const original = '{"version":"1.2.3","dependencies":{"a":"1"}}';
  const cases = [
    [original, original, true],
    [original, '{"version":"1.2.3","dependencies":{"a":"2"}}', true],
    [original, '{"version":"1.2.4"}', false],
    [original, null, false],
    [null, original, false],
    [original, "{", false],
    [original, "{}", false],
    [original, '{"version":""}', false]
  ];
  for (const [base, head, expected] of cases) {
    const result = runCheck(base, head);
    assert.equal(result.status === 0, expected, result.stderr);
    if (head === '{"version":"1.2.4"}') assert.match(result.stderr, /Do not manually change/);
  }
  const missingBase = runCheck(original, original, "0".repeat(40));
  assert.notEqual(missingBase.status, 0);
  assert.match(missingBase.stderr, /base/);
});

test("publish workflows use tag creation and appropriate runners", () => {
  for (const name of ["publish-npm", "publish-npmjs"]) {
    const publish = readFileSync(path.join(workflows, `${name}.yml`), "utf8");
    assert.match(publish, /^  create:/m);
    assert.doesNotMatch(publish, /^  push:/m);
    assert.match(publish, /github\.ref_type == 'tag'/);
    if (name === "publish-npm") {
      assert.match(publish, /^  publish:[\s\S]*?runs-on:\s*ubuntu-latest/m);
      assert.match(publish, /^  release:[\s\S]*?runs-on:\s*ubuntu-latest/m);
    } else {
      assert.match(publish, /runs-on:\s*ubuntu-latest/);
      assert.match(publish, /npm trusted publishing does not support self-hosted runners/);
    }
  }
});

test("manual npmjs dispatch requires the matching tag ref", () => {
  const publish = readFileSync(path.join(workflows, "publish-npmjs.yml"), "utf8");
  const block = publish.match(/      - name: Verify release tag and commit\n([\s\S]*?)(?=      - name:)/)?.[1];
  assert.ok(block);
  const run = block.match(/        run: \|\n([\s\S]*)/)?.[1]?.replace(/^          /gm, "");
  assert.ok(run?.includes("node .github/actions/npm-publish-github/publish.js verify"));
  const script = run.replace("node .github/actions/npm-publish-github/publish.js verify", "exit 0");
  const dir = mkdtempSync(path.join(os.tmpdir(), "dispatch-policy-"));
  try {
    writeFileSync(path.join(dir, "node"), "#!/bin/sh\necho 1.2.3\n", { mode: 0o755 });
    for (const [type, ref, expected] of [["tag", "v1.2.3", true], ["tag", "v1.2.4", false], ["branch", "main", false]]) {
      const result = spawnSync("bash", ["-e", "-o", "pipefail", "-c", script], {
        encoding: "utf8",
        env: { ...process.env, PATH: `${dir}:${process.env.PATH}`, EVENT_NAME: "workflow_dispatch", INPUT_TAG: "v1.2.3", TAG: "v1.2.3", REF_NAME: ref, REF_TYPE: type }
      });
      assert.equal(result.status === 0, expected, `${type}/${ref}: ${result.stdout}${result.stderr}`);
    }
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});
