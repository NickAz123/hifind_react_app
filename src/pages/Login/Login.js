import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { login } from "../../constants/AuthFunctions";

import "./Login.scss";

function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    console.log("hello");
  }, []);

  const updateUser = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    const res = login(user.username, user.password);
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
            type="password"
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
