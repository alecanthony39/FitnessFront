import React from "react";
import SingleActivity from "./SingleActivity";

const Activities = ({ activities }) => {
  return (
    <div>
      {activities.map((Activity) => {
        return <SingleActivity key={Activity.id} Activity={Activity} />;
      })}
    </div>
  );
};

export default Activities;
