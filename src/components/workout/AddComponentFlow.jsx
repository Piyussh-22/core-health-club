import React, { useState } from "react";
import { Card } from "../ui/card";

const AddComponentFlow = () => {
  const [step, setStep] = useState(1);
  const [selectedMuscle, setSelectedMuscle] = useState(null);
  const [selectedExercise, setSelectedExercise] = useState(null);

  const getTitle = () => {
    if (step == 1) return "Muscle";
    if (step == 2) return selectedMuscle;
    if (step == 3) return selectedExercise;
    return "";
  };

  const handleBack = () => {
    if (step === 2) dispatch(setStep(1));
    else if (step === 3) dispatch(setStep(2));
    else dispatch(closeAddFlow());
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
        {step === 1 && <div>Muscle Step</div>}
        {step === 2 && <div>Exercise Step</div>}
        {step === 3 && <div>Track / History Step</div>}
      </div>
    </Card>
  );
};

export default AddComponentFlow;
