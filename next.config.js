const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
module.exports = withImages();
module.exports = withSass({
    target: 'serverless',
    webpackDevMiddleware: config => {
        config.watchOptions = {
            poll: 1000,
            aggregateTimeout: 300,
        };
        return config
    },
});
