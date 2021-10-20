import React, { useEffect } from "react";
import { Container, Row, Col} from "react-bootstrap";
// import { useTranslation } from 'next-i18next';
import Layout from "@components/Layout";
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useDispatch } from "react-redux";
import { getUser } from "src/state/user/reducer";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);

  // const { t } = useTranslation();
  // const seoTags = t("seo", { returnObjects: true });
  // console.log(seoTags);

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
    return (
        <Layout>
            {page}
        </Layout>
    )
}

// export const getStaticProps = async ({ locale }) => ({
//   props: { ...await serverSideTranslations(locale) }
// });

export default Home;
