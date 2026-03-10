import type { WorkoutExercise } from "../types/training.types";

export const myTrainingMock: WorkoutExercise[] = [
  {
    id: "1",
    order: 1,
    name: "Supino Reto",
    equipment: "Barra",
    status: "Ocupado",
    sets: 4,
    reps: 10,
    alternatives: ["Halteres", "Máquina Chest Press", "Barra"],
  },
  {
    id: "2",
    order: 2,
    name: "Leg Inclinado",
    equipment: "Máquina",
    status: "Disponível",
    sets: 3,
    reps: 12,
  },
  {
    id: "3",
    order: 3,
    name: "Puxada Frontal",
    equipment: "Polia",
    status: "Disponível",
    sets: 3,
    reps: 10,
  },
  {
    id: "4",
    order: 4,
    name: "Supino Inclinado",
    equipment: "Halteres",
    status: "Disponível",
    sets: 3,
    reps: 10,
  },
];
