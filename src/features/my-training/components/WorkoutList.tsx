import type { WorkoutExercise } from "../types/training.types";
import { WorkoutExerciseCard } from "./WorkoutCard";

type Props = {
  exercises: WorkoutExercise[];
  DeleteTraining: (id: string) => void;
};

export function WorkoutExerciseList({ exercises, DeleteTraining }: Props) {
  return (
    <div className="space-y-6">
      {exercises.map((exercise) => {
        return (
          <WorkoutExerciseCard
            key={exercise.id}
            exercise={exercise}
            DeleteTraining={DeleteTraining}
          />
        );
      })}
    </div>
  );
}
