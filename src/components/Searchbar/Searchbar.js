import React from "react";

import "./Searchbar.scss";

const Searchbar = () => {
  return (
    <div className="app-search-bar">
      <input className="query"></input>
      <select className="genre-select">
        <option value={0}>Option 1</option>
        <option value={1}>Option 2</option>
      </select>
      <select className="element-select">
        <option value={0}>Option 1</option>
        <option value={1}>Option 2</option>
      </select>
    </div>
  );
};

export default Searchbar;
