#!/usr/bin/env bash
RUN npm install
pm2-runtime node redisServer
