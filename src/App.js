import Create from "./pages/Create/Create";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { Route, Switch } from "react-router-dom";
import { getCurrentUser } from "./constants/AuthFunctions";

import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const user = getCurrentUser();
    console.log("logged in as", user);
  });
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
