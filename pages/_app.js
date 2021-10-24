import React from "react";
import {appWithTranslation} from 'next-i18next';
import i18next from 'next-i18next.config';
import {Provider} from "react-redux";
import store from "src/state/store";
import "src/resources/styles/index.scss";
import Head from 'next/head'

const MyApp = ({Component, pageProps}) => {
    const getLayout = Component.getLayout || ((page) => page);
    return <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta charSet="UTF-8" />
            <link rel="shortcut icon" href="/fav.ico" />
        </Head>
        <Provider store={store}>
            {getLayout(<Component {...pageProps} />)}
        </Provider>
    </>
};

export default appWithTranslation(MyApp, i18next);
