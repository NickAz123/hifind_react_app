import { ref } from "firebase/storage";
import { storage } from "../firebase";

//gets the image reference from firebase
const getImageRef = (imagesrc) => {
  return ref(storage, `album-arts/${imagesrc}`);
};

//filters data array of tracks by a string query
const filterDataByQuery = (data, query) => {
  let searchStringLower = query.toLowerCase();

  const filteredData = data.filter((val) => {
    if (query === "") {
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
    return null;
  });

  return filteredData;
};

//filters a data array of tracks by an array of a particular option
const filterDataByFilters = (filterAr, dataAr, option) => {
  const filteredData = dataAr.filter((val) => {
    let resultsAr = val[option].filter((g) => {
      return filterAr.indexOf(g.id) !== -1;
    });

    if (resultsAr.length !== 0) {
      return val;
    }

    return null;
  });

  return filteredData;
};

export { getImageRef, filterDataByFilters, filterDataByQuery };
