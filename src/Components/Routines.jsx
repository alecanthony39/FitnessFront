import React from "react";
import SingleRoutine from "./SingleRoutine";

const Routines = ({ routines, setRoutines, user }) => {
  return (
    <div>
      {routines.map((routine) => {
        return (
          <SingleRoutine
            key={routine.id}
            routine={routine}
            setRoutines={setRoutines}
            user={user}
          />
        );
      })}
    </div>
  );
};

export default Routines;
