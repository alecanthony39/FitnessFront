import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Routines from "./Routines";
import Activities from "./Activities";

const Home = ({
  token,
  setToken,
  routines,
  setRoutines,
  activities,
  setActivities,
  user,
}) => {
  const [viewActivity, setViewActivity] = useState(false);

  const handleLogout = () => {
    setToken(null);
  };

  return (
    <div>
      {user && (
        <>
          <h1>
            Welcome {user.username}
            <span>
              <Button variant="danger" onClick={handleLogout}>
                Log Out
              </Button>
            </span>
          </h1>
        </>
      )}
      <Button onClick={() => setViewActivity(!viewActivity)}>
        View Activities
      </Button>
      {viewActivity && (
        <>
          <h1>Activities</h1>
          <Activities
            activities={activities}
            setActivities={setActivities}
            user={user}
            token={token}
          />
        </>
      )}
      <h1>Routines</h1>
      <Routines
        routines={routines}
        setRoutines={setRoutines}
        user={user}
        activities={activities}
        token={token}
      />
    </div>
  );
};

export default Home;
