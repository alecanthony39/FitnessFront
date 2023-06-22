import React from "react";
import { useState } from "react";
import EditRA from "./EditRA";

const SingleRWA = ({ act, routine, token, setRaActivity }) => {
  const [view, setView] = useState(false);
  return (
    <>
      <div
        style={{
          border: "1px solid black",
          borderRadius: "5px",
          padding: "10px",
        }}
      >
        <p>Count:{act.count}</p>
        <p>Description:{act.description}</p>
        <p>Duration:{act.duration}</p>
      </div>
      <button
        onClick={() => {
          setView(true);
        }}
      >
        Edit
      </button>
      {view && (
        <EditRA
          routine={routine}
          setView={setView}
          token={token}
          Activity={act}
          setRaActivity={setRaActivity}
        />
      )}
    </>
  );
};

export default SingleRWA;
