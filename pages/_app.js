import React from 'react';
import {appWithTranslation} from 'next-i18next';
import i18next from 'next-i18next.config';
import {Provider} from 'react-redux';
import store from 'src/state/store';
import 'src/resources/styles/index.scss';
import Head from 'next/head';

const MyApp = ({Component, pageProps}) => {
    const getLayout = Component.getLayout || ((page) => page);
    return <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="UTF-8" />
            <meta charSet="UTF-8" />
                    <link rel="shortcut icon" href="/fav.ico" />
                    <link rel="stylesheet"
                          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
                          integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
                          crossOrigin="anonymous" />
            <link rel="shortcut icon" href="/fav.ico" />
        </Head>
        <Provider store={store}>
            {getLayout(<Component {...pageProps} />)}
        </Provider>
    </>;
};

export default appWithTranslation(MyApp, i18next);
