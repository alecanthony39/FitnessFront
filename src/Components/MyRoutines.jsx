import React from "react";
import SingleRoutine from "./SingleRoutine";
import { useState, useEffect } from "react";
import { createRoutine, getUserRoutines, getPublicRoutines } from "../Api";
import {} from "../Api";
const MyRoutines = ({ token, user, setRoutines }) => {
  const [createR, setCreateR] = useState(false);
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [userRoutines, setUserRoutines] = useState([]);
  console.log(user);
  useEffect(() => {
    const GetmyRoutines = async () => {
      const _userRoutines = await getUserRoutines(token, user.username);
      setUserRoutines(_userRoutines);
    };
    GetmyRoutines();
  }, []);

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
    const publicRoutines = await getPublicRoutines();
    setRoutines(publicRoutines);
    const _userRoutines = await getUserRoutines(token, user.username);
    setUserRoutines(_userRoutines);
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
      <h1>My Routines</h1>

      <div>
        {userRoutines.map((routine) => {
          return (
            <SingleRoutine
              key={routine.id}
              routine={routine}
              token={token}
              user={user}
              setUserRoutines={setUserRoutines}
              setRoutines={setRoutines}
            />
          );
        })}
      </div>
    </>
  );
};
export default MyRoutines;
