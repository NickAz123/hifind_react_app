import { ref } from "firebase/storage";
import { storage } from "../firebase";

const getImageRef = (imagesrc) => {
  return ref(storage, `album-arts/${imagesrc}`);
};

export { getImageRef };
