import type { WorkoutExercise } from "../types/training.types";
import { StatusBadge } from "./StatusBadge";
import { Trash2 } from "lucide-react";
import { exercisesTraining } from "../mocks/exercises.mock";

type Props = {
  readonly exercise: WorkoutExercise;
  readonly onDeleteExercise: (id: string) => void;
  readonly onTradeExercice: (id: string, alternativeId: string) => void;
  readonly onUpdateExercise: (
    id: string,
    data: Partial<WorkoutExercise>,
  ) => void;
};

export function WorkoutExerciseCard({
  exercise,
  onDeleteExercise,
  onTradeExercice,
  onUpdateExercise,
}: Props) {
  const isAvailable = exercise.status === "Disponível";

  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 font-semibold text-blue-600">
            {exercise.order}
          </div>

          <div>
            <h3 className="text-lg  text-gray-900">{exercise.name}</h3>

            <p className=" flex mt-1 text-sm text-gray-600">
              {exercise.equipment}{" "}
              <span className="ml-2 inline-flex items-center gap-1 font-medium leading-none">
                <span className="ml-2 inline-flex items-center gap-1 font-medium leading-none">
                  <StatusBadge isAvailable={isAvailable} />
                </span>
              </span>
            </p>
          </div>
        </div>

        <button
          onClick={() => onDeleteExercise(exercise.id)}
          className="text-red-600 hover:scale-125 transition-all"
        >
          <Trash2 size={20} />
        </button>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm text-gray-600">Séries</label>
          <input
            type="number"
            value={exercise.sets}
            className="mt-1 w-full rounded-lg border text-black border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
            onChange={(e) =>
              onUpdateExercise(exercise.id, {
                sets: Number(e.target.value),
              })
            }
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Repetições</label>
          <input
            type="number"
            value={exercise.reps}
            className="mt-1 w-full rounded-lg border text-black border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
            onChange={(e) =>
              onUpdateExercise(exercise.id, {
                sets: Number(e.target.value),
              })
            }
          />
        </div>
      </div>
      {exercise.status === "Ocupado" &&
        exercise.alternatives &&
        exercise.alternatives.length > 0 && (
          <div className="mt-4 rounded-lg p-3 text-sm">
            <p className=" text-black">Alternativas Sugeridas:</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {exercise.alternatives.map((altId) => {
                const alt = exercisesTraining.find((e) => e.id === altId);

                if (!alt) return null;

                return (
                  <button
                    key={alt.id}
                    onClick={() => onTradeExercice(exercise.id, alt.id)}
                    className="rounded-lg bg-blue-50 p-2 text-sm text-blue-600 hover:bg-blue-200 transition"
                  >
                    {alt.name}
                  </button>
                );
              })}
            </div>
          </div>
        )}
    </div>
  );
}
