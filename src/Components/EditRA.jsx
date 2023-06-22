import React from "react";
import { useState } from "react";
import { editRa, deleteRA, getRoutinebyActivity } from "../Api";

const EditRA = ({
  Activity,
  token,
  activityId,
  setActivityId,
  setActivities,
  routine,
  setView,
  setRaActivity,
}) => {
  const [count, setCount] = useState("");
  const [duration, setDuration] = useState("");
  console.log(routine);
  console.log(Activity);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const rAObj = {
      count: count ? count : routine.name,
      duration: duration ? duration : routine.description,
    };
    console.log(token);
    await editRa(Activity.routineActivityId, token, rAObj);
    setCount("");
    setDuration("");
    setView(false);
    const RA = await getRoutinebyActivity(Activity.id);
    setRaActivity(RA);
  };
  const handleDelete = async (event) => {
    event.preventDefault();

    await deleteRA(Activity.routineActivityId, token);
    setView(false);
    const RA = await getRoutinebyActivity(Activity.id);
    setRaActivity(RA);
  };
  return (
    <>
      <form>
        <label htmlFor="count">Count:</label>
        <input
          type="text"
          placeholder={routine.count}
          name="count"
          value={count}
          onChange={(event) => {
            setCount(event.target.value);
          }}
        />
        <label htmlFor="duration">Duration:</label>
        <input
          type="text"
          placeholder={routine.duration}
          name="duration"
          value={duration}
          onChange={(event) => {
            setDuration(event.target.value);
          }}
        />

        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleDelete}>Delete</button>
      </form>
    </>
  );
};
export default EditRA;
