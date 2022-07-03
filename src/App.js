import Create from "./pages/Create/Create";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { Route, Switch } from "react-router-dom";
import { getCurrentUser } from "./constants/AuthFunctions";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const user = getCurrentUser();
    console.log("logged in as", user);
  });
  return (
    <div className="application-container">
      <Route path="/create" component={Create} />
      <PrivateRoute path="/" component={Home} />
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
