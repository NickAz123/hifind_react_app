import React, { useState } from "react";
import "./Create.scss";

function Create() {
  const [track, setTrack] = useState({
    name: "",
    artist: "",
    producers: "",
    mixengineer: "",
    masterengineer: "",
    releasedate: "",
    imagesrc: "",
    description: "",
    genres: [],
    elements: [],
  });

  const updateTrack = (e) => {
    setTrack({
      ...track,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="create-page">
      <p>This is the post page</p>
      <label>Track Name</label>
      <input
        type="text"
        value={track.name}
        onChange={updateTrack}
        name="name"
      ></input>
      <br></br>
      <label>Artist</label>
      <input
        type="text"
        value={track.artist}
        onChange={updateTrack}
        name="artist"
      ></input>
      <br></br>
      <label>Producers</label>
      <input
        type="text"
        value={track.producers}
        onChange={updateTrack}
        name="producers"
      ></input>
      <br></br>
      <label>Mix Engineer</label>
      <input
        type="text"
        value={track.mixengineer}
        onChange={updateTrack}
        name="mixengineer"
      ></input>
      <br></br>
      <label>Master Engineer</label>
      <input
        type="text"
        value={track.masterengineer}
        onChange={updateTrack}
        name="masterengineer"
      ></input>
      <br></br>
      <label>Release</label>
      <input
        type="date"
        value={track.releasedate}
        onChange={updateTrack}
        name="releasedate"
      ></input>
      <br></br>
      <label>Image Src</label>
      <input
        type="text"
        value={track.imagesrc}
        onChange={updateTrack}
        name="imagesrc"
      ></input>
      <div>{JSON.stringify(track)}</div>
    </div>
  );
}

export default Create;
