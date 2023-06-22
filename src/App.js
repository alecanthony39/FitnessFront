import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Routes, Route, Link } from "react-router-dom";
import { getPublicRoutines, getActivities, myData } from "./Api";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Home from "./Components/Home";
import MyRoutines from "./Components/MyRoutines";
import MyActivities from "./Components/MyActivities";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [token, setToken] = useState("");
  const [routines, setRoutines] = useState([]);
  const [activities, setActivities] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getAllPublicRoutines = async () => {
      const publicRoutines = await getPublicRoutines();
      setRoutines(publicRoutines);
    };
    getAllPublicRoutines();

    const getAllActivities = async () => {
      const allActivities = await getActivities();
      setActivities(allActivities);
    };
    getAllActivities();
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await myData(token);
      setUser(userData);
    };
    if (token) {
      fetchUser();
    }
  }, [token]);

  const handleLogout = () => {
    setToken("");
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="app-container">
      <header className="navbar">
        <nav>
          <ul className="nav-links">
            {!token && (
              <>
                <li>
                  <Link to="/signUp">Sign Up</Link>
                </li>
                <li>
                  <Link to="/login">Log-In</Link>
                </li>
              </>
            )}
            {token && (
              <>
                <li>
                  <Link to="/MyRoutines">My Routines</Link>
                </li>
                <li>
                  <Link to="/Create-Activities">Create Activity</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </>
            )}
            <li>
              <Link to="/Home">Home</Link>
            </li>
          </ul>
        </nav>
      </header>

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
          path="/Create-Activities"
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
