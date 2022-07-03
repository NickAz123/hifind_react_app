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

  const [nameError, setNameError] = useState({
    error: false,
    message: "",
  });

  const [passwordError, setPasswordError] = useState({
    error: false,
    message: "",
  });

  const updateUser = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const resetErrors = () => {
    const resetObject = { error: false, message: "" };
    setNameError(resetObject);
    setPasswordError(resetObject);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    resetErrors();

    try {
      await login(user.username, user.password).then((res) => {
        if (res.user) {
          window.location.replace("/");
        } else {
          switch (res.value) {
            case "username":
              setNameError({ error: true, message: res.error });
              break;
            case "password":
              setPasswordError({ error: true, message: res.error });
              break;
          }
        }
      });
    } catch (err) {
      console.log("error catch 2", err);
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
            error={nameError.error}
            helperText={nameError.message}
            className="input"
            label="Username"
            size="small"
            variant="standard"
            name="username"
            value={user.username}
            onChange={updateUser}
          />
          <TextField
            error={passwordError.error}
            helperText={passwordError.message}
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
