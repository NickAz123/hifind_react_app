import React, { useState, useEffect } from "react";
import { rootUrl } from "../../constants/ConnectionVariables";
import axios from "axios";
import FilterOption from "../FilterOption/FilterOption";

import "./Sidebar.scss";

function Sidebar() {
  const [genres, setGenres] = useState([]);
  const [elements, setElements] = useState([]);

  const loadGenres = async () => {
    axios
      .get(rootUrl + "/genres")
      .then((res) => {
        setGenres(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loadElements = async () => {
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
        {genres.map((genre) => (
          <FilterOption
            key={genre.id}
            id={genre.id}
            name={genre.name}
            color={genre.color}
          />
        ))}
      </div>
      <div className="sidebar-filter-title">ELEMENTS</div>
      <div className="filter-options element-options">
        {elements.map((element) => (
          <FilterOption
            key={element.id}
            id={element.id}
            name={element.name}
            color={element.color}
          />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
