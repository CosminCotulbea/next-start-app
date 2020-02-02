FROM node:alpine

RUN mkdir /app
WORKDIR /app

# Install PM2 globally
RUN npm install --global pm2

COPY package*.json ./

RUN npm install --production --no-optional
COPY .. ./

EXPOSE 8080

CMD [ "pm2-runtime", "npm", "--", "start" ]
