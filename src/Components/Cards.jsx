import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {
  BsCameraFill,
  BsFillFilterCircleFill,
  BsFillLaptopFill,
  BsFillLayersFill,
  BsFillLightbulbFill,
  BsPieChartFill,
} from "react-icons/bs";

const Cards = () => {
  return (
    <div id="services">
      <Container fluid className="cards_container">
        <Container>
          <Row>
            <Col md={4}>
              <img src="Images/men1.jpg" alt="" className="img-fluid" />
            </Col>
            <Col md={4}>
              <Card style={{ width: "21rem" }} className="card-fluid mb-4">
                <span className="d-flex flex-row justify-content-center mb-1 mt-4">
                  <BsFillFilterCircleFill />
                </span>
                <Card.Body>
                  <Card.Title className="cards_title">WEB DESIGN</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card style={{ width: "21rem" }} className="card-fluid mb-4">
                <span className="d-flex flex-row justify-content-center mb-1 mt-4">
                  <BsFillFilterCircleFill />
                </span>
                <Card.Body>
                  <Card.Title className="cards_title">
                    GRAPHICS DESIGN
                  </Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card style={{ width: "21rem" }} className="card-fluid mb-4">
                <span className="d-flex flex-row justify-content-center mb-1 mt-4">
                  <BsFillFilterCircleFill />
                </span>
                <Card.Body>
                  <Card.Title className="cards_title">PHOTOGRAPHY</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card style={{ width: "21rem" }} className="card-fluid mb-4">
                <span className="d-flex flex-row justify-content-center mb-1 mt-4">
                  <BsFillFilterCircleFill />
                </span>
                <Card.Body>
                  <Card.Title className="cards_title">
                    WEB DEVELOPMENT
                  </Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Cards;
