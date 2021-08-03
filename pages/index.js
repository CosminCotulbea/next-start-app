import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useTranslation } from 'next-i18next';
import Layout from "src/components/layout/Layout";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useDispatch, useSelector } from "react-redux";
import { userBaseSelector, userNameSelector, userParsedNameSelector } from "state/user/selectors";
import { getUser } from "state/user/reducer";

const Home = () => {

  const dispatch = useDispatch();
  const user = useSelector(userBaseSelector);
  const userName = useSelector(userNameSelector);
  const userParsedName = useSelector(userParsedNameSelector());

  useEffect(() => {
    dispatch(getUser());
  }, []);

  console.log(user);
  console.log(userName);
  console.log(userParsedName);

  const { t } = useTranslation();
  const seoTags = t("home:seoTags", { returnObjects: true });

  return (
    <Layout title={"Home"} className="custom-class" seoTags={seoTags} cookies={false}>
      <Container>
        <Row>
          <Col xl={12} className="text-center pt-5">
            <h3 className="h3Black">{t('home:features.heading')}</h3>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: { ...await serverSideTranslations(locale, ['home']) }
});

export default Home;
