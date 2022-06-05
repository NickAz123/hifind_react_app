import axios from "axios";
import $ from "jquery";
import React, { useEffect, useState } from "react";
import { rootUrl } from "../constants/ConnectionVariables";
import { storage } from "../firebase";
import { ref, uploadBytes } from "firebase/storage";
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
  const [genres, setGenres] = useState([]);
  const [elements, setElements] = useState([]);
  const [imageUpload, setImageUpload] = useState(null);

  useEffect(() => {
    getDropdowns();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getDropdowns = async () => {
    axios
      .get(rootUrl + "/genres")
      .then((res) => {
        setGenres(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(rootUrl + "/elements")
      .then((res) => {
        setElements(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateTrack = (e) => {
    setTrack({
      ...track,
      [e.target.name]: e.target.value,
    });
  };

  const updateGenres = () => {
    const arr = [];

    genres.forEach((genre) => {
      let target = `#genre-checkbox-${genre.id}`;
      if ($(target).prop("checked")) {
        arr.push(genre.id);
      }
    });

    setTrack({
      ...track,
      genres: arr,
    });
  };

  const updateElements = () => {
    const arr = [];

    elements.forEach((element) => {
      let target = `#element-checkbox-${element.id}`;
      if ($(target).prop("checked")) {
        arr.push(element.id);
      }
    });

    setTrack({
      ...track,
      elements: arr,
    });
  };

  const submitTrack = () => {
    let newTrack = {
      name: track.name,
      artist: track.artist,
      producers: track.producers,
      mixengineer: track.mixengineer,
      masterengineer: track.masterengineer,
      releasedate: track.releasedate,
      imagesrc: track.imagesrc,
      description: track.description,
    };

    axios
      .post(rootUrl + "/tracks", newTrack)
      .then((res) => {
        let newTrackId = res.data.id;

        track.elements.forEach((e) => {
          axios.post(rootUrl + "/track_elements", {
            track_id: newTrackId,
            element_id: e,
          });
        });

        return newTrackId;
      })
      .then((newTrackId) => {
        track.genres.forEach((g) => {
          axios.post(rootUrl + "/track_genres", {
            track_id: newTrackId,
            genre_id: g,
          });
        });
      })
      .then(() => {
        const imageRef = ref(storage, `album-arts/${track.imagesrc}`);
        uploadBytes(imageRef, imageUpload).then(() => {
          alert("Success!");
        });
      })
      .catch((err) => {
        console.log(err);
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
      <br></br>
      <br></br>
      <label>Description</label>
      <textarea
        style={{ height: "200px", width: "400px" }}
        type="text"
        value={track.description}
        onChange={updateTrack}
        name="description"
      ></textarea>
      <br></br>
      <label>Genre</label>
      <div>
        {genres.map((genre) => {
          return (
            <div key={genre.id}>
              <input
                type="checkbox"
                id={`genre-checkbox-${genre.id}`}
                value={genre.id}
                name="genre"
                key={genre.id}
                onChange={() => updateGenres()}
              />
              {genre.name}
              <br></br>
            </div>
          );
        })}
      </div>
      <br></br>
      <div>
        {elements.map((element) => {
          return (
            <div key={element.id}>
              <input
                type="checkbox"
                id={`element-checkbox-${element.id}`}
                value={element.id}
                name="element"
                key={element.id}
                onChange={() => updateElements()}
              />
              {element.name}
              <br></br>
            </div>
          );
        })}
      </div>
      <br></br>
      <label>Image</label>
      <input
        type="file"
        onChange={(e) => {
          setImageUpload(e.target.files[0]);
        }}
      />
      <div>{JSON.stringify(track)}</div>
      <button type="button" onClick={submitTrack}>
        Create
      </button>
    </div>
  );
}

export default Create;
