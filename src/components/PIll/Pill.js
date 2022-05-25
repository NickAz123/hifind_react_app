import React from "react";

import "./Pill.scss";

function Pill({ item }) {
  return (
    <div className="pill" style={{ backgroundColor: item.color }}>
      {item.name.toUpperCase()}
    </div>
  );
}

export default Pill;
