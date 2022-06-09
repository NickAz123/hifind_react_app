import React, { useEffect, useState } from "react";

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
    </div>
  );
};

export default Searchbar;
