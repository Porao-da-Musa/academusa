import type { WorkoutExercise } from "../types/training.types";
import { EmptyWorkoutCard } from "./EmptyCardWorkout";
import { WorkoutExerciseCard } from "./WorkoutCard";

type Props = {
  readonly exercises: WorkoutExercise[];
  readonly onDeleteExercise: (id: string) => void;
  readonly onTradeExercice: (id: string, alternativeId: string) => void;
  readonly onUpdateExercise: (
    id: string,
    data: Partial<WorkoutExercise>,
  ) => void;
  readonly onOpenAddExercise?: () => void;
};

export function WorkoutExerciseList({
  exercises,
  onDeleteExercise,
  onTradeExercice,
  onUpdateExercise,
  onOpenAddExercise,
}: Props) {
  if (exercises.length === 0) {
    return <EmptyWorkoutCard onAddExercise={onOpenAddExercise ?? (() => {})} />;
  }

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
            onTradeExercice={onTradeExercice}
            onUpdateExercise={onUpdateExercise}
          />
        );
      })}
    </div>
  );
}
