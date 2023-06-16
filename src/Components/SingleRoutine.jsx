import React from "react";
import { useState } from "react";
import { deleteRoutine } from "../Api";
import EditR from "./EditR";
const SingleRoutine = ({
  routine,
  user,
  token,
  setRoutines,
  setUserRoutines,
}) => {
  const [routineId, setRoutineId] = useState(null);

  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <h1>{routine.name} </h1>
      <h2>{routine.goal}</h2>
      <p>{routine.creatorName}</p>
      {user && user.id === routine.creatorId && (
        <>
          <button
            onClick={() => {
              setRoutineId(routine.id);
            }}
          >
            Edit
          </button>
          {routineId && (
            <EditR
              routine={routine}
              token={token}
              setRoutineId={setRoutineId}
              setUserRoutines={setUserRoutines}
              setRoutines={setRoutines}
              user={user}
            />
          )}
        </>
      )}
    </div>
  );
};

export default SingleRoutine;
