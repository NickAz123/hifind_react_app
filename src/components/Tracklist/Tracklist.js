import React, { useState, useEffect } from "react";
import axios from "axios";

import TrackListItem from "./../TrackListItem/TrackListItem";
import TrackDetails from "../TrackDetails/TrackDetails";
import { rootUrl } from "../../constants/ConnectionVariables.js";

import "./Tracklist.scss";
import { validateCallback } from "@firebase/util";

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

  const filterDataBySearch = (data, searchString, filters) => {
    let searchStringLower = searchString.toLowerCase();

    let filteredData = data.filter((val) => {
      if (searchString === "") {
        return val;
      } else if (
        val.name.toLowerCase().includes(searchStringLower) ||
        val.artist.toLowerCase().includes(searchStringLower) ||
        val.producers.toLowerCase().includes(searchStringLower) ||
        val.mixengineer.toLowerCase().includes(searchStringLower) ||
        val.masterengineer.toLowerCase().includes(searchStringLower)
      ) {
        return val;
      }
    });

    if (filters.genreFilter.length > 0) {
      filteredData = filteredData.filter((val) => {
        let check = val.genres.filter((g) => {
          return filters.genreFilter.indexOf(g.id) !== -1;
        });

        if (check.length != 0) {
          return val;
        }
      });
    }

    if (filters.elementFilter.length > 0) {
    }

    return filteredData;
  };

  const getTracks = async () => {
    axios
      .get(rootUrl + "/tracks")
      .then((res) => {
        let filteredData = filterDataBySearch(res.data, searchString, filters);
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
