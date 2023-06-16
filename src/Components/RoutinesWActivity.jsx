import React from "react";

const RoutineWActivity = ({ raActivity, setActivityId }) => {
  return (
    <div>
      {raActivity.map((routine) => {
        return (
          <>
            <h1>{routine.name}</h1>
            <h2>{routine.creatorName}</h2>
            {/* <button
              onClick={() => {
                setActivityId(null);
              }}
            >
              Close
            </button> */}
          </>
        );
      })}
    </div>
  );
};
export default RoutineWActivity;
