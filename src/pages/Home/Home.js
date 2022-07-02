import React, { useState, setState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./Home.scss";
import SearchList from "../../components/SearchList/SearchList";
import MenusBar from "../../components/MenusBar/MenusBar";

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
      <MenusBar></MenusBar>
      <Sidebar handleFilter={handleFilter} />
      <SearchList
        genreFilter={genreFilter}
        elementFilter={elementFilter}
        title="Search Reference Tracks"
      />
    </div>
  );
}

export default Home;
