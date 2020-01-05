import React from "react";
import Head from 'next/head';
import '../../resources/styles/app.scss';
import Header from "./header";
import Nav from "./nav";
import Footer from "./footer";

const Layout = ({ children, title = 'This is the default title' }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header/>

            <Nav/>

            <div className="content">
                {children}
            </div>

            <Footer/>
        </div>
    )
};

export default Layout;
