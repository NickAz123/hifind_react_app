import Create from "./pages/Create/Create";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="application-container">
      <Switch>
        <Route path="/create" exact component={Create} />
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </div>
  );
}

export default App;
