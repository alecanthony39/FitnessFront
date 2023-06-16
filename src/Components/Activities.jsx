import React from "react";
import SingleActivity from "./SingleActivity";

const Activities = ({ activities, token, setActivities }) => {
  return (
    <div>
      {activities.map((Activity) => {
        return (
          <SingleActivity
            key={Activity.id}
            Activity={Activity}
            token={token}
            setActivities={setActivities}
          />
        );
      })}
    </div>
  );
};

export default Activities;
