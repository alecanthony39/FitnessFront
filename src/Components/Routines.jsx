import React from "react";
import SingleRoutine from "./SingleRoutine";

const Routines = ({ routines, setRoutines, user, activities }) => {
  return (
    <div>
      {routines.map((routine) => {
        return (
          <SingleRoutine
            key={routine.id}
            routine={routine}
            setRoutines={setRoutines}
            user={user}
            activities={activities}
          />
        );
      })}
    </div>
  );
};

export default Routines;
