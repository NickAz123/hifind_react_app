// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9jcySFdHce1Y8RTaHBDyMwkbOR1vfED0",
  authDomain: "hifind-image-server.firebaseapp.com",
  projectId: "hifind-image-server",
  storageBucket: "hifind-image-server.appspot.com",
  messagingSenderId: "1019870759669",
  appId: "1:1019870759669:web:395691376dac034c0293bc",
  measurementId: "G-6D6GHRZX6R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const storage = getStorage(app);
