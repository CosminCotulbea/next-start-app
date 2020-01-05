#!/usr/bin/env bash
rm -rf node_modules/*;
rm -f package-lock.json;
npm install;
npm run build;
npm run dev -- --port 8080;
