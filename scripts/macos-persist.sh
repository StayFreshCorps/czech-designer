#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
LABEL="cz.czechdesigner.dev"
PORT=3111
LOG_DIR="$ROOT/.persist"
LOG="$LOG_DIR/next.log"

if [[ "$(uname)" != "Darwin" ]]; then
  echo "This keep-alive is for macOS (LaunchAgent). On this machine just leave pnpm dev on ${PORT}."
  exit 0
fi

PLIST="$HOME/Library/LaunchAgents/${LABEL}.plist"
DOMAIN="gui/$(id -u)"

install() {
  mkdir -p "$LOG_DIR" "$HOME/Library/LaunchAgents"
  cat >"$PLIST" <<EOF
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>${LABEL}</string>
  <key>WorkingDirectory</key>
  <string>${ROOT}</string>
  <key>ProgramArguments</key>
  <array>
    <string>/bin/bash</string>
    <string>${ROOT}/scripts/run-dev.sh</string>
  </array>
  <key>RunAtLoad</key>
  <true/>
  <key>KeepAlive</key>
  <true/>
  <key>StandardOutPath</key>
  <string>${LOG}</string>
  <key>StandardErrorPath</key>
  <string>${LOG}</string>
</dict>
</plist>
EOF
  launchctl bootout "${DOMAIN}/${LABEL}" 2>/dev/null || true
  launchctl bootstrap "$DOMAIN" "$PLIST"
  echo "czech-designer stays on http://localhost:${PORT}"
  echo "Survives closing the terminal and sleeping the Mac."
  echo "Does not touch 3002 / podekovani."
}

uninstall() {
  launchctl bootout "${DOMAIN}/${LABEL}" 2>/dev/null || true
  rm -f "$PLIST"
  echo "Keep-alive removed. 3002 / podekovani is unchanged."
}

case "${1:-install}" in
  install) install ;;
  uninstall) uninstall ;;
  *)
    echo "usage: $0 install|uninstall"
    exit 1
    ;;
esac
