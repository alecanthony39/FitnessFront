import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { myData, createRoutine } from "../Api";
import Routines from "./Routines";
import Activities from "./Activities";

const Home = ({
  token,
  setToken,
  routines,
  setRoutines,
  activities,
  setActivities,
}) => {
  const [user, setUser] = useState(null);
  const [createR, setCreateR] = useState(false);
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [viewActivity, setViewActivity] = useState(false);
  useEffect(() => {
    const fetchUser = async () => {
      const userData = await myData(token);
      console.log(userData);
      setUser(userData);
    };
    if (token) {
      fetchUser();
    }
  }, []);
  console.log(user);
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
    console.log("inside handleSubmit");
    console.log(token, routineObj);
    await createRoutine(token, routineObj);
    setName("");
    setGoal("");
    setIsPublic(!isPublic);
    setCreateR(false);
  };

  return (
    <div>
      {user && (
        <>
          <h1>
            Welcome {user.username}
            <span>
              <button
                onClick={(event) => {
                  setToken(null);
                }}
              >
                Log Out
              </button>
            </span>
          </h1>
        </>
      )}
      <button onClick={() => setViewActivity(!viewActivity)}>
        View Activities
      </button>
      {viewActivity && (
        <>
          {" "}
          <h1>Activities</h1>
          <Activities activities={activities} setActivities={setActivities} />
        </>
      )}
      <h1>Routines</h1>
      <Routines routines={routines} setRoutines={setRoutines} />
    </div>
  );
};

export default Home;
