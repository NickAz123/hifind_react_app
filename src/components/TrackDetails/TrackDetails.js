import { getDownloadURL } from "firebase/storage";
import React, { useState, useEffect } from "react";
import { getImageRef } from "../../constants/HelperFunctions";
import Pill from "../PIll/Pill";

import "./TrackDetails.scss";

function TrackDetails({ track }) {
  const [image, setImage] = useState(null);
  const imageRef = getImageRef(track.imagesrc);

  useEffect(() => {
    getDownloadURL(imageRef).then((url) => {
      setImage(url);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [track]);

  return (
    <div className="track-details-container">
      <div className="track-details-header">
        <div className="img-col">
          <img src={image} className="item-img" alt=""></img>
        </div>
      </div>
      <div className="info-col">
        <div className="track-title-container">
          <div className="title">{track.name}</div>
          <div className="artist">by {track.artist}</div>
        </div>
        <div className="track-credits">
          <div className="track-credits-subtitle">Mixed by: </div>
          <div className="track-credits">{track.mixengineer}</div>
          <div className="track-credits-subtitle">Mastered by</div>
          <div className="track-credits">{track.masterengineer}</div>
          <div className="track-credits-subtitle">Produced by</div>
          <div className="track-credits">{track.producers}</div>
        </div>
      </div>

      <div className="pills-col">
        <div className="genre-pills-container">
          <div className="pills-title">Genre:</div>
          <div className="pills-container">
            {track.genres.map((genre) => (
              <Pill key={genre.id} item={genre} />
            ))}
          </div>
        </div>
        <div className="elements-pills-container">
          <div className="pills-title">Elements:</div>
          <div className="pills-container">
            {track.elements.map((element) => (
              <Pill key={element.id} item={element} />
            ))}
          </div>
        </div>
      </div>

      <div className="track-details-description">{track.description}</div>
    </div>
  );
}

export default TrackDetails;
