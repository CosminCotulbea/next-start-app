const { i18n } = require('./next-i18next.config');

module.exports = {
  env: {
    // Reference a variable that was defined in the .env file and make it available at Build Time
    API_ENDPOINT: process.env.API_ENDPOINT,
    APP_ENV: process.env.APP_ENV,
    APP_DEBUG: process.env.APP_DEBUG,
    DEFAULT_LANG: process.env.DEFAULT_LANG,
    REDIS_HOST: process.env.REDIS_HOST,
    REDIS_PORT: process.env.REDIS_PORT,
    REDIS_PASSWORD: process.env.REDIS_PASSWORD,
    CERT_FILE_NAME: process.env.CERT_FILE_NAME
  },
  i18n,
  webpackDevMiddleware: config => {
    config.disableHostCheck = true;
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300
    };
    return config;
  },
};
