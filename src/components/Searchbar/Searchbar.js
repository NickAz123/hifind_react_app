import axios from "axios";
import React, { useEffect, useState } from "react";
import { rootUrl } from "../../constants/ConnectionVariables";
import MultiselectDropdown from "../MultiselectDropdown/MultiselectDropdown";

import "./Searchbar.scss";

const Searchbar = ({ setSearchString }) => {
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
    <div className="app-search-bar">
      <input
        className="query"
        placeholder="Search..."
        onChange={(e) => {
          setSearchString(e.target.value);
        }}
      ></input>
      {/* <div className="spacer"></div> */}
      <MultiselectDropdown items={genres} label={"Genres"} />
      <MultiselectDropdown items={elements} label={"Elements"} />
    </div>
  );
};

export default Searchbar;
