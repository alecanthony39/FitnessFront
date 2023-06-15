import React from "react";
import { useState } from "react";

const SingleRoutine = ({ routine }) => {
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
    </div>
  );
};

export default SingleRoutine;
