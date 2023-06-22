import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { createActivity } from "../Api";
import Form from "react-bootstrap/Form";

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
      {!token && <h1>Please Sign In To View This Page</h1>}
      <h1>
        Create Activity:
        <span>
          <Button variant="dark" onClick={() => setCreateA(true)}>
            Create
          </Button>
        </span>
      </h1>

      {createA && (
        <>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Description:</Form.Label>
              <Form.Control
                type="text"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </Form.Group>

            <Button variant="danger" type="submit">
              Submit
            </Button>
          </Form>
        </>
      )}
    </>
  );
};

export default MyActivities;
