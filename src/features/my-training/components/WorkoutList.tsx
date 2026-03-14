import type { WorkoutExercise } from "../types/training.types";
import { WorkoutExerciseCard } from "./WorkoutCard";

type Props = {
  readonly exercises: WorkoutExercise[];
  readonly onDeleteExercise: (id: string) => void;
};

export function WorkoutExerciseList({ exercises, onDeleteExercise }: Props) {
  return (
    <div className="space-y-6">
      {exercises.map((exercise) => {
        return (
          <WorkoutExerciseCard
            key={exercise.id}
            exercise={exercise}
            onDeleteExercise={onDeleteExercise}
          />
        );
      })}
    </div>
  );
}
