import Create from "./pages/Create/Create";
import Home from "./pages/Home/Home";
import { Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="application-container">
      <Switch>
        <Route path="/create" exact component={Create} />
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
