import type { WorkoutExercise } from "../types/training.types";
import { WorkoutExerciseCard } from "./WorkoutCard";

type Props = {
  readonly exercises: WorkoutExercise[];
  readonly onDeleteExercise: (id: string) => void;
  readonly onTradeExercices: (id: string, alternative: WorkoutExercise) => void;
};

export function WorkoutExerciseList({
  exercises,
  onDeleteExercise,
  onTradeExercices,
}: Props) {
  return (
    <div className="space-y-6">
      {exercises.map((exercise, index) => {
        return (
          <WorkoutExerciseCard
            key={exercise.id}
            exercise={{
              ...exercise,
              order: index + 1,
            }}
            onDeleteExercise={onDeleteExercise}
            onTradeExercices={onTradeExercices}
          />
        );
      })}
    </div>
  );
}
