import App from "next/app";
import React, { useEffect } from "react";
import AOS from "aos";
import { appWithTranslation } from 'next-i18next';
import { Provider } from "react-redux";
import store from "state/store";
import "src/resources/styles/index.scss";
import "aos/dist/aos.css";


const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
};

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default appWithTranslation(MyApp);
