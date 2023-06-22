import React from "react";
import { useState } from "react";
import EditRA from "./EditRA";
import SingleRWA from "./SingleRWA";
const RoutineWActivity = ({
  raActivity,
  setActivityId,
  token,
  setRaActivity,
}) => {
  return (
    <div>
      {raActivity.map((routine) => {
        return (
          <>
            <div
              style={{
                border: "1px solid black",
                borderRadius: "5px",
                padding: "10px",
              }}
            >
              <h1>Routine:{routine.name}</h1>
              <div>
                {routine.activities.map((act) => {
                  return (
                    <SingleRWA
                      act={act}
                      routine={routine}
                      token={token}
                      setRaActivity={setRaActivity}
                    />
                  );
                })}
              </div>

              <h2>Creator:{routine.creatorName}</h2>
            </div>
          </>
        );
      })}
    </div>
  );
};
export default RoutineWActivity;
