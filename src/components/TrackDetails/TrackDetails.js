import React from "react";

import "./TrackDetails.scss";

function TrackDetails({ track }) {
  console.log("re rendered");
  return <div className="track-details-container">{track.name}</div>;
}

export default TrackDetails;
