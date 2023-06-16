import React from "react";

import { useState } from "react";
import { createActivity } from "../Api";
const MyActivities = ({ token }) => {
  const [createA, setCreateA] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const activityObj = {
      name: name,
      description: description,
    };

    await createActivity(token, activityObj);
    setName("");
    setDescription("");

    setCreateA(false);
  };

  return (
    <>
      <h1>
        Create Activity:
        <span>
          <button onClick={() => setCreateA(true)}>Create</button>
        </span>
      </h1>

      {createA && (
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
            <label htmlFor="Description">Description:</label>
            <input
              type="text"
              name="description"
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />

            <button onClick={handleSubmit}>Submit</button>
          </form>
        </>
      )}
    </>
  );
};
export default MyActivities;
