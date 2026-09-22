#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

export PATH="/opt/homebrew/bin:/usr/local/bin:$HOME/.local/share/pnpm:$HOME/Library/pnpm:$PATH"

if [[ -s "$HOME/.nvm/nvm.sh" ]]; then
  # shellcheck disable=SC1091
  . "$HOME/.nvm/nvm.sh"
  nvm use --silent >/dev/null 2>&1 || nvm use default >/dev/null 2>&1 || true
fi

if command -v fnm >/dev/null 2>&1; then
  eval "$(fnm env --use-on-cd 2>/dev/null || true)"
fi

if ! command -v pnpm >/dev/null 2>&1; then
  if command -v corepack >/dev/null 2>&1; then
    corepack enable >/dev/null 2>&1 || true
  fi
fi

if ! command -v pnpm >/dev/null 2>&1; then
  echo "pnpm not on PATH. Install pnpm, then retry." >&2
  echo "PATH=$PATH" >&2
  exit 1
fi

if [[ ! -f "$ROOT/.env" && -f "$ROOT/.env.example" ]]; then
  cp "$ROOT/.env.example" "$ROOT/.env"
fi

exec pnpm exec cross-env NODE_OPTIONS=--no-deprecation next dev --hostname 0.0.0.0 --port 3111
