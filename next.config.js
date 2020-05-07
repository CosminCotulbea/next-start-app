const withSass = require('@zeit/next-sass');
const withCSS = require("@zeit/next-css");
const withImages = require('next-images');
require('dotenv').config();

module.exports = withImages(withSass(withCSS({
    target: 'serverless',
    env: {
        // Reference a variable that was defined in the .env file and make it available at Build Time
        API_URL: process.env.API_URL,
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        FACEBOOK_CLIENT_ID: process.env.FACEBOOK_CLIENT_ID
    },
    webpackDevMiddleware: config => {
        config.disableHostCheck = true;
        config.watchOptions = {
            poll: 1000,
            aggregateTimeout: 300
        };
        return config;
    },
})));
