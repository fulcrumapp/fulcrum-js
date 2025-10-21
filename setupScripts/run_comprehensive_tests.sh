#!/bin/bash

# Comprehensive Test Runner for setRepoName.sh
# This script runs all combination tests (Scenario 8) and validates each one

set -e  # Exit on any error

# Configuration
TEST_DIR="/tmp/repo-tests"
TEMPLATE_REPO="${TEMPLATE_REPO:-https://github.com/fulcrumapp/FulcrumRepoTemplate.git}"
TEMPLATE_BRANCH="${TEMPLATE_BRANCH:-main}"
SETUP_BRANCH_NAME=""  # Will be set by -b argument for setRepoName.sh
CLEANUP_AFTER="${CLEANUP_AFTER:-false}"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Enhanced validation function (embedded)
validate_test() {
    # Disable exit on error for validation function
    set +e
    
    local test_dir="$1"
    echo -e "${BLUE}=== Validating $test_dir ===${NC}"
    
    # Store current directory and ensure we can return to it
    local original_dir="$(pwd)"
    
    if ! cd "$TEST_DIR/$test_dir"; then
        echo -e "${RED}✗ Failed to enter directory $test_dir${NC}"
        set -e
        return 1
    fi
    
    local validation_passed=true
    
    # Check if charts directory exists
    if [ -d "charts" ]; then
        echo -e "${GREEN}✓${NC} Charts directory exists"
        echo "  Chart name: $(ls charts/)"
    else
        echo -e "${YELLOW}✗${NC} Charts directory removed"
    fi
    
    # Check ci/config.yaml
    if [ -f "ci/config.yaml" ]; then
        echo -e "${GREEN}✓${NC} ci/config.yaml exists"
        output_type=$(yq eval '.outputType' ci/config.yaml 2>/dev/null || echo "not found")
        echo "  outputType: $output_type"
        
        # Check charts section in more detail
        charts_value=$(yq eval '.charts' ci/config.yaml 2>/dev/null)
        if echo "$charts_value" | grep -q "null"; then
            echo "  charts section: removed"
        elif echo "$charts_value" | grep -q "^\[\]$"; then
            echo "  charts section: empty array []"
        elif echo "$charts_value" | grep -q "^\[$"; then
            echo "  charts section: empty array [] (multiline)"
        else
            echo "  charts section: present with content"
        fi
    fi
    
    # Check skaffold.yaml
    if [ -f "skaffold.yaml" ]; then
        echo -e "${GREEN}✓${NC} skaffold.yaml exists"
        if yq eval '.deploy' skaffold.yaml 2>/dev/null | grep -q "null"; then
            echo "  deploy section: removed"
        else
            echo "  deploy section: present"
            # Check crons_enabled and ksvc_enabled in skaffold.yaml
            crons_skaffold=$(yq eval '.deploy.helm.releases[0].setValues.crons_enabled // "not found"' skaffold.yaml 2>/dev/null)
            ksvc_skaffold=$(yq eval '.deploy.helm.releases[0].setValues.ksvc_enabled // "not found"' skaffold.yaml 2>/dev/null)
            echo "  crons_enabled: $crons_skaffold"
            echo "  ksvc_enabled: $ksvc_skaffold"
        fi
    fi
    
    # Check values.yaml if charts exist
    if [ -d "charts" ]; then
        chart_name=$(ls charts/ | head -1)
        if [ -f "charts/$chart_name/values.yaml" ]; then
            echo -e "${GREEN}✓${NC} values.yaml exists"
            crons_values=$(yq eval '.crons_enabled' charts/$chart_name/values.yaml 2>/dev/null)
            ksvc_values=$(yq eval '.ksvc_enabled' charts/$chart_name/values.yaml 2>/dev/null)
            echo "  crons_enabled: $crons_values"
            echo "  ksvc_enabled: $ksvc_values"
        fi
    fi
    
    # Check for remaining sampleAPP references
    echo "--- Checking for unreplaced sampleAPP references ---"
    sampleapp_files=$(find . -type f \( -name "*.yaml" -o -name "*.yml" -o -name "*.md" -o -name "*.tpl" \) -not -path "*/setupScripts/*" -not -path "*/.git/*" -exec grep -l "sampleAPP" {} \; 2>/dev/null | wc -l | tr -d ' ')
    if [ "$sampleapp_files" -eq 0 ]; then
        echo -e "${GREEN}✓${NC} No remaining sampleAPP references found"
    else
        echo -e "${RED}✗${NC} Found $sampleapp_files files with sampleAPP references:"
        find . -type f \( -name "*.yaml" -o -name "*.yml" -o -name "*.md" -o -name "*.tpl" \) -not -path "*/setupScripts/*" -not -path "*/.git/*" -exec grep -H "sampleAPP" {} \; 2>/dev/null | head -3
        validation_passed=false
    fi
    
    # Check for remaining sampleCHARTNAME references
    echo "--- Checking for unreplaced sampleCHARTNAME references ---"
    samplechart_files=$(find . -type f \( -name "*.yaml" -o -name "*.yml" -o -name "*.md" -o -name "*.tpl" \) -not -path "*/setupScripts/*" -not -path "*/.git/*" -exec grep -l "sampleCHARTNAME" {} \; 2>/dev/null | wc -l | tr -d ' ')
    if [ "$samplechart_files" -eq 0 ]; then
        echo -e "${GREEN}✓${NC} No remaining sampleCHARTNAME references found"
    else
        echo -e "${RED}✗${NC} Found $samplechart_files files with sampleCHARTNAME references:"
        find . -type f \( -name "*.yaml" -o -name "*.yml" -o -name "*.md" -o -name "*.tpl" \) -not -path "*/setupScripts/*" -not -path "*/.git/*" -exec grep -H "sampleCHARTNAME" {} \; 2>/dev/null | head -3
        validation_passed=false
    fi
    
    # Return validation result
    cd "$original_dir"  # Return to original directory
    
    if [ "$validation_passed" = true ]; then
        echo -e "${GREEN}✓ $test_dir: VALIDATION PASSED${NC}"
        echo ""
        # Re-enable exit on error
        set -e
        return 0
    else
        echo -e "${RED}✗ $test_dir: VALIDATION FAILED${NC}"
        echo ""
        # Re-enable exit on error
        set -e
        return 1
    fi
}

# Function to clean up old test directories
cleanup_old_tests() {
    echo -e "${YELLOW}Cleaning up old test directories...${NC}"
    if [ -d "$TEST_DIR" ]; then
        rm -rf "$TEST_DIR"
    fi
    mkdir -p "$TEST_DIR"
}

# Function to run a single test scenario
run_test_scenario() {
    local repo_name="$1"
    local repo_type="$2"
    local enable_helm="$3"
    local enable_crons="$4"
    local enable_ksvc="$5"
    
    echo -e "${BLUE}--- Running test: $repo_name ---${NC}"
    echo "Parameters: type=$repo_type, helm=$enable_helm, crons=$enable_crons, ksvc=$enable_ksvc"
    echo "Cloning from branch: $TEMPLATE_BRANCH"
    
    cd "$TEST_DIR"
    
    # Clone the template
    echo "Executing: git clone -b \"$TEMPLATE_BRANCH\" \"$TEMPLATE_REPO\" \"$repo_name\""
    if ! git clone -b "$TEMPLATE_BRANCH" "$TEMPLATE_REPO" "$repo_name"; then
        echo -e "${RED}✗ Failed to clone template for $repo_name (branch: $TEMPLATE_BRANCH)${NC}"
        return 1
    fi
    
    cd "$repo_name"
    
    # Run the setup script with environment variables
    local branch_name_param=""
    if [ -n "$SETUP_BRANCH_NAME" ]; then
        branch_name_param="$SETUP_BRANCH_NAME"
    else
        branch_name_param="${BRANCH_NAME:-main}"
    fi
    
    if REPO_NAME="$repo_name" \
       REPO_TYPE="$repo_type" \
       ENABLE_HELM="$enable_helm" \
       ENABLE_CRONS="$enable_crons" \
       ENABLE_KSVC="$enable_ksvc" \
       UPDATE_GIT_CONFIG="${UPDATE_GIT_CONFIG:-FALSE}" \
       BRANCH_NAME="$branch_name_param" \
       bash setupScripts/setRepoName.sh >/dev/null 2>&1; then
        echo -e "${GREEN}✓ Setup completed for $repo_name${NC}"
        return 0
    else
        echo -e "${RED}✗ Setup failed for $repo_name${NC}"
        return 1
    fi
}

# Main test execution function
run_all_scenarios() {
    echo -e "${BLUE}========================================${NC}"
    echo -e "${BLUE} RUNNING COMPREHENSIVE TEST SCENARIOS  ${NC}"
    echo -e "${BLUE}========================================${NC}"
    echo ""
    
    # Test matrix of all combinations
    declare -a repo_types=("npm" "service" "other")
    declare -a helm_values=("true" "false")
    declare -a cron_values=("true" "false")
    declare -a ksvc_values=("true" "false")
    
    local counter=1
    local total_scenarios=$((${#repo_types[@]} * ${#helm_values[@]} * ${#cron_values[@]} * ${#ksvc_values[@]}))
    local failed_setups=0
    
    echo "Total scenarios to test: $total_scenarios"
    echo ""
    
    for repo_type in "${repo_types[@]}"; do
        for helm in "${helm_values[@]}"; do
            for cron in "${cron_values[@]}"; do
                for ksvc in "${ksvc_values[@]}"; do
                    test_name="test-combo-${counter}-${repo_type}-h${helm}-c${cron}-k${ksvc}"
                    
                    echo "[$counter/$total_scenarios] Testing scenario: $test_name"
                    
                    if run_test_scenario "$test_name" "$repo_type" "$helm" "$cron" "$ksvc"; then
                        echo -e "${GREEN}Setup completed successfully${NC}"
                    else
                        echo -e "${RED}Setup failed${NC}"
                        failed_setups=$((failed_setups + 1))
                    fi
                    
                    echo ""
                    counter=$((counter + 1))
                done
            done
        done
    done
    
    echo -e "${BLUE}========================================${NC}"
    echo "Setup phase completed: $((total_scenarios - failed_setups))/$total_scenarios scenarios successful"
    if [ $failed_setups -gt 0 ]; then
        echo -e "${RED}$failed_setups scenarios failed during setup${NC}"
    fi
    echo ""
    
    return $failed_setups
}

# Function to validate all test scenarios
validate_all_scenarios() {
    echo -e "${BLUE}========================================${NC}"
    echo -e "${BLUE}     VALIDATING ALL TEST SCENARIOS     ${NC}"
    echo -e "${BLUE}========================================${NC}"
    echo ""
    
    cd "$TEST_DIR"
    
    local successful_validations=0
    local total_validations=0
    local failed_tests=()
    
    for test_dir in test-combo-*; do
        if [ -d "$test_dir" ]; then
            total_validations=$((total_validations + 1))
            
            if validate_test "$test_dir"; then
                successful_validations=$((successful_validations + 1))
            else
                failed_tests+=("$test_dir")
            fi
        fi
    done
    
    echo -e "${BLUE}========================================${NC}"
    echo -e "${BLUE}           VALIDATION SUMMARY           ${NC}"
    echo -e "${BLUE}========================================${NC}"
    echo ""
    echo "Total tests validated: $total_validations"
    echo "Successful validations: $successful_validations"
    echo "Failed validations: $((total_validations - successful_validations))"
    echo ""
    
    if [ "$successful_validations" -eq "$total_validations" ]; then
        echo -e "${GREEN}🎉 All tests PASSED!${NC}"
        return 0
    else
        echo -e "${RED}❌ Some tests FAILED!${NC}"
        echo ""
        echo "Failed tests:"
        for failed_test in "${failed_tests[@]}"; do
            echo -e "${RED}  ✗ $failed_test${NC}"
        done
        return 1
    fi
}

# Function to show usage
show_usage() {
    echo "Usage: $0 [OPTIONS]"
    echo ""
    echo "Options:"
    echo "  -t, --test-dir DIR       Set test directory (default: /tmp/repo-tests)"
    echo "  -r, --repo URL          Set template repository URL"
    echo "  -b, --branch BRANCH     Set git branch name for setRepoName.sh script"
    echo "  -c, --cleanup           Clean up test directories after completion"
    echo "  -h, --help              Show this help message"
    echo ""
    echo "Environment Variables:"
    echo "  TEMPLATE_REPO           Template repository URL"
    echo "  TEMPLATE_BRANCH         Template repository branch to clone from"
    echo "  CLEANUP_AFTER           Clean up after tests (true/false)"
    echo "  UPDATE_GIT_CONFIG       Update git configuration in setRepoName.sh (TRUE/FALSE)"
    echo "  BRANCH_NAME             Git branch name for repository setup (overridden by -b)"
    echo ""
    echo "Examples:"
    echo "  $0 --test-dir /tmp/my-tests --cleanup"
    echo "  $0 --branch develop --repo https://github.com/myorg/template.git"
    echo "  TEMPLATE_BRANCH=feature-branch $0 --branch develop --cleanup"
    echo ""
    echo "Note: TEMPLATE_BRANCH controls which branch to clone, -b controls git operations in setRepoName.sh"
}

# Parse command line arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        -t|--test-dir)
            TEST_DIR="$2"
            shift 2
            ;;
        -r|--repo)
            TEMPLATE_REPO="$2"
            shift 2
            ;;
        -b|--branch)
            SETUP_BRANCH_NAME="$2"
            shift 2
            ;;
        -c|--cleanup)
            CLEANUP_AFTER=true
            shift
            ;;
        -h|--help)
            show_usage
            exit 0
            ;;
        *)
            echo "Unknown option: $1"
            show_usage
            exit 1
            ;;
    esac
done

# Main execution
main() {
    echo -e "${GREEN}Starting comprehensive test run...${NC}"
    echo "Test directory: $TEST_DIR"
    echo "Template repository: $TEMPLATE_REPO"
    echo "Template branch: $TEMPLATE_BRANCH"
    if [ -n "$SETUP_BRANCH_NAME" ]; then
        echo "Git branch for setup: $SETUP_BRANCH_NAME"
    else
        echo "Git branch for setup: ${BRANCH_NAME:-main}"
    fi
    echo "Update git config: ${UPDATE_GIT_CONFIG:-FALSE}"
    echo ""
    
    # Check dependencies
    if ! command -v yq >/dev/null 2>&1; then
        echo -e "${RED}Error: yq is required but not installed${NC}"
        exit 1
    fi
    
    if ! command -v git >/dev/null 2>&1; then
        echo -e "${RED}Error: git is required but not installed${NC}"
        exit 1
    fi
    
    # Clean up old tests
    cleanup_old_tests
    
    # Run all test scenarios
    if ! run_all_scenarios; then
        echo -e "${YELLOW}Warning: Some scenarios failed during setup${NC}"
    fi
    
    # Validate all scenarios
    validation_result=0
    validate_all_scenarios || validation_result=$?
    
    # Cleanup if requested
    if [ "$CLEANUP_AFTER" = true ]; then
        echo ""
        echo -e "${YELLOW}Cleaning up test directories...${NC}"
        rm -rf "$TEST_DIR"
        echo "Cleanup completed"
    else
        echo ""
        echo "Test results available in: $TEST_DIR"
    fi
    
    exit $validation_result
}

# Run main function
main