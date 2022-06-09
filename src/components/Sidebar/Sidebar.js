import React, { useState, useEffect } from "react";
import { rootUrl } from "../../constants/ConnectionVariables";
import axios from "axios";
import FilterOption from "../FilterOption/FilterOption";

import "./Sidebar.scss";

function Sidebar() {
  const [genres, setGenres] = useState([]);
  const [elements, setElements] = useState([]);

  const loadGenres = () => {
    axios
      .get(rootUrl + "/genres")
      .then((res) => {
        setGenres(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loadElements = () => {
    axios
      .get(rootUrl + "/elements")
      .then((res) => {
        setElements(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadGenres();
    loadElements();
  }, []);

  return (
    <div className="sidebar-container">
      <div className="sidebar-filter-title">GENRES</div>
      <div className="filter-options genre-options">
        <FilterOption />
      </div>
    </div>
  );
}

export default Sidebar;
