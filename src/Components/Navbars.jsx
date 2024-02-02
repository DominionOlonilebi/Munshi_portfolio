import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navbars = () => {
  return (
    <Navbar expand="lg" className="navbars">
      <Container>
        <Navbar.Brand className="navbars_brand">Swinton</Navbar.Brand>
        <Row className=" d-flex flex-row justify-content-end">
          <Col>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="navs" variant="underline" defaultActiveKey="/">
                <Nav.Link href="/" className="linkss mx-2">
                  Home
                </Nav.Link>
                <Nav.Link href="#about" className="linkss mx-2">
                  About
                </Nav.Link>
                <Nav.Link href="#services" className="linkss mx-2">
                  Services
                </Nav.Link>
                <Nav.Link href="#porfolio" className="linkss mx-2">
                  Portfolio
                </Nav.Link>
                <Nav.Link href="#testimonial" className="linkss mx-2">
                  Testimonial
                </Nav.Link>
                <Nav.Link href="#team" className="linkss mx-2">
                  Team
                </Nav.Link>
                <Nav.Link href="#team" className="linkss mx-2">
                  Blog
                </Nav.Link>
                <Nav.Link href="#contact" className="linkss mx-2">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Navbars;
