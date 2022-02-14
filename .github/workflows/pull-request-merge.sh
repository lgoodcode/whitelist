#!/bin/bash
set -eou pipefail

GITHUB_TOKEN="${1}"
GITHUB_PR_NUMBER="${2}"
GITHUB_PR_TITLE="${3}"

curl \
  --fail \
  --silent \
  --show-error \
  --request "PUT" \
  --url "${GITHUB_API_URL}/repos/${GITHUB_REPOSITORY}/pulls/${GITHUB_PR_NUMBER}/merge" \
  --header "Authorization: token ${GITHUB_TOKEN}" \
  --header "Content-Type: application/json" \
  --data "{
    \"merge_method\": \"squash\",
    \"commit_title\": \"${GITHUB_PR_TITLE}\",
    \"commit_message\": \"\"
  }"
