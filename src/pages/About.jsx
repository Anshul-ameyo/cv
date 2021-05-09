import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Profile from "../assets/img/profile/IMG_20190326_121903.jpg";
import "./About.css";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image
                  className="profile justify-content-end"
                  alt="profile"
                  src={Profile}
                  thumbnail
                  fluid
                ></Image>
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hi there! I am <strong>&nbsp;Anshul Rawat</strong>
                <br />
                Creative UI Developer with 2 years facilitating and supporting
                human interactions with complex systems and software. Talented
                at planning and creating graphics for websites using GWTP (MVC)
                methodology in ECLIPSE and seasoned expert in languages such as
                HTML5/XML, CSS3 and JAVA as well as scripting language
                JavaScript.
                <br />
                In 2018, I have completed my Engineering with specialization in
                'Computer Science and Engineering'.
                <br />
                Working with the clients, my goal is always driven towards
                providing amazing experience with the best level of quality and
                service to them.
                <br />
                <br />I love learning about new technologies, what problems are
                they solving and How can I use them to build better and scalable
                products.
                <br />
              </Row>
              <Row className="d-flex justify-content-center flex-wrap">
                <div>
                  <a href="#contact">
                    <Button className="m-2" variant="outline-primary">
                      Let's talk
                    </Button>
                  </a>
                </div>
                <div>
                  <a
                    href="https://drive.google.com/file/d/1LzwaIi6PCfQFn0CSCTbVIYly8tvTXfFF/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="m-2" variant="outline-success">
                      My Resume
                    </Button>
                  </a>
                </div>
                <div>
                  <a
                    href="https://github.com/Anshul-ameyo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="m-2" variant="outline-dark">
                      GitHub
                    </Button>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/anshul-r-476b51133/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="m-2" variant="outline-info">
                      LinkedIn
                    </Button>
                  </a>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
