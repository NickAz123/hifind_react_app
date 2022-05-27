import React from "react";
import Pill from "../PIll/Pill";

import "./TrackDetails.scss";

function TrackDetails({ track }) {
  const imgsrc = `/img/${track.imagesrc}.png`;
  console.log(track.description);

  return (
    <div className="track-details-container">
      <div className="track-details-header">
        <div className="img-col">
          <img src={imgsrc} className="item-img" alt=""></img>
        </div>

        <div className="info-col">
          <div className="track-title-container">
            <div className="title">{track.name}</div>
            <div className="artist">by {track.artist}</div>
          </div>
          <div className="track-credits">
            <div>Mixed by {track.mixengineer}</div>
            <div>Mastered by {track.masterengineer}</div>
            <div>Produced by {track.producers}</div>
          </div>
        </div>
      </div>

      <div className="pills-col">
        <div className="genre-pills-container">
          <span className="pills-title">Genre:</span>
          <span className="pills-container">
            {track.genres.map((genre) => (
              <Pill key={genre.id} item={genre} />
            ))}
          </span>
        </div>
        <div className="elements-pills-container">
          <span className="pills-title">Elements:</span>
          <span className="pills-container">
            {track.elements.map((element) => (
              <Pill key={element.id} item={element} />
            ))}
          </span>
        </div>
      </div>

      <div className="track-details-description">{track.description}</div>
    </div>
  );
}

export default TrackDetails;
