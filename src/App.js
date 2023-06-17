import logo from "./logo.svg";
import "./App.css";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Home from "./Components/Home";
import MyRoutines from "./Components/MyRoutines";
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { getPublicRoutines, getActivities, myData } from "./Api";
import MyActivities from "./Components/MyActivities";
function App() {
  const [token, setToken] = useState("");
  const [routines, setRoutines] = useState([]);
  const [activities, setActivities] = useState([]);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const GetAllPosts = async () => {
      const publicRoutines = await getPublicRoutines();
      setRoutines(publicRoutines);
    };
    GetAllPosts();
    const getAllActivities = async () => {
      const allActivities = await getActivities();

      setActivities(allActivities);
    };
    getAllActivities();
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await myData(token);
      console.log(userData);
      setUser(userData);
    };
    if (token) {
      fetchUser();
    }
  }, [token]);

  return (
    <div>
      <h1>Welcome To SuperFitness</h1>
      <p>{token}</p>
      {!token && (
        <>
          <Link to="/signUp">Sign Up</Link>
          <Link to="/login">Log-In</Link>
        </>
      )}
      {token && (
        <>
          <Link to="/MyRoutines">My Routines</Link>
          <Link to="/MyActivities"> My Activities </Link>
        </>
      )}
      <Link to="/Home">Home</Link>
      <Routes>
        <Route path="/signUp" element={<SignUp setToken={setToken} />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route
          path="/Home"
          element={
            <Home
              token={token}
              setToken={setToken}
              routines={routines}
              setRoutines={setRoutines}
              activities={activities}
              setActivities={setActivities}
              user={user}
            />
          }
        />
        <Route
          path="/MyRoutines"
          element={
            <MyRoutines
              token={token}
              user={user}
              setRoutines={setRoutines}
              activities={activities}
            />
          }
        />
        <Route
          path="/MyActivities"
          element={
            <MyActivities
              token={token}
              user={user}
              setActivities={setActivities}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
