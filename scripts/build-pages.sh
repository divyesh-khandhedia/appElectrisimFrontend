#!/usr/bin/env bash
set -euo pipefail

site_dir=${1:?Provide the directory for the GitHub Pages site}
web_dir="$(dirname -- "${BASH_SOURCE[0]}")/../src/main/webapp"

mkdir -p -- "$site_dir"
tar --exclude='./WEB-INF' --exclude='./META-INF' --exclude='*.backup' \
    --exclude='./_headers' --exclude='./_redirects' --exclude='./_routes*.json' \
    -C "$web_dir" -cf - . | tar -C "$site_dir" -xf -
touch -- "$site_dir/.nojekyll"
