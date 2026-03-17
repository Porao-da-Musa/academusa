export type Level = "Iniciante" | "Intermediário" | "Avançado";

export type Exercise = {
  readonly id: string;
  readonly name: string;
  readonly category: string;
  readonly equipment: string;
  readonly level: Level;
  readonly muscles: string[];
};
