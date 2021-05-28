import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import "./Projects.css";

/* skills */
import L_REACT from "../assets/img/skills/react.svg";
import Image from "react-bootstrap/Image";
import L_HTML5 from "../assets/img/skills/html-5.svg";
import L_CSS3 from "../assets/img/skills/css3.svg";
import L_MATERIALUI from "../assets/img/skills/material-ui-1.svg";
import L_SEMANTICUI from "../assets/img/skills/semantic.png";

/* projects */
import COVIDTRACKER from "../assets/img/projects/Covid_19_img1.png";
import CONTACTMANAGER from "../assets/img/projects/contactManager.png";

const Projects = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
          {/* Project:COVID-19 TRACKER*/}
          <ImageEvent
            className="text-center"
            text="Covid-19 Tracker"
            src={COVIDTRACKER}
            alt="Covid-19 Tracker"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a Covid-19 tracker
                        App created with React and Material UI that keeps a
                        track of covid 19 active cases and further details.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>
                            Shows Active,Deaths,Last updated and Recovered Cases
                            in form of charts and bar graph
                          </li>
                          <li>Powered by React and Material UI</li>
                          <li>Responsive Design</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MATERIALUI}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Material-UI
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href=" https://anshul-ameyo.github.io/covid-tracker/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/Anshul-ameyo/covid-tracker"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>

        {/* Project: CONTACT MANAGER */}
        <ImageEvent
          className="text-center"
          text="CONTACT MANAGER"
          src={CONTACTMANAGER}
          alt="CONTACT MANAGER"
        >
          <div className="d-flex justify-content-between flex-column mt-1">
            <div>
              <Accordion>
                <Card>
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="0"
                    className="p-2 text-center accordian-main"
                  >
                    PROJECT DETAILS
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="0" className="text-left">
                    <Card.Body>
                      <strong>Description:</strong> This is a Contact Manager
                      App created with React and Material UI that keeps a track
                      of contacts.
                      <hr />
                      <strong>Features:</strong>
                      <ul className="list-styles pt-1">
                        <li>Add contacts</li>
                        <li>Delete Contacts</li>
                        <li>Update Contacts</li>
                        <li>Search Contacts</li>
                      </ul>
                      <hr />
                      <strong>Tech used:</strong>
                      <ul>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_HTML5}
                              alt="HTML 5"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            HTML5
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_CSS3}
                              alt="CSS 3"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            CSS3
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_REACT}
                              alt="React"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            React
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image
                              src={L_SEMANTICUI}
                              alt="Material-UI"
                              rounded
                              className="image-style1 m-1"
                            ></Image>
                            Sematic-UI
                          </span>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
            <div className="d-flex justify-content-between flex-nowrap text-center">
              <UrlButton
                href=" https://anshul-ameyo.github.io/contact-manager/"
                target="_blank"
              >
                SEE LIVE
              </UrlButton>
              <UrlButton
                href="https://github.com/Anshul-ameyo/contact-manager"
                target="_blank"
              >
                SOURCE CODE
              </UrlButton>
            </div>
          </div>
        </ImageEvent>
      </Timeline>
    </div>
  );
};

export default Projects;
