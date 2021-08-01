import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";

const Footer = ({ resource }) => {
  return (
    <Container>
      <Row className={"py-5"}>
        <Col xl={12} sm={12}>
          <p>this is the footer</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
