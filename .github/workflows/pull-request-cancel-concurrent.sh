#!/bin/bash
set -eou pipefail

GITHUB_TOKEN="${1}"

curl \
  --fail \
  --silent \
  --show-error \
  --request "GET" \
  --url "${GITHUB_API_URL}/repos/${GITHUB_REPOSITORY}/actions/runs/${GITHUB_RUN_ID}" \
  --header "Authorization: token ${GITHUB_TOKEN}" \
  --output "run.json"

WORKFLOW_ID=$(jq ".workflow_id" run.json)

curl \
  --fail \
  --silent \
  --show-error \
  --request "GET" \
  --url "${GITHUB_API_URL}/repos/${GITHUB_REPOSITORY}/actions/workflows/${WORKFLOW_ID}/runs?branch=${GITHUB_HEAD_REF}&status=queued&status=in_progress" \
  --header "Authorization: token ${GITHUB_TOKEN}" \
  --output "runs.json"

for WORKFLOW_RUN_ID in $(jq ".workflow_runs[] | .id" runs.json); do

  if [ "${WORKFLOW_RUN_ID}" != "${GITHUB_RUN_ID}" ]; then
    echo ":: Cancelling workflow run #${WORKFLOW_RUN_ID}..."
    curl \
      --silent \
      --show-error \
      --request "POST" \
      --url "${GITHUB_API_URL}/repos/${GITHUB_REPOSITORY}/actions/runs/${WORKFLOW_RUN_ID}/cancel" \
      --header "Authorization: token ${GITHUB_TOKEN}"
  fi

done