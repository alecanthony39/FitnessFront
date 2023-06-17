import React from "react";

const RoutineWActivity = ({ raActivity, setActivityId }) => {
  return (
    <div>
      {raActivity.map((routine) => {
        console.log(routine);
        return (
          <>
            <div
              style={{
                border: "1px solid black",
                borderRadius: "5px",
                padding: "10px",
              }}
            >
              <h1>1{routine.name}</h1>
              <div>
                2
                {routine.activities.map((act) => {
                  return (
                    <>
                      <p>Count:{act.count}</p>
                      <p>Description:{act.description}</p>
                      <p>Duration:{act.duration}</p>
                    </>
                  );
                })}
              </div>

              <h2>5{routine.creatorName}</h2>
            </div>
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
