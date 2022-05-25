import React from "react";

import "./TrackListItem.scss";

const TrackListItem = (item) => {
  const track = item.track;
  return (
    <div className="track-list-item">
      <h3>{track.name}</h3>
    </div>
  );
};

export default TrackListItem;
