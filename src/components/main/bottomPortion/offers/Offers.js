import React from "react";
import "./offers.css";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers__head">
        <h3 className="offers__heading">
          <span className="offers__heading--1">Spacial</span>
          <span className="offers__heading--2">Offers</span>
        </h3>
        <div className="offers__options">
          <i className="fa fa-ellipsis-h"></i>
        </div>
      </div>
      <div className="offers__banner">
        <div className="offers__banner__text">
          <h3 className="offers__banner__heading">50 Days of Premium</h3>
          <p className="offers__banner__heading-2">Get it before 01.03.2021</p>
        </div>
        <button className="offers__banner__btn">Learn More</button>
      </div>
    </div>
  );
};

export default Offers;
