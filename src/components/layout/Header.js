import React from "react";
import {Col, Container, Row} from "react-bootstrap";

const Header = ({params}) => {
  return <Container>
    <Row className={"py-5"}>
      <Col xl={12} sm={12}>
        <p>this is the header</p>
      </Col>
    </Row>
  </Container>
};

export default Header;
