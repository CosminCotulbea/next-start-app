import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import React, {Fragment} from "react";
import Cookies from "./Cookies";

const Layout = ({ seoTags, children, resource }) => {

    return (
        <Fragment>
            {seoTags && <Head>
                <title>{seoTags.title || 'Fleets'}</title>
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
            {resource.navbar && <Header resource={resource.navbar} />}
            <div className="page-layout">
                {children}
            </div>
            {resource.cookies && <Cookies cookies={resource.cookies} />}
            {resource.footer && <Footer resource={resource.footer} />}
        </Fragment>
    )
};

export default Layout
