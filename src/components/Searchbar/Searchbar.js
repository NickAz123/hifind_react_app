import React from "react";

import "./Searchbar.scss";

const Searchbar = ({ setSearchString }) => {
  return (
    <div className="app-search-bar">
      <input
        className="query"
        placeholder="Search..."
        onChange={(e) => {
          setSearchString(e.target.value);
        }}
      ></input>
      <div className="spacer"></div>
      <button className="btn genre-select">
        <span>Genre</span>
      </button>
      <button className="btn element-select">
        <span>Elements</span>
      </button>
    </div>
  );
};

export default Searchbar;
