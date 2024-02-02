import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Accordion,
  Card,
  Carousel,
  CarouselItem,
  Col,
  Container,
  Row,
} from "react-bootstrap";

const Testimonial = () => {
  return (
    <section className="pb-5" id="testimonial">
      <Container className="pb-5 testimony">
        <h4 className="mb-3">Testimonial</h4>
        <Row className="d-flex flex-row justify-content-center">
          <Col md={7}>
            <Carousel slide>
              <Carousel.Item>
                <Card className="card-fluid py-4">
                  <h6 className="mx-3">
                    <strong>Favor Johnson</strong>
                  </h6>
                  <Card.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Scelerisque fermentum dui faucibus in ornare quam.
                    Dignissim suspendisse in est ante in. Netus et malesuada
                    fames ac turpis egestas.
                  </Card.Body>
                  <div className="mx-3">
                    <FontAwesomeIcon
                      icon={faStar}
                      width={16}
                      height={16}
                      className="testimony_star"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      width={16}
                      height={16}
                      className="testimony_star"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      width={16}
                      height={16}
                      className="testimony_star"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      width={16}
                      height={16}
                      className="testimony_star"
                    />
                    <FontAwesomeIcon
                      icon={faStarHalf}
                      width={16}
                      height={16}
                      className="testimony_star"
                    />
                  </div>
                </Card>
              </Carousel.Item>

              <Carousel.Item>
                <Card className="card-fluid py-4">
                  <h6 className="mx-3">
                    <strong>Karly Smith</strong>
                  </h6>
                  <Card.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Scelerisque fermentum dui faucibus in ornare quam.
                    Dignissim suspendisse in est ante in. Netus et malesuada
                    fames ac turpis egestas.
                  </Card.Body>
                  <div className="mx-3">
                    <FontAwesomeIcon
                      icon={faStar}
                      width={16}
                      height={16}
                      className="testimony_star"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      width={16}
                      height={16}
                      className="testimony_star"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      width={16}
                      height={16}
                      className="testimony_star"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      width={16}
                      height={16}
                      className="testimony_star"
                    />
                    <FontAwesomeIcon
                      icon={faStarHalf}
                      width={16}
                      height={16}
                      className="testimony_star"
                    />
                  </div>
                </Card>
              </Carousel.Item>
              <Carousel.Item>
                <Card className="card-fluid py-4">
                  <h6 className="mx-3">
                    <strong>Patience Tom</strong>
                  </h6>
                  <Card.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Scelerisque fermentum dui faucibus in ornare quam.
                    Dignissim suspendisse in est ante in. Netus et malesuada
                    fames ac turpis egestas.
                  </Card.Body>
                  <div className="mx-3">
                    <FontAwesomeIcon
                      icon={faStar}
                      width={16}
                      height={16}
                      className="testimony_star"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      width={16}
                      height={16}
                      className="testimony_star"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      width={16}
                      height={16}
                      className="testimony_star"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      width={16}
                      height={16}
                      className="testimony_star"
                    />
                    <FontAwesomeIcon
                      icon={faStarHalf}
                      width={16}
                      height={16}
                      className="testimony_star"
                    />
                  </div>
                </Card>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
