import React from 'react';
import {Provider} from 'react-redux';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import createAppStore from '../state/store';
import NProgress from 'nprogress';
import Router from 'next/router';
import 'bootstrap/dist/css/bootstrap.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());


class MyApp extends App {
    render() {
        const {Component, pageProps, store} = this.props;
        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        );
    }
}


export default withRedux(createAppStore)(MyApp);
