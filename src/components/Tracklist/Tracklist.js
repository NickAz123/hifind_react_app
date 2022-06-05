import React, { useState, useEffect } from "react";
import axios from "axios";

import TrackListItem from "../TrackListItem/TrackListItem";
import TrackDetails from "../TrackDetails/TrackDetails";
import { apiVersion } from "../../constants/ConnectionVariables.js";

import "./Tracklist.scss";

const TrackList = ({ searchString }) => {
  //Temporary state. Need to pass state properly for live refresh later.
  let [tracks, setTracks] = useState([]);
  let [detailsOpen, setDetailsOpen] = useState(false);
  let [selectedTrack, setSelectedTrack] = useState(null);

  const rootUrl = process.env.REACT_APP_LOCAL_SERVER + "/api/" + apiVersion;

  useEffect(() => {
    getTracks();
  }, [searchString]);

  useEffect(() => {
    if (selectedTrack != null) {
      setDetailsOpen(true);
    }
  }, [selectedTrack]);

  const filterDataBySearch = (data, searchString) => {
    let filteredData = data.filter((val) => {
      if (searchString === "") {
        return val;
      } else if (val.name.toLowerCase().includes(searchString.toLowerCase())) {
        return val;
      }
    });

    return filteredData;
  };

  const getTracks = async () => {
    axios
      .get(rootUrl + "/tracks")
      .then((res) => {
        let filteredData = filterDataBySearch(res.data, searchString);
        setTracks(filteredData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getDetails = async (id) => {
    axios
      .get(rootUrl + `/tracks/${id}`)
      .then((res) => {
        setSelectedTrack(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
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
