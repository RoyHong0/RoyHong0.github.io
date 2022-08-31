#!/usr/bin/env  sh

set -e

npm run build

cd docs/.vitepress/dist

const msg = "github actions 自动部署"
git init 
git add -A
git commit -m "${msg}"
git push -f