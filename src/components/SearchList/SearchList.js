import React, { useState, useEffect } from "react";
import Searchbar from "./../Searchbar/Searchbar";
import TrackList from "./../Tracklist/Tracklist";
import "./SearchList.scss";

function SearchList({ genreFilter, elementFilter }) {
  const [searchString, setSearchString] = useState("");

  return (
    <div className="main">
      <Searchbar setSearchString={setSearchString} />
      <TrackList
        searchString={searchString}
        filters={{ genreFilter, elementFilter }}
      />
    </div>
  );
}

export default SearchList;
