#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
LABEL="cz.czechdesigner.dev"
PORT=3111
LOG_DIR="$ROOT/.persist"
LOG="$LOG_DIR/next.log"
PID_FILE="$LOG_DIR/next.pid"
RUNNER="$ROOT/scripts/run-dev.sh"

start_detached() {
  mkdir -p "$LOG_DIR"
  if lsof -nP -iTCP:"$PORT" -sTCP:LISTEN >/dev/null 2>&1; then
    echo "Already listening on http://localhost:${PORT}"
    return 0
  fi
  nohup /bin/bash "$RUNNER" >>"$LOG" 2>&1 &
  echo $! >"$PID_FILE"
  echo "Started detached on http://localhost:${PORT} (pid $(cat "$PID_FILE"))"
}

if [[ "$(uname)" != "Darwin" ]]; then
  start_detached
  exit 0
fi

PLIST="$HOME/Library/LaunchAgents/${LABEL}.plist"
DOMAIN="gui/$(id -u)"

write_plist() {
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
    <string>${RUNNER}</string>
  </array>
  <key>RunAtLoad</key>
  <true/>
  <key>KeepAlive</key>
  <true/>
  <key>LimitLoadToSessionType</key>
  <string>Aqua</string>
  <key>StandardOutPath</key>
  <string>${LOG}</string>
  <key>StandardErrorPath</key>
  <string>${LOG}</string>
</dict>
</plist>
EOF
  plutil -lint "$PLIST" >/dev/null
}

load_agent() {
  launchctl bootout "${DOMAIN}/${LABEL}" 2>/dev/null || true
  launchctl unload "$PLIST" 2>/dev/null || true
  if launchctl load -w "$PLIST" 2>/dev/null; then
    return 0
  fi
  if launchctl bootstrap "$DOMAIN" "$PLIST" 2>/dev/null; then
    return 0
  fi
  return 1
}

install() {
  write_plist
  if load_agent; then
    echo "LaunchAgent loaded. http://localhost:${PORT}"
    echo "Does not touch 3002 / podekovani."
    return 0
  fi
  echo "LaunchAgent bootstrap failed (macOS error 5). Starting without it."
  start_detached
  echo "Site is up. For sleep-proof keep-alive, run this once in Terminal.app (not Cursor):"
  echo "  launchctl load -w ${PLIST}"
}

uninstall() {
  launchctl bootout "${DOMAIN}/${LABEL}" 2>/dev/null || true
  launchctl unload "$PLIST" 2>/dev/null || true
  rm -f "$PLIST"
  if [[ -f "$PID_FILE" ]]; then
    kill "$(cat "$PID_FILE")" 2>/dev/null || true
    rm -f "$PID_FILE"
  fi
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
