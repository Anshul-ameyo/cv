import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import AMEYO from "../assets/img/experience/ameyo.svg";
import Tilt from "react-tilt";
import "./Experience.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              >
                <Card.Img
                  variant="top"
                  className="img-resize"
                  src={AMEYO}
                  alt="Accenture logo"
                />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">UI DEVELOPER</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">
                      Frontend Developer
                    </strong>
                    <br />
                    <strong>Technology:</strong> HTML, XML, CSS, SASS, JAVA,
                    GWTP, REACT, JAVASCRIPT
                    <br />
                    <strong>Duration:</strong> MARCH 2019 - Present
                    <br />
                    <strong> Company Description : Product Based</strong>
                    <ul className="text-left">
                      <li>
                        <strong>About</strong>
                        <br />
                        Ameyo being a platform build to solve all the customer
                        experience problems offers a robust Contact Center
                        Solution. The solution aims to enable all organizations
                        – SMEs or Enterprises in managing their customer
                        interactions along with getting rid of the siloed
                        operations and workforce management. Some of our
                        industry-winning products are Fusion CX | Omni | Voice |
                        Collect | Emerge | Engage
                      </li>
                      <li>
                        <strong>Developed &amp; enhanced</strong> multiple
                        features with custom option across web application.
                      </li>

                      <li>
                        <strong>Performed</strong> CRUD operations on multiple
                        databases to load/ remove data according to the business
                        requirements.
                      </li>
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
