import React, { useState } from "react";
import Searchbar from "../../components/Searchbar/Searchbar";
import TrackList from "../../components/Tracklist/Tracklist";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./Home.scss";

function Home() {
  const [searchString, setSearchString] = useState("");

  return (
    <div className="main-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main">
        <Searchbar setSearchString={setSearchString} />
        <TrackList searchString={searchString} />
      </div>
    </div>
  );
}

export default Home;
