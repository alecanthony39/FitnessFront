import React from "react";
import SingleRoutine from "./SingleRoutine";

const Routines = ({ routines, setRoutines }) => {
  return (
    <div>
      {routines.map((routine) => {
        return (
          <SingleRoutine
            key={routine.id}
            routine={routine}
            setRoutines={setRoutines}
          />
        );
      })}
    </div>
  );
};

export default Routines;
