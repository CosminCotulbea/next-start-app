import Document, {Head, Html, Main, NextScript} from 'next/document';
import {Container} from 'react-bootstrap';
import React from 'react';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head />
                <body>
                    <Container fluid className={'p-0'}>
                        <Main />
                        <NextScript />
                    </Container>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
