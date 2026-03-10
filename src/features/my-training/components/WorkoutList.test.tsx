import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { WorkoutExerciseList } from "./WorkoutList";
import type { WorkoutExercise } from "../types/training.types";

const exercisesMock: WorkoutExercise[] = [
  {
    id: "1",
    name: "Supino",
    equipment: "Barra",
    sets: 3,
    reps: 10,
    order: 1,
    status: "Disponível",
    alternatives: [],
  },
  {
    id: "2",
    name: "Agachamento",
    equipment: "Smith",
    sets: 4,
    reps: 12,
    order: 2,
    status: "Disponível",
    alternatives: [],
  },
];
describe("WorkoutExerciseList", () => {
  test("deve renderizar a lista de exercícios", () => {
    render(
      <WorkoutExerciseList
        exercises={exercisesMock}
        DeleteTraining={() => {}}
      />,
    );

    expect(screen.getByText("Supino")).toBeInTheDocument();
    expect(screen.getByText("Agachamento")).toBeInTheDocument();
  });

  test("deve renderizar a quantidade correta de exercícios", () => {
    render(
      <WorkoutExerciseList
        exercises={exercisesMock}
        DeleteTraining={() => {}}
      />,
    );

    const status = screen.getAllByText(/Disponível/i);

    expect(status.length).toBe(2);
  });

  test("não deve renderizar exercícios quando a lista estiver vazia", () => {
    render(<WorkoutExerciseList exercises={[]} DeleteTraining={() => {}} />);

    const exercise = screen.queryByText("Supino");

    expect(exercise).not.toBeInTheDocument();
  });
});
