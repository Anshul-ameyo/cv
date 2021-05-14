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
import Experience from "./pages/Experienxe";

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
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <Container>
        <Skills />
      </Container>
      <Container>
        <Experience></Experience>
      </Container>
    </>
  );
};

export default App;
