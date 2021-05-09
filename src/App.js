import React from "react";
import MyCarousal from "./components/MyCarousal";
import MyNavbar from "./components/MyNavbar";
import TitleMessage from "./components/TitleMessage";

const App = () => {
  return (
    <>
      <div>
        <MyNavbar />
        <MyCarousal />
        <TitleMessage />
      </div>
    </>
  );
};

export default App;
