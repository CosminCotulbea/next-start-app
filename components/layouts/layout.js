import React from "react";
import Head from 'next/head';
import '../../resources/styles/app.scss';
import '../../resources/styles/nprogress.scss';
import Header from "./header";
import Nav from "./nav";
import Footer from "./footer";
import {Container} from 'reactstrap';
import classNames from 'classnames';

const Layout = ({children, title = 'Title'}) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                {/*<link rel="icon" href="/favicon.ico"/>*/}
            </Head>

            <Header/>

            <Nav/>

            {children}

            <Footer/>
        </div>
    );
};

export default Layout;
