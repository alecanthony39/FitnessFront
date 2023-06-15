import React from "react";
import { useState } from "react";
import { registerUser } from "../Api";
import { useNavigate } from "react-router-dom";
import { login } from "../Api";

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
      navigate("/Home");
    } catch (err) {
      setErrorMessage(err.message);
    }
  };
  return (
    <form>
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
      <button type="submit" onClick={handleLogin}>
        Log-In
      </button>
    </form>
  );
};

export default Login;
