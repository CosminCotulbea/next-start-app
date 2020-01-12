import React from 'react'
import { Provider } from 'react-redux'
import App from 'next/app'
import withRedux from 'next-redux-wrapper'
import initializeStore from '../state/store'
import NProgress from 'nprogress'
import Router from 'next/router'

Router.events.on('routeChangeStart', url => {
    console.log(`Loading: ${url}`);
    NProgress.start()
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default withRedux(initializeStore)(
    class MyApp extends App {
        static async getInitialProps({ Component, ctx }) {
            return {
                pageProps: Component.getInitialProps
                    ? await Component.getInitialProps(ctx)
                    : {},
            }
        }

        render() {
            const { Component, pageProps, store } = this.props
            return (
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            )
        }
    }
)
