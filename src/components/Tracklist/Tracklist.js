import React, { useState, useEffect } from "react";
import axios from "axios";

import TrackListItem from "../TrackListItem/TrackListItem";
import { apiVersion } from "../../constants/ConnectionVariables.js";

import "./Tracklist.scss";

const TrackList = () => {
  //Temporary state. Need to pass state properly later.
  let [tracks, setTracks] = useState([]);

  useEffect(() => {
    getTracks();
  }, []);

  const getTracks = async () => {
    const rootUrl = process.env.REACT_APP_LOCAL_SERVER;

    axios
      .get(rootUrl + "/api/" + apiVersion + "/tracks")
      .then((res) => {
        setTracks(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="tracklist-container">
      {tracks.map((item) => (
        <TrackListItem key={item.id} track={item} />
      ))}
    </div>
  );
};

export default TrackList;
