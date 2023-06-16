import React from "react";

import { useState } from "react";

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

  return (
    <div>
      {user && (
        <>
          <h1>
            Welcome {user.username}
            <span>
              <button
                onClick={(event) => {
                  setToken(null);
                }}
              >
                Log Out
              </button>
            </span>
          </h1>
        </>
      )}
      <button onClick={() => setViewActivity(!viewActivity)}>
        View Activities
      </button>
      {viewActivity && (
        <>
          {" "}
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
      <Routines routines={routines} setRoutines={setRoutines} user={user} />
    </div>
  );
};

export default Home;
