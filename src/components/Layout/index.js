import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import React from "react";
import {Container} from "react-bootstrap";

const Layout = ({seoTags, children, header = true, footer = true}) => {
    return (
        <>
            {seoTags && <Head>
                <title>{seoTags.title || 'Fleets'}</title>
                <meta name="description" content={seoTags.description}/>
                <meta property="og:type" content="website"/>
                <meta name="og:title" property="og:title" content={seoTags.og.title}/>
                <meta name="og:description" property="og:description"
                      content={seoTags.og.description}/>
                <meta property="og:site_name" content={seoTags.og.site_name}/>
                <meta property="og:url" content={seoTags.og.url}/>
                <meta property="og:image" content={seoTags.og.image}/>
                <meta name="twitter:card" content={seoTags.twitter.card}/>
                <meta name="twitter:title" content={seoTags.twitter.title}/>
                <meta name="twitter:description" content={seoTags.twitter.description}/>
                <meta name="twitter:site" content={seoTags.twitter.site}/>
                <meta name="twitter:creator" content={seoTags.twitter.creator}/>
            </Head>}
            <Container fluid>
                <Sidebar/>
                {header && <Header/>}
                <div className="page-wrapper">
                    {children}
                </div>
                {footer && <Footer/>}
            </Container>
        </>
    )
};

export default Layout
