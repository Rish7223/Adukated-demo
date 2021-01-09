import React from "react";
import "./tutors.css";

const Tutors = () => {
  return (
    <div className="tutors">
      <div className="tutors__head">
        <h3 className="tutors__heading">
          <span className="tutors__heading--1">Top</span>
          <span className="tutors__heading--2">Tutors</span>
        </h3>
        <div className="tutors__options">
          <i className="fa fa-ellipsis-h"></i>
        </div>
      </div>

      <div className="tutors__data">
        <div className="tutors__data--single tutors__data--1">
          <div className="tutors__data--single__data">
            <div className="tutors__data--single__icon tutors__data--1--icon"></div>
            <div className="tutors__data--single__text">
              <div className="tutors__data--single__heading">Rishabh Tyagi</div>
              <p className="tutors__data--single__info">&#64; rishabh</p>
            </div>
          </div>
          <div className="tutors__data--single__options">
            <i className="fa fa-plus"></i>
          </div>
        </div>
        <div className="tutors__data--single tutors__data--2">
          <div className="tutors__data--single__data">
            <div className="tutors__data--single__icon tutors__data--2--icon"></div>
            <div className="tutors__data--single__text">
              <div className="tutors__data--single__heading">
                Rithik Prakash
              </div>
              <p className="tutors__data--single__info">&#64; rithik55</p>
            </div>
          </div>
          <div className="tutors__data--single__options">
            <i className="fa fa-plus"></i>
          </div>
        </div>
        <div className="tutors__data--single tutors__data--3">
          <div className="tutors__data--single__data">
            <div className="tutors__data--single__icon tutors__data--3--icon"></div>
            <div className="tutors__data--single__text">
              <div className="tutors__data--single__heading">Nandinee Jain</div>
              <p className="tutors__data--single__info">&#64; jainNan</p>
            </div>
          </div>
          <div className="tutors__data--single__options">
            <i className="fa fa-plus"></i>
          </div>
        </div>
        <div className="tutors__data--single tutors__data--4">
          <div className="tutors__data--single__data">
            <div className="tutors__data--single__icon tutors__data--4--icon"></div>
            <div className="tutors__data--single__text">
              <div className="tutors__data--single__heading">Amit Kumar</div>
              <p className="tutors__data--single__info">&#64; kumarAmit</p>
            </div>
          </div>
          <div className="tutors__data--single__options">
            <i className="fa fa-plus"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutors;
