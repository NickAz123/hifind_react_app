import React, { useState, useEffect } from "react";
import { rootUrl } from "../../constants/ConnectionVariables";
import axios from "axios";
import FilterOption from "../FilterOption/FilterOption";

import "./Sidebar.scss";

function Sidebar({ handleFilter }) {
  const [genres, setGenres] = useState([]);
  const [genresOpen, setGenresOpen] = useState(false);
  const [elements, setElements] = useState([]);
  const [elementsOpen, setElementsOpen] = useState(false);

  const loadGenres = async () => {
    axios
      .get(rootUrl + "/genres")
      .then((res) => {
        var dataSorted = res.data.sort(sortResultsAlphabetically);
        setGenres(dataSorted);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loadElements = async () => {
    axios
      .get(rootUrl + "/elements")
      .then((res) => {
        var dataSorted = res.data.sort(sortResultsAlphabetically);
        setElements(dataSorted);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const sortResultsAlphabetically = (x, y) => {
    if (x.name < y.name) {
      return -1;
    }
    if (x.name > y.name) {
      return 1;
    }
    return 0;
  };

  useEffect(() => {
    loadGenres();
    loadElements();
  }, []);

  return (
    <div className="sidebar-container">
      <div className="sidebar-title">Filters</div>
      <div className="sidebar-filters-container">
        <button
          className="sidebar-filter-title"
          onClick={() => setGenresOpen(!genresOpen)}
        >
          Genres
        </button>
        {genresOpen && (
          <div className="filter-options genre-options">
            {genres.map((genre) => (
              <FilterOption
                key={genre.id}
                id={genre.id}
                name={genre.name}
                color={genre.color}
                handleFilter={handleFilter}
                category="genre"
              />
            ))}
          </div>
        )}

        <button
          className="sidebar-filter-title"
          onClick={() => setElementsOpen(!elementsOpen)}
        >
          Elements
        </button>
        {elementsOpen && (
          <div className="filter-options element-options">
            {elements.map((element) => (
              <FilterOption
                key={element.id}
                id={element.id}
                name={element.name}
                color={element.color}
                handleFilter={handleFilter}
                category="element"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
