import React from "react";
import "./main.css";
import Headportion from "./headPortion/Headportion";
import Centerportion from "./centerPortion/Centerportion";
import Bottom from "./bottomPortion/Bottom";

const Main = () => {
  return (
    <div class="main">
      <Headportion />
      <Centerportion />
      <Bottom />
    </div>
  );
};

export default Main;
