import React from "react";
import MyCarousal from "./components/MyCarousal";
import MyNavbar from "./components/MyNavbar";
import TitleMessage from "./components/TitleMessage";
import About from "./pages/About";
import Fade from "react-reveal/Fade";
import { Parallax } from "react-parallax";
import { Container } from "react-bootstrap";
import "./App.css";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <MyCarousal />
      <TitleMessage />
      <MyNavbar />
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          strength={-200}
          bgImage={require("./assets/img/parallex/background_reverse.webp")}
          bgImageAlt=""
        >
          <div>
            <Container className="container-box rounded bg-dark">
              <Fade duration={500}>
                <hr />
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <Container>
        <hr />
        <Skills />
      </Container>
      <Container>
        <hr />
        <Experience></Experience>
      </Container>
      <Container className="container-box rounded">
        <hr />
        <Projects></Projects>
      </Container>
      <Container className="container-box rounded">
        <hr />
        <Contact></Contact>
      </Container>
      <Container className="container-box rounded">
        <hr />
        <Footer />
      </Container>
    </>
  );
};

export default App;
