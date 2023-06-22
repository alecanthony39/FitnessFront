import React from "react";
import { useState } from "react";
import {
  editRoutine,
  deleteRoutine,
  getPublicRoutines,
  getUserRoutines,
  attachActivity,
} from "../Api";

const EditR = ({
  routine,
  token,
  setRoutineId,
  setUserRoutines,
  setRoutines,
  user,
  activities,
}) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(routine.isPublic);
  const [activityId, setActivityId] = useState(null);
  const [count, setCount] = useState("");
  const [duration, setDuration] = useState("");
  console.log(activities);
  const handleCheckboxChange = () => {
    setIsPublic(!isPublic);
  };
  const HandleAdd = async (event) => {
    event.preventDefault();

    const rAObj = {
      activityId: activityId,
      count: count,
      duration: duration,
    };
    await attachActivity(routine.id, rAObj);
    setActivityId(null);
    setCount("");
    setDuration("");
    const publicRoutines = await getPublicRoutines();
    setRoutines(publicRoutines);
    const _userRoutines = await getUserRoutines(token, user.username);
    setUserRoutines(_userRoutines);
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
      <select
        onChange={(event) => {
          console.log(event.target.value);
          setActivityId(event.target.value);
        }}
      >
        <option value={"none"}>Select An option</option>
        {activities.map((act) => {
          return (
            <>
              <option value={act.id}>{act.description}</option>
            </>
          );
        })}
      </select>

      {activityId && (
        <>
          <h1>Add Activity</h1>
          <form>
            <label htmlFor="count">Count</label>
            <input
              type="text"
              name="count"
              value={count}
              onChange={(event) => {
                setCount(event.target.value);
              }}
            ></input>
            <label htmlFor="duration">Duration</label>
            <input
              type="text"
              name="duration"
              value={duration}
              onChange={(event) => {
                setDuration(event.target.value);
              }}
            ></input>
            <button onClick={HandleAdd}>Submit</button>
          </form>
        </>
      )}
    </>
  );
};
export default EditR;
