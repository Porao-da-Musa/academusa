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

describe("WorkoutList", () => {
  test("should render the exercise list", () => {
    render(
      <WorkoutExerciseList
        exercises={exercisesMock}
        onDeleteExercise={() => {}}
        onTradeExercices={() => {}}
      />,
    );

    expect(screen.getByText("Supino")).toBeInTheDocument();
    expect(screen.getByText("Agachamento")).toBeInTheDocument();
  });

  test("should render the correct number of exercises", () => {
    render(
      <WorkoutExerciseList
        exercises={exercisesMock}
        onDeleteExercise={() => {}}
        onTradeExercices={() => {}}
      />,
    );

    const status = screen.getAllByText(/Disponível/i);

    expect(status.length).toBe(2);
  });

  test("should not render exercises when the list is empty", () => {
    render(
      <WorkoutExerciseList
        exercises={[]}
        onDeleteExercise={() => {}}
        onTradeExercices={() => {}}
      />,
    );

    const exercise = screen.queryByText("Supino");

    expect(exercise).not.toBeInTheDocument();
  });
});
