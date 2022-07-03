import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { login } from "../../constants/AuthFunctions";

import "./Login.scss";
import { Redirect } from "react-router-dom";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(user.username, user.password).then(
        () => {
          window.location.replace("/");
        },
        (err) => {
          console.log(err);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-navbar">
        <div className="hifind-logo">
          HiFind<span className="patch-info"> v1.0b</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="login-main-area">
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
            type="password"
            label="Password"
            size="small"
            variant="standard"
            name="password"
            value={user.password}
            onChange={updateUser}
          />
          <Button
            type="submit"
            onClick={handleSubmit}
            id="login-button"
            variant="contained"
            size="large"
          >
            LOG IN
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
