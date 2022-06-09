import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./Home.scss";
import SearchList from "../../components/SearchList/SearchList";

function Home() {
  return (
    <div className="main-container">
      <Sidebar />
      <SearchList />
    </div>
  );
}

export default Home;
