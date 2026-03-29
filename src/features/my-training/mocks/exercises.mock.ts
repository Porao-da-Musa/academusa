import type { WorkoutExercise } from "../types/training.types";

export const exercisesTraining: WorkoutExercise[] = [
  {
    id: "101",
    order: 1,
    name: "Supino com Halteres",
    equipment: "Halteres",
    status: "Disponível",
    sets: 30,
    reps: 120,
    alternatives: [],
  },
  {
    id: "102",
    order: 1,
    name: "Chest Press",
    equipment: "Máquina",
    status: "Disponível",
    sets: 3,
    reps: 12,
    alternatives: [],
  },
  {
    id: "103",
    order: 1,
    name: "Treino de peito",
    equipment: "Maquina de supino inclinado",
    status: "Disponível",
    sets: 10,
    reps: 10,
    alternatives: [],
  },
];
