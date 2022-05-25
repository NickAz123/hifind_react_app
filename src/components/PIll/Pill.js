import React from "react";

import "./Pill.scss";

function Pill({ element }) {
  return <div className="pill">{element.name}</div>;
}

export default Pill;
