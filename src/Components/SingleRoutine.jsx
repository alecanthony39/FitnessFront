import React from "react";
import { useState } from "react";
import { deleteRoutine } from "../Api";
import EditR from "./EditR";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SingleRoutine = ({
  routine,
  user,
  token,
  setRoutines,
  setUserRoutines,
  activities,
}) => {
  const [routineId, setRoutineId] = useState(null);

  return (
    <Container className="d-flex justify-content-center">
      <Row>
        <Col md={6}>
          <Card
            className="mb-4"
            style={{
              border: "1px solid black",
              borderRadius: "5px",
              padding: "10px",
            }}
          >
            <Card.Title>{routine.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {routine.goal}
            </Card.Subtitle>
            <Card.Text>{routine.creatorName}</Card.Text>

            {user && user.id === routine.creatorId && (
              <>
                <Button
                  variant="danger"
                  onClick={() => {
                    setRoutineId(routine.id);
                  }}
                  style={{ marginBottom: "10px" }}
                >
                  Edit
                </Button>

                {routineId && (
                  <EditR
                    routine={routine}
                    token={token}
                    setRoutineId={setRoutineId}
                    setUserRoutines={setUserRoutines}
                    setRoutines={setRoutines}
                    user={user}
                    activities={activities}
                  />
                )}
              </>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleRoutine;
