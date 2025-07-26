import React from "react";
import { useParams, Link } from "react-router-dom";
import trainers from "./TrainersMock";

function TrainerDetails() {
  const { id } = useParams();
  const trainer = trainers.find((t) => t.trainerId === id);

  if (!trainer) {
    return (
      <div>
        <h2>Trainer Not Found</h2>
        <Link to="/trainers">Back to Trainers List</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Trainer Details</h2>
      <p>
        <strong>T-ID:</strong> {trainer.trainerId}
      </p>
      <p>
        <strong>Name:</strong> {trainer.name}
      </p>
      <p>
        <strong>Email:</strong> {trainer.email}
      </p>
      <p>
        <strong>Phone:</strong> {trainer.phone}
      </p>
      <p>
        <strong>Technology:</strong> {trainer.technology}
      </p>
      <p>
        <strong>Skills:</strong> {trainer.skills.join(", ")}
      </p>
      <Link to="/trainers">Back to Trainers List</Link>
    </div>
  );
}

export default TrainerDetails;
