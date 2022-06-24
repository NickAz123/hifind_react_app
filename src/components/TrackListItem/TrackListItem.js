import React, { useEffect, useState } from "react";
import Pill from "../PIll/Pill";
import { getDownloadURL } from "firebase/storage";
import { getImageRef } from "../../constants/HelperFunctions";

import "./TrackListItem.scss";

const TrackListItem = ({ track, getDetails }) => {
  const [image, setImage] = useState(null);
  const imageRef = getImageRef(track.imagesrc);

  useEffect(() => {
    getDownloadURL(imageRef).then((url) => {
      setImage(url);
    });

    console.log(imageRef);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //get details fetch onClick={() => getDetails(track.id)}
  return (
    <div className="tracklist-item">
      <div className="img-col">
        <img src={image} className="item-img" alt=""></img>
      </div>

      <div className="info-col">
        <div className="track-title-container">
          <div className="title">{track.name} </div>{" "}
          <div className="artist">by {track.artist}</div>
        </div>
      </div>
      <div className="info-col info-col-2">
        <div className="track-credits">
          <div>
            Mixed by{" "}
            {track.mixengineer == "" ? "(Not Available)" : track.mixengineer}
          </div>
          <div>
            Mastered by{" "}
            {track.masterengineer == ""
              ? "(Not Available)"
              : track.masterengineer}
          </div>
          <div>
            Produced by{" "}
            {track.producers == "" ? "(Not Available)" : track.producers}
          </div>
        </div>
      </div>

      <div className="pills-col">
        <div className="genre-pills-container">
          <span className="pills-container">
            {track.genres.map((genre) => (
              <Pill key={genre.id} item={genre} />
            ))}
          </span>
        </div>
        <div className="elements-pills-container">
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
