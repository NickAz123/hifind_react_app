import React from "react";
import Pill from "../PIll/Pill";

import "./TrackListItem.scss";

const TrackListItem = ({ track }) => {
  return (
    <div className="tracklist-item">
      <div className="img-col">
        {/* This image source will be refactored for production to talk to firebase */}
        <img src="/img/be_wwafawdwg.png" className="item-img"></img>
      </div>

      <div className="info-col">
        <div className="track-title-container">
          <span className="title">{track.name} | </span>{" "}
          <span className="artist">by {track.artist}</span>
        </div>
        <div className="track-credits">
          <div>Mixed by {track.mixengineer}</div>
          <div>Mastered by {track.masterengineer}</div>
          <div>Produced by {track.producers}</div>
        </div>
      </div>

      <div className="pills-col">
        <div className="genre-pills-container">
          <span className="pills-title">Genre:</span>
          <span className="pills-container">
            {track.genres.map((genre) => (
              <Pill key={genre.id} element={genre} />
            ))}
          </span>
        </div>
        <div className="elements-pills-container">
          <span className="pills-title">Elements:</span>
          <span className="pills-container">
            {track.elements.map((element) => (
              <Pill key={element.id} element={element} />
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TrackListItem;
