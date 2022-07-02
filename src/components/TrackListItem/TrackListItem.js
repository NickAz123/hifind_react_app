import React, { useEffect, useState } from "react";
import Pill from "../PIll/Pill";
import { getDownloadURL } from "firebase/storage";
import { getImageRef } from "../../constants/HelperFunctions";
import CircularProgress from "@mui/material/CircularProgress";

import "./TrackListItem.scss";

const TrackListItem = ({ track, getDetails }) => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const imageRef = getImageRef(track.imagesrc);

  useEffect(() => {
    getDownloadURL(imageRef)
      .then((url) => {
        setImage(url);
      })
      .then(() => {
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const shortenString = (string, cutoffIndex) => {
    let shortString = string;
    if (string.length > cutoffIndex) {
      shortString = string.slice(0, findStringCutoffIndex(string, cutoffIndex));
      shortString += "...";
    }
    return shortString;
  };

  const findStringCutoffIndex = (string, cutoff) => {
    let valid = false;
    let cutoffIndex = cutoff;

    while (valid != true) {
      if (string.charAt(0) !== string.charAt(cutoffIndex)) {
        valid = true;
      } else {
        cutoffIndex = cutoffIndex - 1;
      }
      return cutoffIndex - 3;
    }
  };

  //get details fetch onClick={() => getDetails(track.id)}
  return (
    <div className="tracklist-item">
      <div className="img-col">
        {loading ? (
          <CircularProgress className="item-img" />
        ) : (
          <img src={image} className="item-img" alt=""></img>
        )}
      </div>

      <div className="info-col">
        <div className="track-title-container">
          <span className="title">{shortenString(track.name, 20)} </span>{" "}
          <span className="artist">by {track.artist}</span>
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
