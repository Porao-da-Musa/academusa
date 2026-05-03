import { myTrainingMock } from "../mocks/myTraining.mock";
import { WorkoutAlertBanner } from "../components/WorkoutAlertBanner";
import { WorkoutExerciseList } from "../components/WorkoutList";
import type { WorkoutExercise } from "../types/training.types";
import { useState } from "react";
import { exercisesTraining } from "../mocks/exercises.mock";

export function TrainingPage() {
  const [exercises, setExercises] = useState<WorkoutExercise[]>(myTrainingMock);

  const [visibleIds] = useState(() =>
    exercises.slice(0, 10).map((ex) => ex.id),
  );

  const visibleExercises = exercises.filter((ex) => visibleIds.includes(ex.id));

  const hasOccupied = visibleExercises.some(
    (exercise) => exercise.status === "Ocupado",
  );

  function deleteMyTraining(id: string) {
    setExercises((prev) => prev.filter((training) => training.id !== id));
  }

  function tradeExercise(exerciseId: string, alternativeId: string) {
    const alternative = exercisesTraining.find((e) => e.id === alternativeId);

    if (!alternative) {
      console.warn("Alternative not found", { alternativeId });
      return;
    }

    setExercises((prev) =>
      prev.map((ex) => {
        if (ex.id !== exerciseId) return ex;

        return {
          ...alternative,
          id: ex.id,
          order: ex.order,
        };
      }),
    );
  }

  function updateExercise(id: string, data: Partial<WorkoutExercise>) {
    setExercises((prev) =>
      prev.map((ex) => (ex.id === id ? { ...ex, ...data } : ex)),
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {hasOccupied && <WorkoutAlertBanner hasOccupied={hasOccupied} />}

        <div className="mt-6">
          <WorkoutExerciseList
            exercises={visibleExercises}
            onDeleteExercise={deleteMyTraining}
            onTradeExercice={tradeExercise}
            onUpdateExercise={updateExercise}
          />
        </div>
      </div>
    </div>
  );
}
