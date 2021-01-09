import React from "react";
import "./bottom.css";
import Tutors from "./tutors/Tutors";
import Offers from "./offers/Offers";

const Bottom = () => {
  return (
    <div class="main__three">
      <Tutors />
      <Offers />
    </div>
  );
};

export default Bottom;
