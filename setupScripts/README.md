# Setup Scripts

This directory contains scripts for setting up and testing repository templates for the Fulcrum CI/CD system.

## Scripts Overview

### setRepoName.sh

The main repository setup script that configures a template repository for a specific project.

#### Purpose

- Replaces template placeholders with actual repository values
- Configures CI/CD settings based on repository type
- Sets up Helm charts and Kubernetes configurations
- Manages git repository settings

#### Environment Variables

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `REPO_NAME` | ✅ Yes | - | Name of the repository |
| `CHART_NAME` | No | `$REPO_NAME` | Override for Helm chart name |
| `SOURCE` | No | `.` | Source directory to process |
| `BRANCH_NAME` | No | `main` | Git branch name for repository operations |
| `ENABLE_CRONS` | No | `FALSE` | Enable cron jobs (TRUE/FALSE) |
| `ENABLE_KSVC` | No | `FALSE` | Enable Knative services (TRUE/FALSE) |
| `REPO_TYPE` | No | `service` | Repository type: `npm`, `service`, or `other` |
| `ENABLE_HELM` | No | `TRUE` | Keep Helm configurations (TRUE/FALSE) |
| `UPDATE_GIT_CONFIG` | No | `TRUE` | Update git user configuration (TRUE/FALSE) |

#### Usage Examples

**Basic Usage:**

```bash
REPO_NAME=my-app ./setRepoName.sh
```

**NPM Repository with Custom Settings:**

```bash
REPO_NAME=my-npm-package \
REPO_TYPE=npm \
ENABLE_HELM=FALSE \
ENABLE_CRONS=TRUE \
./setRepoName.sh
```

**Service Repository with Custom Branch:**

```bash
REPO_NAME=my-service \
REPO_TYPE=service \
BRANCH_NAME=develop \
UPDATE_GIT_CONFIG=FALSE \
./setRepoName.sh
```

#### What It Does

1. **Template Replacement**: Replaces `sampleAPP` and `sampleCHARTNAME` placeholders throughout the repository
2. **Git Configuration**:
   - Creates and checks out the specified branch
   - Optionally configures git user settings
3. **Repository Type Configuration**: Sets `outputType` in `ci/config.yaml` based on `REPO_TYPE`
4. **Helm Management**:
   - When `ENABLE_HELM=TRUE`: Keeps chart configurations
   - When `ENABLE_HELM=FALSE`: Removes charts directory, sets `charts: []` in CI config, removes deploy section from skaffold
5. **Feature Toggles**: Enables/disables crons and Knative services in Helm values and skaffold configuration

---

### run_comprehensive_tests.sh

Comprehensive testing framework that validates the `setRepoName.sh` script across all parameter combinations.

#### Test Purpose

- Tests all 24 combinations of repository parameters
- Validates template replacement and configuration changes
- Ensures consistent behavior across different scenarios
- Provides detailed validation reports

#### Command Line Options

| Option | Description | Default |
|--------|-------------|---------|
| `-t, --test-dir DIR` | Set test directory | `/tmp/repo-tests` |
| `-r, --repo URL` | Set template repository URL | `https://github.com/fulcrumapp/FulcrumRepoTemplate.git` |
| `-b, --branch BRANCH` | Set git branch name for setRepoName.sh script | `main` |
| `-c, --cleanup` | Clean up test directories after completion | `false` |
| `-h, --help` | Show help message | - |

#### Test Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `TEMPLATE_REPO` | Template repository URL to clone from | See repo option |
| `TEMPLATE_BRANCH` | Template repository branch to clone from. Useful if you are doing work on the setNameRepo.sh script and want to test (requires pushing branch to GH) | `main` |
| `CLEANUP_AFTER` | Clean up after tests (true/false) | `false` |
| `UPDATE_GIT_CONFIG` | Update git configuration in setRepoName.sh... IMPORTANT. Set to FALSE when running locally otherwise your gitconfig will be overwritten. | `FALSE` |
| `BRANCH_NAME` | Git branch name for repository setup | `main` |

#### Test Usage Examples

**Basic Testing:**

```bash
./run_comprehensive_tests.sh
```

**Test with Specific Template Branch:**

```bash
TEMPLATE_BRANCH=task/address_npm_repos ./run_comprehensive_tests.sh
```

**Test with Custom Branch and Skip Git Config:**

```bash
UPDATE_GIT_CONFIG=FALSE \
TEMPLATE_BRANCH=task/address_npm_repos \
./run_comprehensive_tests.sh -b test1 --cleanup
```

**Test with Custom Directory:**

```bash
./run_comprehensive_tests.sh \
  --test-dir /tmp/my-tests \
  --branch develop \
  --cleanup
```

#### Test Scenarios

The script tests all combinations of:

- **Repository Types**: `npm`, `service`, `other`
- **Helm Configuration**: `true`, `false`
- **Cron Jobs**: `true`, `false`
- **Knative Services**: `true`, `false`

Total: **24 test scenarios**

#### Validation Checks

For each test scenario, the script validates:

- ✅ Template placeholder replacement (`sampleAPP` → repo name)
- ✅ Chart name replacement (`sampleCHARTNAME` → chart name)
- ✅ `outputType` configuration based on repository type
- ✅ Charts directory presence/absence based on `ENABLE_HELM`
- ✅ Charts section in `ci/config.yaml` (content/empty array/removed)
- ✅ Deploy section in `skaffold.yaml` (present/removed)
- ✅ Feature toggle settings in Helm values
- ✅ No remaining template references

#### Important Notes

**Parameter Separation:**

- `TEMPLATE_BRANCH`: Controls which branch of the template repository to clone
- `-b` option: Controls the `BRANCH_NAME` passed to `setRepoName.sh` for git operations

**Example with Both:**

```bash
# Clone from feature branch, but use develop for git operations
TEMPLATE_BRANCH=feature-branch ./run_comprehensive_tests.sh -b develop
```

---

### repo-sampleAPP.yaml

Template configuration file that gets renamed during repository setup.

#### Template Purpose

- Provides a template for repository-specific configuration
- Gets renamed to `repo-{REPO_NAME}.yaml` during setup
- Contains placeholder values that are replaced by `setRepoName.sh`

---

## Development Workflow

### Testing Changes

1. **Make changes** to `setRepoName.sh`
2. **Run comprehensive tests** to validate:

   ```bash
   UPDATE_GIT_CONFIG=FALSE \
   TEMPLATE_BRANCH=your-branch \
   ./run_comprehensive_tests.sh -b test1 --cleanup
   ```

3. **Review validation results** to ensure all scenarios pass

### Adding New Features

1. **Update `setRepoName.sh`** with new environment variables and logic
2. **Update this README** with new parameter documentation
3. **Test thoroughly** using the comprehensive test suite
4. **Update CI/CD pipelines** if new parameters need to be passed

### Best Practices

- Always test changes with the comprehensive test script
- Use meaningful commit messages when updating setup scripts
- Document new environment variables in this README
- Ensure backward compatibility when making changes
- Use the `UPDATE_GIT_CONFIG=FALSE` option during testing to avoid git configuration conflicts

## Troubleshooting

### Common Issues

1. **Git Configuration Conflicts**: Use `UPDATE_GIT_CONFIG=FALSE` during testing
2. **Template Branch Not Found**: Ensure the `TEMPLATE_BRANCH` exists in the repository
3. **Permission Issues**: Ensure scripts have execute permissions (`chmod +x`)
4. **Missing Dependencies**: Ensure `yq` and `git` are installed and available

### Debug Mode

For debugging `setRepoName.sh`, you can enable verbose output:

```bash
set -x
REPO_NAME=debug-test ./setRepoName.sh
```

### Validation Issues

If comprehensive tests fail, check:

- Template repository branch exists and has expected content
- All required environment variables are set
- File permissions are correct
- Dependencies (`yq`, `git`) are available

## Dependencies

- **git**: Version control operations
- **yq**: YAML processing and manipulation
- **bash**: Script execution environment
- **sed**: Text processing and replacement
- **find**: File system operations

---

*For more information about the CI/CD system, see the main repository README.*
