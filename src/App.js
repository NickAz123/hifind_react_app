import "./App.css";
import Searchbar from "./components/Searchbar/Searchbar";
import Tracklist from "./components/Tracklist/Tracklist";

function App() {
  return (
    <div className="application-container">
      <Searchbar />
      <Tracklist />
    </div>
  );
}

export default App;
