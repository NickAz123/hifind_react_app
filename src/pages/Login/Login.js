import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Login.scss";
import { borderColor } from "@mui/system";

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
          <Button id="login-button" variant="contained" size="large">
            LOG IN
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
