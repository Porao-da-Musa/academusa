import type { WorkoutHeaderProps } from "../types/training.types";
import { PlanSelector } from "../components/PlanSelector";
import { AddExerciseButton } from "./AddExerciseButton";

export function WorkoutHeader({
  selectedPlan,
  onChangePlan,
  plans,
  onOpenAddExercise,
}: WorkoutHeaderProps) {
  return (
    <div className="relative z-20 mb-6">
      <div className="mb-4">
        <h1 className="text-2xl  text-gray-900">Gerenciador de Treinos</h1>
        <p className="mt-1 text-base text-gray-600">
          Construa e adapte seu plano de treino em tempo real
        </p>
      </div>

      <div className="flex items-center justify-between rounded-xl border bg-white p-4 shadow-sm overflow-visible">
        <div className="flex items-center gap-3">
          <span className="text-medium text-gray-600">Plano Atual:</span>

          <PlanSelector
            selectedPlan={selectedPlan}
            onChangePlan={onChangePlan}
            plans={plans}
          />
        </div>

        <AddExerciseButton onOpenAddExercise={onOpenAddExercise} />
      </div>
    </div>
  );
}
