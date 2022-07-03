import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { rootUrl } from "../../constants/ConnectionVariables.js";
import { borderColor } from "@mui/system";
import axios from "axios";

import "./Login.scss";

function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const updateUser = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    let payload = {
      user: {
        username: user.username,
        password: user.password,
      },
    };

    axios
      .post(rootUrl + "/login", payload)
      .then((res) => {
        console.log("response from server", res);
      })
      .catch((err) => {
        console.log(err.response.status);
      });
  };

  return (
    <div className="login-container">
      <div className="login-navbar">
        <div className="hifind-logo">
          HiFind<span className="patch-info"> v1.0b</span>
        </div>
      </div>

      <div className="login-main-area">
        <div className="login-card">
          <TextField
            className="input"
            label="Username"
            size="small"
            variant="standard"
            name="username"
            value={user.username}
            onChange={updateUser}
          />
          <TextField
            className="input"
            label="Password"
            size="small"
            variant="standard"
            name="password"
            value={user.password}
            onChange={updateUser}
          />
          <Button
            onClick={handleSubmit}
            id="login-button"
            variant="contained"
            size="large"
          >
            LOG IN
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
