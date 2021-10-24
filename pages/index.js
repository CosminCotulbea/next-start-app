import React, {useEffect} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {AuthWrapper} from "@components/RouteWrappers/AuthWrapper";
import Layout from "@components/Layout";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import { useTranslation } from 'next-i18next';

const Home = () => {
    return (
        <Container>
            <Row>
                <Col md={12} className="text-center pt-5">
                    <h3 className="h3Black">{'Home'}</h3>
                </Col>
            </Row>
        </Container>
    );
};

Home.getLayout = function getLayout(page) {
    const {t} = useTranslation();
    return (
        <Layout seoTags={t("translation:seo", { returnObjects: true })}>
            {page}
        </Layout>
    )
}

export const getStaticProps = async ({ locale }) => ({
  props: { ...await serverSideTranslations(locale, ['translation']) }
});

export default AuthWrapper(Home);
