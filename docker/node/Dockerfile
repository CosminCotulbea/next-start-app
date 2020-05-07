FROM node:stretch

WORKDIR /var/www

# Install PM2 globally
RUN npm install --global pm2
RUN npm install --production --no-optional

EXPOSE 8080

CMD [ "pm2-runtime", "npm", "--", "start" ]
