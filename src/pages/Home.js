import React, { useState } from "react";
import Searchbar from "../components/Searchbar/Searchbar";
import Tracklist from "../components/Tracklist/Tracklist";

function Home() {
  const [searchString, setSearchString] = useState("");

  return (
    <>
      <Searchbar setSearchString={setSearchString} />
      <Tracklist searchString={searchString} />
    </>
  );
}

export default Home;
