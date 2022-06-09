import React, { useState, useEffect } from "react";
import Searchbar from "./Searchbar/Searchbar";
import TrackList from "./Tracklist/Tracklist";
import "./SearchList.scss";

function SearchList() {
  const [searchString, setSearchString] = useState("");

  return (
    <div className="main">
      <Searchbar setSearchString={setSearchString} />
      <TrackList searchString={searchString} />
    </div>
  );
}

export default SearchList;
