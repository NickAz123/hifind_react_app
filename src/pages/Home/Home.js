import React, { useState, setState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./Home.scss";
import SearchList from "../../components/SearchList/SearchList";

function Home() {
  const [genreFilter, setGenreFilter] = useState([]);
  const [elementFilter, setElementFilter] = useState([]);

  return (
    <div className="main-container">
      <Sidebar
        setGenreFilter={setGenreFilter}
        setElementFilter={setElementFilter}
      />
      <SearchList />
    </div>
  );
}

export default Home;
