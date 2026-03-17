import type { Exercise } from "../types/exercises.types";

type LevelStyle = {
  bg: string;
  text: string;
};

export const getLevelStyles = (level: Exercise["level"]): LevelStyle => {
  const styles: Record<Exercise["level"], LevelStyle> = {
    Iniciante: { bg: "bg-green-100", text: "text-green-700" },
    Intermediário: { bg: "bg-yellow-100", text: "text-yellow-700" },
    Avançado: { bg: "bg-red-100", text: "text-red-700" },
  };

  return styles[level];
};
