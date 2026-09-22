#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

if [[ ! -d .git ]]; then
  echo "Not a git repo. Run this from czech-designer." >&2
  exit 1
fi

BRANCH="$(git rev-parse --abbrev-ref HEAD)"
REMOTE="${1:-origin}"

if ! git remote get-url "$REMOTE" >/dev/null 2>&1; then
  echo "No remote named ${REMOTE}. GitHub backup is not configured." >&2
  exit 1
fi

git add -A
if git diff --cached --quiet; then
  echo "Nothing new to commit."
else
  git commit -m "Backup from local Mac — $(date '+%Y-%m-%d %H:%M')"
fi

git push -u "$REMOTE" "$BRANCH"
echo "Backed up ${BRANCH} to $(git remote get-url "$REMOTE")"
