import { rootUrl } from "./ConnectionVariables.js";
import axios from "axios";

const login = (username, password) => {
  return axios
    .post(rootUrl + "/login", {
      user: {
        username: username,
        password: password,
      },
    })
    .then((res) => {
      if (res.data.token) {
        localStorage.setItem("user", JSON.stringify(res.data));
      }

      return res.data;
    })
    .catch((err) => {
      return err.response.status;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authHeader = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.token) {
    return { "x-auth-token": user.token };
  } else {
    return {};
  }
};

export { login, getCurrentUser, logout, authHeader };
