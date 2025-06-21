import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeAddFlow,
  setStep,
  setSelectedMuscle,
  setSelectedExercise,
  addExercise,
} from "@/redux/workoutSlice";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { format } from "date-fns";

const AddWorkoutFlow = () => {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.workout.step);
  const selectedMuscle = useSelector((state) => state.workout.selectedMuscle);
  const selectedExercise = useSelector(
    (state) => state.workout.selectedExercise
  );
  const selectedDate = useSelector((state) => state.date.selectedDate);
  const workoutsByDate = useSelector((state) => state.workout.workoutsByDate);

  const dateKey = format(new Date(selectedDate), "yyyy-MM-dd");

  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");

  const filteredSets =
    workoutsByDate[dateKey]?.filter(
      (w) => w.muscle === selectedMuscle && w.name === selectedExercise
    ) || [];

  const getTitle = () => {
    if (step === 1) return "Muscle";
    if (step === 2) return selectedMuscle;
    if (step === 3) return selectedExercise;
    return "";
  };

  const handleBack = () => {
    if (step === 1) {
      dispatch(closeAddFlow());
    } else {
      dispatch(setStep(step - 1));
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto mt-2 p-0">
      <div className="flex items-center justify-between px-4 py-2 border-b">
        <Button variant="ghost" onClick={handleBack}>
          Back
        </Button>
        <h2 className="text-lg font-medium">{getTitle()}</h2>
        <div className="w-[50px]" />
      </div>

      <div className="p-4">
        {step === 1 && (
          <div className="space-y-2">
            <Button
              className="w-full"
              onClick={() => {
                dispatch(setSelectedMuscle("Chest"));
                dispatch(setStep(2));
              }}
            >
              Chest
            </Button>
            <Button
              className="w-full"
              onClick={() => {
                dispatch(setSelectedMuscle("Back"));
                dispatch(setStep(2));
              }}
            >
              Back
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-2">
            <Button
              className="w-full"
              onClick={() => {
                dispatch(setSelectedExercise("Bench Press"));
                dispatch(setStep(3));
              }}
            >
              Bench Press
            </Button>
            <Button
              className="w-full"
              onClick={() => {
                dispatch(setSelectedExercise("Incline Press"));
                dispatch(setStep(3));
              }}
            >
              Incline Press
            </Button>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="block font-medium">Weight (kg)</label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  onClick={() =>
                    setWeight((w) => Math.max(0, parseFloat(w || 0) - 2.5))
                  }
                >
                  -2.5
                </Button>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="flex-1 px-3 py-2 border rounded-md text-center"
                />
                <Button
                  variant="outline"
                  onClick={() => setWeight((w) => parseFloat(w || 0) + 2.5)}
                >
                  +2.5
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block font-medium">Reps</label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  onClick={() =>
                    setReps((r) => Math.max(0, parseInt(r || 0) - 1))
                  }
                >
                  -1
                </Button>
                <input
                  type="number"
                  value={reps}
                  onChange={(e) => setReps(e.target.value)}
                  className="flex-1 px-3 py-2 border rounded-md text-center"
                />
                <Button
                  variant="outline"
                  onClick={() => setReps((r) => parseInt(r || 0) + 1)}
                >
                  +1
                </Button>
              </div>
            </div>

            <Button
              className="w-full mt-2"
              onClick={() => {
                dispatch(
                  addExercise({
                    date: selectedDate,
                    muscle: selectedMuscle,
                    name: selectedExercise,
                    weight: Number(weight),
                    reps: Number(reps),
                  })
                );
                setWeight("");
                setReps("");
              }}
            >
              Add Set
            </Button>

            {filteredSets.length > 0 && (
              <div className="mt-4 space-y-2">
                {filteredSets.map((set, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border px-4 py-2 rounded-md"
                  >
                    <div className="font-medium">
                      {index + 1}. {set.weight} kg × {set.reps} reps
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </Card>
  );
};

export default AddWorkoutFlow;
