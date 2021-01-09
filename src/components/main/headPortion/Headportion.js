import React from "react";
import "./head.css";
import Streams from "./streams/Streams";
import Search from "./search/Search";

const Headportion = () => {
  return (
    <div class="main__one">
      <Streams />
      <Search />
    </div>
  );
};

export default Headportion;
