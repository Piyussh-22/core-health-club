import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { openAddFlow } from "@/redux/workoutSlice";
import AddWorkoutFlow from "./AddWorkoutFlow";
import { Button } from "@/components/ui/button";
import { Plus, Copy, Bot } from "lucide-react";
import { format } from "date-fns";

const WorkoutPanel = () => {
  const dispatch = useDispatch();
  const showAddFlow = useSelector((state) => state.workout.showAddFlow);
  const selectedDate = useSelector((state) => state.date.selectedDate);
  const workoutsByDate = useSelector((state) => state.workout.workoutsByDate);

  const dateKey = format(new Date(selectedDate), "yyyy-MM-dd");
  const todayWorkout = workoutsByDate[dateKey] || [];

  return (
    <div className="flex flex-col gap-3 justify-center items-center py-4">
      {!showAddFlow && (
        <>
          <Button
            variant="outline"
            className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-muted cursor-pointer"
            onClick={() => dispatch(openAddFlow())}
          >
            <Plus size={20} />
            Workout
          </Button>

          <Button
            variant="outline"
            className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-muted cursor-pointer"
          >
            <Copy size={20} />
            Copy
          </Button>

          <Button
            variant="outline"
            className="flex items-center gap-2 px-4 py-2 rounded-md cursor-not-allowed opacity-50"
            disabled
          >
            <Bot size={20} />
            AI
          </Button>
        </>
      )}

      {showAddFlow && <AddWorkoutFlow />}

      {todayWorkout.length > 0 && (
        <div className="w-full max-w-md space-y-3 mt-4">
          {todayWorkout.map((exercise, index) => (
            <div
              key={index}
              className="flex justify-between items-center border px-4 py-2 rounded-md"
            >
              <div className="font-medium">
                {index + 1}. {exercise.name} ({exercise.muscle})
              </div>
              <div className="text-sm text-muted-foreground">
                {exercise.weight} kg × {exercise.reps} reps
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkoutPanel;
