import React, { useEffect, useState } from "react";
import Pill from "../PIll/Pill";
import { storage } from "../../firebase";
import { ref, getDownloadURL } from "firebase/storage";

import "./TrackListItem.scss";

const TrackListItem = ({ track, getDetails }) => {
  const [image, setImage] = useState(null);
  const imageRef = ref(storage, `album-arts/${track.imagesrc}`);

  useEffect(() => {
    getDownloadURL(imageRef).then((url) => {
      setImage(url);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="tracklist-item" onClick={() => getDetails(track.id)}>
      <div className="img-col">
        <img src={image} className="item-img" alt=""></img>
      </div>

      <div className="info-col">
        <div className="track-title-container">
          <span className="title">{track.name} </span>{" "}
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
    </div>
  );
};

export default TrackListItem;
