import React, { useState, useEffect } from "react";
import axios from "axios";

import TrackListItem from "../TrackListItem/TrackListItem";
import TrackDetails from "../TrackDetails/TrackDetails";
import { apiVersion } from "../../constants/ConnectionVariables.js";

import "./Tracklist.scss";

const TrackList = () => {
  //Temporary state. Need to pass state properly for live refresh later.
  let [tracks, setTracks] = useState([]);
  let [detailsOpen, setDetailsOpen] = useState(false);
  let [selectedTrack, setSelectedTrack] = useState(null);

  useEffect(() => {
    getTracks();
  }, []);

  useEffect(() => {
    if (selectedTrack != null) {
      setDetailsOpen(true);
    }
  }, [selectedTrack]);

  const getTracks = async () => {
    const rootUrl = process.env.REACT_APP_LOCAL_SERVER;

    axios
      .get(rootUrl + "/api/" + apiVersion + "/tracks")
      .then((res) => {
        setTracks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getDetails = (id) => {
    console.log(id);
    setSelectedTrack({ name: `example ${id}` });
  };

  return (
    <div className="tracklist-container">
      <div className="tracklist-list">
        {tracks.map((track) => (
          <TrackListItem key={track.id} track={track} getDetails={getDetails} />
        ))}
      </div>
      {detailsOpen ? (
        <div className="tracklist-details">
          <TrackDetails track={selectedTrack} />
        </div>
      ) : null}
    </div>
  );
};

export default TrackList;
