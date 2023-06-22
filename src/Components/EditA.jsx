import React from "react";
import { useState } from "react";
import { editActivity, getActivities } from "../Api";

const EditA = ({
  Activity,
  token,
  activityId,
  setActivityId,
  setActivities,
}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const activityObj = {
      name: name ? name : Activity.name,
      description: description ? description : Activity.description,
    };

    await editActivity(token, activityObj, Activity.id);
    setName("");
    setDescription("");
    const allActivities = await getActivities();
    setActivities(allActivities.reverse());
    setActivityId(null);
  };

  return (
    <>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          placeholder={Activity.name}
          name="name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          placeholder={Activity.description}
          name="goal"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  );
};
export default EditA;
