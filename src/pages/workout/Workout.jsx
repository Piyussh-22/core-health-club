import React from "react";
import { useNavigate } from "react-router-dom";
import CircleButton from "../../components/CircleButton";

const Workout = () => {
  const today = new data().toISOString().split("T")[0];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Today's Workout ({today})</h1>

      <div className="flex justify-center gap-8 mt-10">
        <CircleButton label="+" onClick={() => navigate("/workout/add")} />
        <CircleButton label="📄" onClick={() => navigate("/workout/copy")} />
      </div>
    </div>
  );
};

export default Workout;
