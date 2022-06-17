import React, { useState, setState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./Home.scss";
import SearchList from "../../components/SearchList/SearchList";

function Home() {
  const [genreFilter, setGenreFilter] = useState([]);
  const [elementFilter, setElementFilter] = useState([]);

  const handleFilter = (value, filterName) => {
    let currentIndex;
    let spread;
    let setter;

    switch (filterName) {
      case "genre":
        currentIndex = genreFilter.indexOf(value);
        spread = [...genreFilter];
        setter = setGenreFilter;
        break;
      case "element":
        currentIndex = elementFilter.indexOf(value);
        spread = [...elementFilter];
        setter = setElementFilter;
        break;
      default:
        return;
    }

    if (currentIndex == -1) {
      spread.push(value);
    } else {
      spread.splice(currentIndex, 1);
    }

    setter(spread);
  };

  return (
    <div className="main-container">
      <Sidebar handleFilter={handleFilter} />
      <SearchList genreFilter={genreFilter} elementFilter={elementFilter} />
    </div>
  );
}

export default Home;
