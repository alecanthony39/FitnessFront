import React from "react";
import { useState } from "react";
import { registerUser } from "../Api";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SignUp({ setToken }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const NewUser = {
        username: userName,
        password: password,
      };

      const newUserToken = await registerUser(NewUser);
      setToken(newUserToken);
      if (newUserToken) {
        navigate("/Login");
      }
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleRegister}>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default SignUp;
