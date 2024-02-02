import React from "react";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";

const About = () => {
  return (
    <div id="about">
      <Container className="about_container">
        <Row>
          <div className="about_div">
            <h4>About Me</h4>
            <p className="about_p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
              <br /> labore et dolore magna aliqua. Eu tincidunt tortor aliquam
              nulla facilisi cras.
              <br />
            </p>
          </div>
          <Col md={8}>
            <h4>hello, I am Rayhan Munshi</h4>
            <h6>Web and Graphics Designer</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu
              tincidunt tortor aliquam nulla facilisi cras. Sagittis purus sit
              amet volutpat. Molestie nunc non blandit massa enim. Nullam ac
              tortor vitae purus faucibus ornare suspendisse. Condimentum vitae
              sapien pellentesque habitant morbi tristique senectus et. Molestie
              nunc non blandit massa enim nec dui. Dignissim suspendisse in est
              ante in. Netus et malesuada fames ac turpis egestas.
            </p>
            <h6 className="mt-5">
              0123 456 789 <span>info@webdomain.com</span>
            </h6>
            <div className="progressbar">
              <h5 className="bars mt-3">Web Design</h5>
              <ProgressBar variant="dark" now={95} className="bar" />
              <h5 className="bars mt-3">Graphics Design</h5>
              <ProgressBar variant="dark" now={83} className="bar" />
              <h5 className="bars mt-3">Photography</h5>
              <ProgressBar variant="dark" now={70} className="bar" />
              <h5 className="bars mt-3">Web Development</h5>
              <ProgressBar variant="dark" now={90} className="bar" />
            </div>
          </Col>
          <Col md={4}>
            <img src="Images/men2.jpg" alt="" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
