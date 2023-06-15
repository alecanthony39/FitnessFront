import React from "react";
import { useState } from "react";
import { registerUser } from "../Api";
import { Navigate } from "react-router-dom";

function SignUp({ setToken }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const NewUser = {
        username: userName,
        password: password,
      };

      const newUserToken = await registerUser(NewUser);
      setToken(newUserToken);
      Navigate("/Login");
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
      <button type="submit" onClick={handleRegister}>
        Register
      </button>
    </form>
  );
}

export default SignUp;
