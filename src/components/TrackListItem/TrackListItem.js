import React from "react";

import "./TrackListItem.scss";

const TrackListItem = (item) => {
  const track = item.track;
  return (
    <div className="tracklist-item">
      {/* This image source will be refactored for production to talk to firebase */}
      <img src="/img/be_wwafawdwg.png" className="tracklist-img"></img>
      <h3>{track.name}</h3>
    </div>
  );
};

export default TrackListItem;
