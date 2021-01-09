import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <div className="logo__icon">
          <i className="fa fa-buysellads" aria-hidden="true"></i>
        </div>
        <div className="logo__text">
          <span className="logo__text--1">Edu</span>
          <span className="logo__text--2">kated</span>
        </div>
      </div>
      <div className="sidebar-center">
        <div className="navigation">
          <ul className="nav-list">
            <li className="active">
              <span className="nav-list__icon">
                <i className="fa fa-home"></i>
              </span>
              Home
            </li>
            <li>
              <span className="nav-list__icon">
                <i className="fa fa-search"></i>
              </span>
              Discover
            </li>
            <li>
              <span className="nav-list__icon">
                <i className="fa fa-commenting-o"></i>
              </span>
              Messages
            </li>
            <li>
              <span className="nav-list__icon">
                <i className="fa fa-cog"></i>
              </span>
              Setting
            </li>
          </ul>
        </div>
        <div className="alert-box">
          <div className="alert-box__icon">
            <i className="fa fa-lightbulb-o"></i>
          </div>
          <div className="alert-box__text">
            <div className="alert-box__heading">Updated Course</div>
            <p className="alert-box__info">by &#64; rishabh</p>
          </div>
        </div>
      </div>
      <div className="user">
        <div className="user__performance">
          <div className="user__points">
            <div className="user__points--icon">
              <i className="fa fa-trophy"></i>
            </div>
            <div className="user__points--text">
              <span className="point">1180</span>
              <span className="text">Points</span>
            </div>
          </div>
          <div className="user__points">
            <div className="user__points--icon">
              <i className="fa fa-tasks"></i>
            </div>
            <div className="user__points--text">
              <span className="point">43.5%</span>
              <span className="text">Completed</span>
            </div>
          </div>
        </div>
        <div className="user__info">
          <div className="user__info__data">
            <div className="user__info__icon"></div>
            <div className="user__info__text">
              <div className="user__info__heading">Rishabh Tyagi</div>
              <p className="user__info__info">&#64; rishabh</p>
            </div>
          </div>
          <div className="user__info__options">
            <i className="fa fa-ellipsis-v"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
