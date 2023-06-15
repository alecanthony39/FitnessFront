import React from "react";

const SingleActivity = ({ Activity }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <h1>ACTIVITY</h1>
      <h1>{Activity.name} </h1>
      <h2>{Activity.description}</h2>
    </div>
  );
};

export default SingleActivity;
