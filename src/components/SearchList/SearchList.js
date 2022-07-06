import React, { useState, useEffect } from "react";
import Searchbar from "./../Searchbar/Searchbar";
import TrackList from "./../Tracklist/Tracklist";
import "./SearchList.scss";

function SearchList({ genreFilter, elementFilter, title }) {
  const [searchString, setSearchString] = useState("");

  return (
    <div className="searchlist-container">
      <div className="main-title">{title}</div>
      <Searchbar setSearchString={setSearchString} />
      <TrackList
        searchString={searchString}
        filters={{ genreFilter, elementFilter }}
      />
    </div>
  );
}

export default SearchList;
