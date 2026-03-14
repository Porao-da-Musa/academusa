import { myTrainingMock } from "../mocks/myTraining.mock";
import { WorkoutAlertBanner } from "../components/WorkoutAlertBanner";
import { WorkoutExerciseList } from "../components/WorkoutList";
import type { WorkoutExercise } from "../types/training.types";
import { useState } from "react";

export function TrainingPage() {
  const [exercises, setExercises] = useState<WorkoutExercise[]>(myTrainingMock);

  const hasOccupied = exercises.some(
    (exercise) => exercise.status === "Ocupado",
  );

  function deleteMyTraining(id: string) {
    setExercises((prev) => prev.filter((training) => training.id !== id));
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {hasOccupied && <WorkoutAlertBanner hasOccupied={hasOccupied} />}

        <div className="mt-6">
          <WorkoutExerciseList
            exercises={exercises}
            onDeleteExercise={deleteMyTraining}
          />
        </div>
      </div>
    </div>
  );
}
