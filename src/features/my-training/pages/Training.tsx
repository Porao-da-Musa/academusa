import { myTrainingMock } from "../mocks/myTraining.mock";
import { WorkoutAlertBanner } from "../components/WorkoutAlertBanner";
import { WorkoutExerciseList } from "../components/WorkoutList";
import type { WorkoutExercise } from "../types/training.types";
import { useState } from "react";
import { exercisesTraining } from "../mocks/exercises.mock";
import { WorkoutHeader } from "../components/WorkoutHeader";
import { trainingPlans } from "../mocks/plans.mocks";

export function TrainingPage() {
  const [exercises, setExercises] = useState<WorkoutExercise[]>(myTrainingMock);

  const [selectedPlan, setSelectedPlan] = useState("Treino de Empurrar");

  const visibleExercises = exercises.slice(0, 20);

  const hasOccupied = visibleExercises.some(
    (exercise) => exercise.status === "Ocupado",
  );

  function addExercise(
    newExercise: Omit<
      WorkoutExercise,
      "id" | "order" | "status" | "alternatives"
    >,
  ) {
    setExercises((prev) => [
      {
        ...newExercise,
        id: String(Date.now()),
        order: 1,
        status: "Disponível",
        alternatives: [],
      },
      ...prev.map((exercise) => ({
        ...exercise,
        order: exercise.order + 1,
      })),
    ]);
  }
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
        <WorkoutHeader
          selectedPlan={selectedPlan}
          onChangePlan={setSelectedPlan}
          plans={trainingPlans}
          onAddExercise={addExercise}
        />
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
