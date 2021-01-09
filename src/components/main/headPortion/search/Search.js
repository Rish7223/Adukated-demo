import React from "react";
import "./search.css";

const Search = () => {
  return (
    <div className="search">
      <div className="search__head">
        <h3 className="search__heading">
          <span className="search__heading--1">Advance</span>
          <span className="search__heading--2">Search</span>
        </h3>
        <div className="search__options">
          <i className="fa fa-ellipsis-h"></i>
        </div>
      </div>
      <div className="search-box">
        <form action="#" className="search-box__form">
          <input type="text" placeholder="Start writing something" />
          <button className="search-box__form__btn">Find</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
