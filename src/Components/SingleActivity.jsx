import React from "react";
import { useState, useEffect } from "react";
import EditA from "./EditA";
import { getRoutinebyActivity } from "../Api";
import RoutineWActivity from "./RoutinesWActivity";
const SingleActivity = ({ Activity, token, setActivities }) => {
  const [activityId, setActivityId] = useState(null);
  const [raActivity, setRaActivity] = useState([]);
  const [viewRa, setViewRa] = useState(false);
  useEffect(() => {
    const GetRoutinebActivity = async () => {
      const RA = await getRoutinebyActivity(Activity.id);
      setRaActivity(RA);
    };
    GetRoutinebActivity();
  }, []);
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <h1>
        ACTIVITY
        <span>
          <button
            onClick={() => {
              setViewRa(true);
            }}
          >
            Routines With this Activity
          </button>
          <button
            onClick={() => {
              setViewRa(false);
            }}
          >
            Clear
          </button>
        </span>
      </h1>

      {viewRa && (
        <RoutineWActivity
          raActivity={raActivity}
          setActivityId={setActivityId}
          token={token}
          setRaActivity={setRaActivity}
        />
      )}
      <h1>{Activity.name} </h1>
      <h2>{Activity.description}</h2>
      <button
        onClick={() => {
          console.log(Activity);
          setActivityId(Activity.id);
          console.log(Activity.id);
        }}
      >
        Edit
      </button>

      {activityId && (
        <EditA
          Activity={Activity}
          token={token}
          setActivityId={setActivityId}
          setActivities={setActivities}
        />
      )}
    </div>
  );
};

export default SingleActivity;
