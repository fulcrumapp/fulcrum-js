require "minitest/autorun"
require "open3"
require "tmpdir"
require "yaml"

class ReleaseVersionPolicyTest < Minitest::Test
  WORKFLOW = File.expand_path("../workflows/ci.yml", __dir__)

  def setup
    @workflow = YAML.load_file(WORKFLOW)
    @job = @workflow.fetch("jobs").fetch("build-and-test")
    @step = @job.fetch("steps").find { |step| step["name"] == "Protect release-managed version" }
    refute_nil @step
  end

  def test_event_base_and_checkout_contract
    base = @step.fetch("env").fetch("BASE_SHA")
    %w[pull_request.base.sha merge_group.base_sha before].each { |field| assert_includes base, field }
    checkout = @job.fetch("steps").find { |step| step.fetch("uses", "").start_with?("actions/checkout@") }
    assert_equal 0, checkout.fetch("with").fetch("fetch-depth")
  end

  def test_version_comparison_and_failure_cases
    original = '{"version":"1.2.3","dependencies":{"a":"1"}}'
    {
      "unchanged" => [original, original, true],
      "dependency-only" => [original, '{"version":"1.2.3","dependencies":{"a":"2"}}', true],
      "changed" => [original, '{"version":"1.2.4"}', false],
      "deleted" => [original, nil, false],
      "added" => [nil, original, false],
      "malformed" => [original, "{", false],
      "missing version" => [original, "{}", false],
      "empty version" => [original, '{"version":""}', false]
    }.each do |label, (base, head, success)|
      output, status = run_check(base, head)
      assert_equal success, status.success?, "#{label}: #{output}"
      assert_includes output, "Do not manually change", label if label == "changed"
    end
  end

  def test_missing_base_fails
    output, status = run_check('{"version":"1.2.3"}', '{"version":"1.2.3"}', "0" * 40)
    refute status.success?
    assert_includes output, "base"
  end

  private

  def run_check(base, head, sha = "a" * 40)
    Dir.mktmpdir do |dir|
      File.write(File.join(dir, "base"), base) if base
      File.write(File.join(dir, "head"), head) if head
      git = File.join(dir, "git")
      File.write(git, <<~SH)
        #!/bin/sh
        case "$2" in
          HEAD:package.json) cat "$FIXTURES/head" ;;
          *:package.json) cat "$FIXTURES/base" ;;
          *) exit 1 ;;
        esac
      SH
      File.chmod(0o755, git)
      env = { "PATH" => "#{dir}:#{ENV.fetch("PATH")}", "FIXTURES" => dir, "BASE_SHA" => sha }
      stdout, stderr, status = Open3.capture3(env, "bash", "-e", "-o", "pipefail", "-c", @step.fetch("run"))
      [stdout + stderr, status]
    end
  end
end
