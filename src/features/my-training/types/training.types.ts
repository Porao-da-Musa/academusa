type Status = "Ocupado" | "Disponível";

export type AlternativeTradeExercise = {
  id: string;
  name: string;
  equipment: string;
};

export type WorkoutExercise = {
  readonly id: string;
  readonly order: number;
  readonly name: string;
  readonly equipment: string;
  readonly status: Status;
  readonly sets: number;
  readonly reps: number;
  readonly alternatives: AlternativeTradeExercise[];
};
