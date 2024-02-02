import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";

const Portfolio = () => {
  return (
    <div className="port" id="portfolio">
      <Container>
        <h5>PORTFOLIO</h5>
        <Nav
          variant="pills"
          defaultActiveKey="/home"
          className="d-flex flex-row justify-content-center"
        >
          <Nav.Item>
            <Nav.Link href="/home" className="bg-dark">
              ALL
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="portfolio">
            <Nav.Link href="/" className=" text-dark">
              GRAPHICS DESIGN
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="portfolio">
            <Nav.Link href="/" className="text-dark">
              WEB DESIGN
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="portfolio">
            <Nav.Link href="/" className="text-dark">
              PHOTOGRAPHY
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Row className="port_row">
          <Col md={4}>
            <h1>95%</h1>
            <h6>Graphics Design</h6>
          </Col>
          <Col md={4}>
            <h1>98%</h1>
            <h6>Web Design</h6>
          </Col>
          <Col md={4}>
            <h1>90%</h1>
            <h6>Photography</h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
