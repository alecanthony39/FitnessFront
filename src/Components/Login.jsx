import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../Api";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Login = ({ setToken }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const NewUser = {
        name: userName,
        password: password,
      };
      const newUserToken = await login(NewUser);
      setToken(newUserToken);
      if (newUserToken) {
        navigate("/Home");
      }
    } catch (err) {
      console.log(err);
      setErrorMessage(err.message);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <p>{errorMessage}</p>
        <button type="submit">Log-In</button>
      </form>
    </div>
  );
};

export default Login;
