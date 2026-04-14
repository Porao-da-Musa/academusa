type Status = "Ocupado" | "Disponível";

type TrainingPlan = {
  id: string;
  name: string;
};

export type WorkoutExercise = {
  readonly id: string;
  readonly order: number;
  readonly name: string;
  readonly equipment: string;
  readonly status: Status;
  readonly sets: number;
  readonly reps: number;
  readonly alternatives: string[];
};
export type PlanSelectorProps = {
  selectedPlan: string;
  onChangePlan: (planId: string) => void;
  plans: TrainingPlan[];
};

export type WorkoutHeaderProps = {
  selectedPlan: string;
  onChangePlan: (planId: string) => void;
  plans: TrainingPlan[];
  label?: string;
  onAddExercise: (
    exercise: Omit<WorkoutExercise, "id" | "order" | "status" | "alternatives">,
  ) => void;
};
