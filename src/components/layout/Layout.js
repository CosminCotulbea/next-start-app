import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import React, {Fragment} from "react";
import Cookies from "./Cookies";

const Layout = ({ seoTags, children, navbar = true, cookies = true, footer = true}) => {
    return (
        <Fragment>
            {seoTags && <Head>
                <title>{seoTags.title || 'Next start'}</title>
                <meta name="description" content={seoTags.description} />
                <meta property="og:type" content="website" />
                <meta name="og:title" property="og:title" content={seoTags.og.title} />
                <meta name="og:description" property="og:description"
                    content={seoTags.og.description} />
                <meta property="og:site_name" content={seoTags.og.site_name} />
                <meta property="og:url" content={seoTags.og.url} />
                <meta property="og:image" content={seoTags.og.image} />
                <meta name="twitter:card" content={seoTags.twitter.card} />
                <meta name="twitter:title" content={seoTags.twitter.title} />
                <meta name="twitter:description" content={seoTags.twitter.description} />
                <meta name="twitter:site" content={seoTags.twitter.site} />
                <meta name="twitter:creator" content={seoTags.twitter.creator} />
            </Head>
            }
            {navbar && <Header />}
            <div className="page-layout">
                {children}
            </div>
            {cookies && <Cookies />}
            {footer && <Footer />}
        </Fragment>
    )
};

export default Layout
