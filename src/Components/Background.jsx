import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    <div id="home">
      <Container fluid className="home_container">
        <Container>
          <Row>
            <Col md={6}>
              <img src="Images/men7.jpg" alt="" className="img-fluid" />
            </Col>
            <Col md={6} className="home_col">
              <h1>Rayhan Munshi</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Scelerisque fermentum dui faucibus in ornare quam. Dignissim
                suspendisse in est ante in. Netus et malesuada fames ac turpis
                egestas. Congue nisi vitae suscipit tellus mauris a diam. Leo a
                diam sollicitudin tempor id eu nisl nunc. Integer enim neque
                volutpat ac tincidunt vitae semper. Scelerisque fermentum dui
                faucibus in ornare quam. Dignissim suspendisse in est ante
                Tortor at risus viverra adipiscing at in tellus integer.
              </p>
              <Button className="home_button mt-4">Learn More</Button>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Home;
