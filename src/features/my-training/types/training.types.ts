type Status = "Ocupado" | "Disponível";

export type WorkoutExercise = {
  id: string;
  order: number;
  name: string;
  equipment: string;
  status: Status;
  sets: number;
  reps: number;
  alternatives?: string[];
};
