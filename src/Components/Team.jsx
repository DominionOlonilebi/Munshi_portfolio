import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Team = () => {
  return (
    <div id="team">
      <Container className="team_container">
        <h4>Team Members</h4>
        <p className="team_p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
          <br /> labore et dolore magna aliqua. Eu tincidunt tortor aliquam
          nulla facilisi cras.
        </p>
        <Row>
          <Col md={3}>
            <img src="Images/pics10.jpg" alt="" className="img-fluid" />
            <h6>Manager</h6>
            <p>Lara zee</p>
          </Col>
          <Col md={3}>
            <img src="Images/pics10.jpg" alt="" className="img-fluid" />
            <h6>Manager</h6>
            <p>Lara zee</p>
          </Col>
          <Col md={3}>
            <img src="Images/pics10.jpg" alt="" className="img-fluid" />
            <h6>Manager</h6>
            <p>Lara zee</p>
          </Col>
          <Col md={3}>
            <img src="Images/pics10.jpg" alt="" className="img-fluid" />
            <h6>Manager</h6>
            <p>Lara zee</p>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <img src="Images/img2.jpg" alt="" className="img-fluid" />
            <h6>Secretary</h6>
            <p>Mary kay</p>
          </Col>
          <Col md={3}>
            <img src="Images/img2.jpg" alt="" className="img-fluid" />
            <h6>Secretary</h6>
            <p>Mary kay</p>
          </Col>
          <Col md={3}>
            <img src="Images/img2.jpg" alt="" className="img-fluid" />
            <h6>Secretary</h6>
            <p>Mary kay</p>
          </Col>
          <Col md={3}>
            <img src="Images/img2.jpg" alt="" className="img-fluid" />
            <h6>Secretary</h6>
            <p>Mary kay</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Team;
