#!/usr/bin/env bash
set -euo pipefail

repo_root="$(git rev-parse --show-toplevel)"
remote_url="$(git -C "$repo_root" remote get-url origin)"
deploy_dir="$(mktemp -d "${TMPDIR:-/tmp}/bma-pages.XXXXXX")"
trap 'rm -rf "$deploy_dir"' EXIT

cp "$repo_root/index.html" "$deploy_dir/"
cp -R "$repo_root/css" "$repo_root/js" "$deploy_dir/"

git -C "$deploy_dir" init -b gh-pages
git -C "$deploy_dir" config user.name "$(git -C "$repo_root" config user.name)"
git -C "$deploy_dir" config user.email "$(git -C "$repo_root" config user.email)"
git -C "$deploy_dir" add index.html css js
git -C "$deploy_dir" commit -m "Deploy BMA homepage preview"
git -C "$deploy_dir" remote add origin "$remote_url"
git -C "$deploy_dir" push --force origin gh-pages
