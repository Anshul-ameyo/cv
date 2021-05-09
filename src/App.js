import React from "react";
import MyCarousal from "./components/MyCarousal";
import MyNavbar from "./components/MyNavbar";
import TitleMessage from "./components/TitleMessage";
import About from "./pages/About";
import Fade from "react-reveal/Fade";
import { Parallax } from "react-parallax";
import { Container } from "react-bootstrap";
import "./App.css";

const App = () => {
  return (
    <>
      <MyCarousal />
      <TitleMessage />
      <MyNavbar />
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background_reverse.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
    </>
  );
};

export default App;
