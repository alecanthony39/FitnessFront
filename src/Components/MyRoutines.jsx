import React from "react";

import { useState } from "react";
import { createRoutine } from "../Api";
const MyRoutines = ({ token }) => {
  const [createR, setCreateR] = useState(false);
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const handleCheckboxChange = () => {
    setIsPublic(!isPublic);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const routineObj = {
      name: name,
      goal: goal,
      isPublic: isPublic,
    };

    await createRoutine(token, routineObj);
    setName("");
    setGoal("");
    setIsPublic(!isPublic);
    setCreateR(false);
  };

  return (
    <>
      <h1>
        Create Routine:
        <span>
          <button onClick={() => setCreateR(true)}>Create</button>
        </span>
      </h1>
      {createR && (
        <>
          <form>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <label htmlFor="goal">Goal:</label>
            <input
              type="text"
              name="goal"
              value={goal}
              onChange={(event) => {
                setGoal(event.target.value);
              }}
            />
            <label>Is Public?</label>
            <input
              type="checkbox"
              checked={isPublic}
              onChange={handleCheckboxChange}
            />
            <button onClick={handleSubmit}>Submit</button>
          </form>
        </>
      )}
    </>
  );
};
export default MyRoutines;
