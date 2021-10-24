module.exports = {
    i18n: {
        defaultLocale: process.env.DEFAULT_LANG,
        locales: ['en', 'ro']
    },
    debug: process.env.APP_ENV === 'local',
    serializeConfig: false,
    use: [],
    defaultNS: 'translation',
    returnObjects: true,
};
