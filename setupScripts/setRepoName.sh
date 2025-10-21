#!/bin/bash
#
# Repository Template Setup Script
# 
# This script replaces template placeholders with actual repository values and configures the repository.
#
# Environment Variables:
#   REPO_NAME       - Required: Name of the repository
#   CHART_NAME      - Optional: Override for Helm chart name (defaults to REPO_NAME)
#   SOURCE          - Optional: Source directory (defaults to current directory)
#   BRANCH_NAME     - Optional: Git branch name (defaults to 'main')
#   ENABLE_CRONS    - Optional: Enable cron jobs (TRUE/FALSE, defaults to FALSE)
#   ENABLE_KSVC     - Optional: Enable Knative services (TRUE/FALSE, defaults to FALSE)
#   REPO_TYPE       - Optional: Repository type for outputType (npm/service/other, defaults to 'service')
#   ENABLE_HELM     - Optional: Keep Helm configurations (TRUE/FALSE, defaults to TRUE)
#   UPDATE_GIT_CONFIG - Optional: Update git user configuration (TRUE/FALSE, defaults to TRUE)
#
set -x
echo "Updating all occurances of sampleAPP with $REPO_NAME"
SOURCE="${SOURCE:-.}"
cd $SOURCE
echo $SOURCE
BRANCH_NAME="${BRANCH_NAME:-main}"
UPDATE_GIT_CONFIG="${UPDATE_GIT_CONFIG:-TRUE}"
UPDATE_GIT_CONFIG=`echo "${UPDATE_GIT_CONFIG}" | tr '[a-z]' '[A-Z]'`

# Add safe directory (required for git operations)
git config --global --add safe.directory $SOURCE
if [ "$BRANCH_NAME" != "main" ]; then
  git branch $BRANCH_NAME
fi
git checkout $BRANCH_NAME

ls $SOURCE
REPO_NAME=${REPO_NAME?"REPO_NAME has to be set."}

# Validate and clean REPO_NAME
# Check for spaces using case statement (POSIX compliant)
case "$REPO_NAME" in
    *\ * | *$'\t'* | *$'\n'*)
        echo "ERROR: REPO_NAME cannot contain spaces. Current value: '$REPO_NAME'"
        exit 1
        ;;
esac

# Convert REPO_NAME to lowercase
ORIGINAL_REPO_NAME="$REPO_NAME"
REPO_NAME=$(echo "$REPO_NAME" | tr '[A-Z]' '[a-z]')
if [ "$ORIGINAL_REPO_NAME" != "$REPO_NAME" ]; then
    echo "INFO: REPO_NAME converted from '$ORIGINAL_REPO_NAME' to '$REPO_NAME' (lowercase)"
fi

# RFC 1123 DNS name validation using case and expr (POSIX compliant)
# Must be lowercase alphanumeric with hyphens, start/end with alphanumeric, max 63 chars
case "$REPO_NAME" in
    ''|*[!a-z0-9-]*)
        echo "ERROR: REPO_NAME '$REPO_NAME' contains invalid characters."
        echo "       Only lowercase letters, numbers, and hyphens are allowed."
        exit 1
        ;;
    -*|*-)
        echo "ERROR: REPO_NAME '$REPO_NAME' cannot start or end with a hyphen."
        echo "       Must start and end with an alphanumeric character."
        exit 1
        ;;
esac

# Check length (RFC 1123 allows up to 63 characters)
REPO_NAME_LENGTH=$(echo "$REPO_NAME" | wc -c)
REPO_NAME_LENGTH=$((REPO_NAME_LENGTH - 1))  # subtract newline
if [ "$REPO_NAME_LENGTH" -gt 63 ]; then
    echo "ERROR: REPO_NAME '$REPO_NAME' is too long ($REPO_NAME_LENGTH chars). Maximum allowed is 63 characters."
    exit 1
fi

# Additional check for consecutive hyphens (not RFC required but good practice)
case "$REPO_NAME" in
    *--*)
        echo "WARNING: REPO_NAME '$REPO_NAME' contains consecutive hyphens. This may cause issues with some systems."
        ;;
esac

CHARTNAME=${CHART_NAME:-$REPO_NAME}
if [ "$CHARTNAME" == "" ]; then
    echo "Chart name override not set.. using $REPO_NAME"
    CHARTNAME=${REPO_NAME}
else
    echo "Chart name override set... using $CHART_NAME"
fi

echo "STARTING"


# Use find to ensure all files are found regardless of shell glob support
# Exclude setupScripts directory to avoid modifying setup scripts themselves
find $SOURCE -type f \( -name "*.yaml" -o -name "*.yml" \) -not -path "*/setupScripts/*" -exec sed -i='' -e "s/sampleAPP/${REPO_NAME}/g" {} \;
find $SOURCE -type f \( -name "*.yaml" -o -name "*.yml" -o -name "*.tpl" \) -not -path "*/setupScripts/*" -exec sed -i='' -e "s/sampleCHARTNAME/${CHARTNAME}/g" {} \;

# Handle specific files
sed -i='' -e "s/sampleAPP/${REPO_NAME}/g" skaffold.yaml 2>/dev/null || true
sed -i='' -e "s/sampleCHARTNAME/${CHARTNAME}/g" skaffold.yaml 2>/dev/null || true
sed -i='' -e "s/sampleAPP/${REPO_NAME}/g" *.md 2>/dev/null || true
sed -i='' -e "s/sampleCHARTNAME/${CHARTNAME}/g" *.md 2>/dev/null || true

# Handle .tekton directory
find .tekton -type f -exec sed -i='' -e "s/sampleAPP/${REPO_NAME}/g" {} \; 2>/dev/null || true
find .tekton -type f -exec sed -i='' -e "s/sampleCHARTNAME/${CHARTNAME}/g" {} \; 2>/dev/null || true

git status

# Configure git user settings if UPDATE_GIT_CONFIG is TRUE
if [ "$UPDATE_GIT_CONFIG" = "TRUE" ]; then
    echo "Configuring git user settings..."
    git config --global user.email "sniadmin@spatialnetworks.com"
    git config --global user.name "SniAdmin"
    git config --global user.signingkey /root/.ssh/ssh-directory/ssh-key.pub
    git config --global gpg.format ssh
    git config --global commit.gpgsign true
    git config --global --add safe.directory $SOURCE
else
    echo "Skipping git user configuration (UPDATE_GIT_CONFIG=$UPDATE_GIT_CONFIG)"
fi

echo "Moving the chart directory sampleCHARTNAME to $CHARTNAME"
git commit -am "Successfully ran the sed cmds to update references"

if [ -d "charts/sampleCHARTNAME" ]; then
  git mv charts/sampleCHARTNAME charts/${CHARTNAME}
  git commit -am "Successfully ran the git mv cmd"
else
  echo "The charts/sampleCHARTNAME does not exist. Not renaming"
fi

echo "Renaming the sample repo file"
sed -e "s/sampleAPP/${REPO_NAME}/g" setupScripts/repo-sampleAPP.yaml > setupScripts/repo-${REPO_NAME}.yaml && rm setupScripts/repo-sampleAPP.yaml

# Now lets enable helm dependencies

ENABLE_CRONS="${ENABLE_CRONS:-FALSE}"
ENABLE_CRONS=`echo "${ENABLE_CRONS}" | tr '[a-z]' '[A-Z]'`
ENABLE_KSVC="${ENABLE_KSVC:-FALSE}"
ENABLE_KSVC=`echo "${ENABLE_KSVC}" | tr '[a-z]' '[A-Z]'`

if [ "$ENABLE_KSVC" != "FALSE" ]; then
    sed -i='' -e 's/ksvc_enabled: false/ksvc_enabled: true/g' charts/$REPO_NAME/values.yaml
    sed -i='' -e 's/ksvc_enabled: false/ksvc_enabled: true/g' skaffold.yaml
fi

if [ "$ENABLE_CRONS" != "FALSE" ]; then
    sed -i='' -e 's/crons_enabled: false/crons_enabled: true/g' charts/$REPO_NAME/values.yaml
    sed -i='' -e 's/crons_enabled: false/crons_enabled: true/g' skaffold.yaml
fi

# Handle REPO_TYPE to update outputType in ci/config.yaml
REPO_TYPE="${REPO_TYPE:-service}"
REPO_TYPE=`echo "${REPO_TYPE}" | tr '[A-Z]' '[a-z]'`

echo "Setting outputType to: $REPO_TYPE"
if [ -f "ci/config.yaml" ]; then
    sed -i='' -e "s/outputType: .*/outputType: ${REPO_TYPE}/g" ci/config.yaml
else
    echo "Warning: ci/config.yaml not found, skipping outputType update"
fi

# Handle ENABLE_HELM to conditionally remove Helm configurations
ENABLE_HELM="${ENABLE_HELM:-TRUE}"
ENABLE_HELM=`echo "${ENABLE_HELM}" | tr '[a-z]' '[A-Z]'`

if [ "$ENABLE_HELM" != "TRUE" ]; then
    echo "ENABLE_HELM is not TRUE, removing Helm configurations..."
    
    # Delete the charts directory
    if [ -d "charts" ]; then
        echo "Removing charts directory"
        rm -rf charts
        git add charts 2>/dev/null || true
    fi
    
    # Set charts section to empty array in ci/config.yaml
    if [ -f "ci/config.yaml" ]; then
        echo "Setting charts configuration to empty array in ci/config.yaml"
        yq eval '.charts = []' ci/config.yaml > ci/config.yaml.tmp && mv ci/config.yaml.tmp ci/config.yaml
    fi
    
    # Remove deploy section from skaffold.yaml
    if [ -f "skaffold.yaml" ]; then
        echo "Removing deploy configuration from skaffold.yaml"
        yq eval 'del(.deploy)' skaffold.yaml > skaffold.yaml.tmp && mv skaffold.yaml.tmp skaffold.yaml
    fi
    
    echo "Helm configurations removed"
else
    echo "ENABLE_HELM is TRUE, keeping Helm configurations"
fi
