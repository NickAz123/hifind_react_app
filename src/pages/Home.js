import React from "react";
import Searchbar from "../components/Searchbar/Searchbar";
import Tracklist from "../components/Tracklist/Tracklist";

function Home() {
  return (
    <div>
      <Searchbar />
      <Tracklist />
    </div>
  );
}

export default Home;
