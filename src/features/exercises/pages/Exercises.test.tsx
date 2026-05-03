import { describe, expect, it, vi } from "vitest";
import { Exercises } from "./Exercises";
import { render, screen } from "@testing-library/react";
import { getLevelStyles } from "../utils/exercises.utils";

vi.mock("../mocks/exercises.mock", () => ({
  fetchExercises: vi.fn().mockResolvedValue([
    {
      id: "1",
      name: "Supino com Barra",
      category: "Peito",
      equipment: "Barra",
      level: "Intermediário",
      muscles: ["Peito", "Tríceps", "Ombros"],
    },
  ]),
}));

describe("Exercises", () => {
  function renderPage() {
    return render(<Exercises />);
  }

  it("should render the exercise name after loading", async () => {
    renderPage();
    expect(await screen.findByText(/Supino com Barra/i)).toBeInTheDocument();
  });

  it("should render the correct exercise count after loading", async () => {
    renderPage();
    expect(
      await screen.findByText(/Mostrando 1 exercícios/i),
    ).toBeInTheDocument();
  });

  it("should render the page title", () => {
    renderPage();
    expect(screen.getByText(/Banco de Exercícios/i)).toBeInTheDocument();
  });

  it("should render exercise category and equipment", async () => {
    renderPage();
    expect(await screen.findByTestId("exercise-category")).toHaveTextContent(
      "Peito",
    );
    expect(await screen.findByTestId("exercise-equipment")).toHaveTextContent(
      "Barra",
    );
  });

  it("should render exercise muscle tags", async () => {
    renderPage();
    expect(await screen.findByText(/Tríceps/i)).toBeInTheDocument();
    expect(await screen.findByText(/Ombros/i)).toBeInTheDocument();
  });

  it("should return the correct level", () => {
    const beginnerStyle = getLevelStyles("Iniciante");
    const intermediateStyle = getLevelStyles("Intermediário");
    const advancedStyle = getLevelStyles("Avançado");

    expect(beginnerStyle.bg).toBe("bg-green-100");
    expect(beginnerStyle.text).toBe("text-green-700");
    expect(intermediateStyle.bg).toBe("bg-yellow-100");
    expect(intermediateStyle.text).toBe("text-yellow-700");
    expect(advancedStyle.bg).toBe("bg-red-100");
    expect(advancedStyle.text).toBe("text-red-700");
  });
});
