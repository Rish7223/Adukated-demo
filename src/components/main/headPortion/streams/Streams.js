import React from "react";
import "./streams.css";

const Streams = () => {
  return (
    <div className="streams">
      <div className="streams__head">
        <h3 className="streams__heading">
          <span className="streams__heading--1">Streaming</span>
          <span className="streams__heading--2">Now</span>
        </h3>
        <div className="streams__options">
          <i className="fa fa-ellipsis-h"></i>
        </div>
      </div>
      <div className="streams__user">
        <div className="streams__user--1"></div>
        <div className="streams__user--2"></div>
        <div className="streams__user--3"></div>
        <div className="streams__user--4"></div>
        <div className="streams__user--5"></div>
        <div className="streams__user--6"></div>
        <div className="streams__user--7"></div>
        <div className="streams__user--8"></div>
        <div className="streams__user--9"></div>
      </div>
    </div>
  );
};

export default Streams;
