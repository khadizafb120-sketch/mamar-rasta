#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"
PORT="${1:-4179}"
echo "Starting Mamar Rasta (মামার রাস্তা) on http://localhost:${PORT}"
exec pnpm exec vite preview --host 0.0.0.0 --port "${PORT}"
