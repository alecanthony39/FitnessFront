import React from "react";
import { useState } from "react";
import {
  editRoutine,
  deleteRoutine,
  getPublicRoutines,
  getUserRoutines,
} from "../Api";

const EditR = ({
  routine,
  token,
  setRoutineId,
  setUserRoutines,
  setRoutines,
  user,
}) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(routine.isPublic);

  const handleCheckboxChange = () => {
    setIsPublic(!isPublic);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const routineObj = {
      name: name ? name : routine.name,
      goal: goal ? goal : routine.goal,
      isPublic: isPublic ? isPublic : routine.isPublic,
    };

    await editRoutine(routine.id, token, routineObj);
    setName("");
    setGoal("");
    setIsPublic(!isPublic);
    setRoutineId(null);
    const publicRoutines = await getPublicRoutines();
    setRoutines(publicRoutines);
    const _userRoutines = await getUserRoutines(token, user.username);
    setUserRoutines(_userRoutines);
  };
  const handleDelete = async (event) => {
    event.preventDefault();
    await deleteRoutine(routine.id, token);
    setRoutineId(null);
    const publicRoutines = await getPublicRoutines();
    setRoutines(publicRoutines);
    const _userRoutines = await getUserRoutines(token, user.username);
    setUserRoutines(_userRoutines);
  };
  return (
    <>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          placeholder={routine.name}
          name="name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label htmlFor="goal">Goal:</label>
        <input
          type="text"
          placeholder={routine.goal}
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
        <button onClick={handleDelete}>Delete</button>
      </form>
    </>
  );
};
export default EditR;
