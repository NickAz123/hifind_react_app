import React, { useState, useEffect } from "react";
import axios from "axios";

import TrackListItem from "./../TrackListItem/TrackListItem";
import TrackDetails from "../TrackDetails/TrackDetails";
import { rootUrl } from "../../constants/ConnectionVariables.js";
import {
  filterDataByQuery,
  filterDataByFilters,
} from "../../constants/HelperFunctions";

import "./Tracklist.scss";

const TrackList = ({ searchString, filters }) => {
  //Temporary state. Need to pass state properly for live refresh later.
  let [tracks, setTracks] = useState([]);
  let [detailsOpen, setDetailsOpen] = useState(false);
  let [selectedTrack, setSelectedTrack] = useState(null);

  useEffect(() => {
    getTracks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchString, filters]);

  useEffect(() => {
    if (selectedTrack != null) {
      setDetailsOpen(true);
    }
  }, [selectedTrack]);

  const filterData = (data, searchString, filters) => {
    let filteredData = data;

    filteredData = filterDataByQuery(data, searchString);

    if (filters.genreFilter.length > 0) {
      filteredData = filterDataByFilters(
        filters.genreFilter,
        filteredData,
        "genres"
      );
    }

    if (filters.elementFilter.length > 0) {
      filteredData = filterDataByFilters(
        filters.elementFilter,
        filteredData,
        "elements"
      );
    }

    return filteredData;
  };

  const getTracks = async () => {
    axios
      .get(rootUrl + "/tracks")
      .then((res) => {
        let filteredData = filterData(res.data, searchString, filters);
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
