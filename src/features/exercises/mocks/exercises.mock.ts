import type { Exercise } from "../types/exercises.types";

export const exercisesData: Exercise[] = [
  {
    id: "1",
    name: "Supino com Barra",
    category: "Peito",
    equipment: "Barra",
    level: "Intermediário",
    muscles: ["Peito", "Tríceps", "Ombros"],
  },
  {
    id: "2",
    name: "Agachamento Livre",
    category: "Pernas",
    equipment: "Rack de Agachamento",
    level: "Intermediário",
    muscles: ["Quadríceps", "Glúteos", "Posteriores"],
  },
  {
    id: "3",
    name: "Levantamento Terra",
    category: "Costas",
    equipment: "Barra",
    level: "Avançado",
    muscles: ["Costas", "Posteriores", "Glúteos"],
  },
  {
    id: "4",
    name: "Barra Fixa",
    category: "Costas",
    equipment: "Barra Fixa",
    level: "Intermediário",
    muscles: ["Dorsais", "Bíceps", "Costas"],
  },
  {
    id: "5",
    name: "Desenvolvimento",
    category: "Ombros",
    equipment: "Barra",
    level: "Intermediário",
    muscles: ["Ombros", "Tríceps"],
  },
  {
    id: "6",
    name: "Leg Press",
    category: "Pernas",
    equipment: "Leg Press",
    level: "Iniciante",
    muscles: ["Quadríceps", "Glúteos", "Posteriores"],
  },
  {
    id: "7",
    name: "Crucifixo no Cross",
    category: "Peito",
    equipment: "Cross",
    level: "Iniciante",
    muscles: ["Peito"],
  },
  {
    id: "8",
    name: "Puxada Alta",
    category: "Costas",
    equipment: "Cross",
    level: "Iniciante",
    muscles: ["Dorsais", "Bíceps"],
  },
  {
    id: "9",
    name: "Rosca Direta",
    category: "Braços",
    equipment: "Halteres",
    level: "Iniciante",
    muscles: ["Bíceps"],
  },
  {
    id: "10",
    name: "Tríceps na Polia",
    category: "Braços",
    equipment: "Cross",
    level: "Iniciante",
    muscles: ["Tríceps"],
  },
];

export const fetchExercises = async (): Promise<Exercise[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(exercisesData);
    }, 500);
  });
};
