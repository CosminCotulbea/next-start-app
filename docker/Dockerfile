FROM node:10.16.0

RUN mkdir /app
WORKDIR /app

# Install PM2 globally
RUN npm install --global pm2

COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 8080

CMD [ "pm2-runtime", "npm", "--", "start" ]
