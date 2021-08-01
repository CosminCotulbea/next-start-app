#!/usr/bin/env bash
npm install
npm run build
pm2-runtime pm2_dev.json
