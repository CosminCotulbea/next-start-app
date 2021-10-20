import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Container } from 'react-bootstrap';
import React from "react";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="UTF-8" />
                    <link rel="shortcut icon" href="/fav.ico" />
                    <link rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
                        integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
                        crossOrigin="anonymous" />
                </Head>
                <body>
                    <Container fluid className={"p-0"}>
                        <Main />
                        <NextScript />
                    </Container>
                </body>
            </Html>
        )
    }
}

export default MyDocument
