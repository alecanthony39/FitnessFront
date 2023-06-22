import React from "react";
import SingleRoutine from "./SingleRoutine";
import { useState, useEffect } from "react";
import { createRoutine, getUserRoutines, getPublicRoutines } from "../Api";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const MyRoutines = ({ token, user, setRoutines, activities }) => {
  const [createR, setCreateR] = useState(false);
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [userRoutines, setUserRoutines] = useState([]);

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
      {!user && <h1>Please Sign In to View this Page</h1>}

      {user && createR && (
        <>
          <h1>
            Create Routine:
            <span>
              <Button variant="dark" onClick={() => setCreateR(true)}>
                Create
              </Button>
            </span>
          </h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="goal">
              <Form.Label>Goal:</Form.Label>
              <Form.Control
                type="text"
                value={goal}
                onChange={(event) => setGoal(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="isPublic">
              <Form.Check
                type="checkbox"
                label="Is Public?"
                checked={isPublic}
                onChange={handleCheckboxChange}
              />
            </Form.Group>

            <Button variant="danger" type="submit">
              Submit
            </Button>
          </Form>
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
              activities={activities}
            />
          );
        })}
      </div>
    </>
  );
};

export default MyRoutines;
