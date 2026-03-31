import { describe, expect, it, vi } from "vitest";
import { Exercises } from "./Exercises";
import { render, screen, waitFor, within } from "@testing-library/react";
import { getLevelStyles } from "../utils/exercises.utils";
import userEvent from "@testing-library/user-event";
const { MOCK_EXERCISES } = vi.hoisted(() => ({
  MOCK_EXERCISES: [
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
      name: "Agachamento",
      category: "Pernas",
      equipment: "Barra",
      level: "Iniciante",
      muscles: ["Quadríceps", "Glúteos", "Panturrilha"],
    },
    {
      id: "3",
      name: "Puxada Alta",
      category: "Costas",
      equipment: "Máquina",
      level: "Avançado",
      muscles: ["Latíssimo", "Bíceps"],
    },
  ],
}));

vi.mock("../mocks/exercises.mock", () => ({
  fetchExercises: vi.fn().mockResolvedValue(MOCK_EXERCISES),
}));

describe("Exercises", () => {
  function renderPage() {
    return render(<Exercises />);
  }

  it("should render the page title", () => {
    renderPage();
    expect(screen.getByText(/Banco de Exercícios/i)).toBeInTheDocument();
  });

  it("should render the page subtitle", () => {
    renderPage();
    expect(
      screen.getByText(/Encontre exercícios alternativos/i),
    ).toBeInTheDocument();
  });

  it("should render all exercise names after loading", async () => {
    renderPage();
    for (const exercise of MOCK_EXERCISES) {
      expect(await screen.findByText(exercise.name)).toBeInTheDocument();
    }
  });

  it("should render the correct total exercise count after loading", async () => {
    renderPage();
    expect(
      await screen.findByText(/Mostrando 3 exercícios/i),
    ).toBeInTheDocument();
  });

  it("should render exercise category and equipment", async () => {
    renderPage();
    const cards = await screen.findAllByTestId("exercise-card");

    expect(within(cards[0]).getByTestId("exercise-category")).toHaveTextContent(
      "Peito",
    );
    expect(
      within(cards[0]).getByTestId("exercise-equipment"),
    ).toHaveTextContent("Barra");

    expect(within(cards[1]).getByTestId("exercise-category")).toHaveTextContent(
      "Pernas",
    );
    expect(
      within(cards[1]).getByTestId("exercise-equipment"),
    ).toHaveTextContent("Barra");

    expect(within(cards[2]).getByTestId("exercise-category")).toHaveTextContent(
      "Costas",
    );
    expect(
      within(cards[2]).getByTestId("exercise-equipment"),
    ).toHaveTextContent("Máquina");
  });

  it("should render muscle tags for all exercises", async () => {
    renderPage();
    expect(await screen.findByText(/Tríceps/i)).toBeInTheDocument();
    expect(await screen.findByText(/Quadríceps/i)).toBeInTheDocument();
    expect(await screen.findByText(/Latíssimo/i)).toBeInTheDocument();
  });

  it("should filter exercises by search term", async () => {
    renderPage();
    await screen.findByText("Supino com Barra");

    const input = screen.getByPlaceholderText(
      /Buscar exercícios ou grupos musculares/i,
    );
    await userEvent.type(input, "agachamento");

    expect(screen.getByText("Agachamento")).toBeInTheDocument();
    expect(screen.queryByText("Supino com Barra")).not.toBeInTheDocument();
    expect(screen.queryByText("Puxada Alta")).not.toBeInTheDocument();
    expect(screen.getByText(/Mostrando 1 exercícios/i)).toBeInTheDocument();
  });

  it("should be case-insensitive when filtering by search term", async () => {
    renderPage();
    await screen.findByText("Supino com Barra");

    const input = screen.getByPlaceholderText(
      /Buscar exercícios ou grupos musculares/i,
    );
    await userEvent.type(input, "SUPINO");

    expect(screen.getByText("Supino com Barra")).toBeInTheDocument();
    expect(screen.queryByText("Agachamento")).not.toBeInTheDocument();
  });

  it("should show all exercises when search term is cleared", async () => {
    renderPage();
    await screen.findByText("Supino com Barra");

    const input = screen.getByPlaceholderText(
      /Buscar exercícios ou grupos musculares/i,
    );
    await userEvent.type(input, "agachamento");
    await userEvent.clear(input);

    expect(screen.getByText(/Mostrando 3 exercícios/i)).toBeInTheDocument();
  });

  it("should filter exercises by category", async () => {
    renderPage();
    await screen.findByText("Supino com Barra");

    const selects = screen.getAllByRole("combobox");
    await userEvent.selectOptions(selects[0], "Pernas");

    expect(screen.getByText("Agachamento")).toBeInTheDocument();
    expect(screen.queryByText("Supino com Barra")).not.toBeInTheDocument();
    expect(screen.getByText(/Mostrando 1 exercícios/i)).toBeInTheDocument();
  });

  it("should show all exercises when 'Todos' category is selected", async () => {
    renderPage();
    await screen.findByText("Supino com Barra");

    const selects = screen.getAllByRole("combobox");
    await userEvent.selectOptions(selects[0], "Peito");
    await userEvent.selectOptions(selects[0], "Todos");

    expect(screen.getByText(/Mostrando 3 exercícios/i)).toBeInTheDocument();
  });

  it("should filter exercises by level", async () => {
    renderPage();
    await screen.findByText("Supino com Barra");

    const selects = screen.getAllByRole("combobox");
    await userEvent.selectOptions(selects[1], "Avançado");

    expect(screen.getByText("Puxada Alta")).toBeInTheDocument();
    expect(screen.queryByText("Supino com Barra")).not.toBeInTheDocument();
    expect(screen.queryByText("Agachamento")).not.toBeInTheDocument();
    expect(screen.getByText(/Mostrando 1 exercícios/i)).toBeInTheDocument();
  });

  it("should apply search and category filters simultaneously", async () => {
    renderPage();
    await screen.findByText("Supino com Barra");

    const input = screen.getByPlaceholderText(
      /Buscar exercícios ou grupos musculares/i,
    );
    const selects = screen.getAllByRole("combobox");

    await userEvent.selectOptions(selects[0], "Peito");
    await userEvent.type(input, "supino");

    expect(screen.getByText("Supino com Barra")).toBeInTheDocument();
    expect(screen.getByText(/Mostrando 1 exercícios/i)).toBeInTheDocument();
  });

  it("should show empty state when no exercises match filters", async () => {
    renderPage();
    await screen.findByText("Supino com Barra");

    const input = screen.getByPlaceholderText(
      /Buscar exercícios ou grupos musculares/i,
    );
    await userEvent.type(input, "exercicio inexistente xyz");

    expect(
      screen.getByText(/Nenhum exercício encontrado com esses critérios/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/Mostrando 0 exercícios/i)).toBeInTheDocument();
  });

  it("should reset all filters when 'Limpar tudo' is clicked", async () => {
    renderPage();
    await screen.findByText("Supino com Barra");

    const input = screen.getByPlaceholderText(
      /Buscar exercícios ou grupos musculares/i,
    );
    const selects = screen.getAllByRole("combobox");

    await userEvent.type(input, "supino");
    await userEvent.selectOptions(selects[0], "Peito");

    await userEvent.click(screen.getByRole("button", { name: /Limpar tudo/i }));

    await waitFor(() => {
      expect(input).toHaveValue("");
      expect(selects[0]).toHaveValue("Todos");
      expect(screen.getByText(/Mostrando 3 exercícios/i)).toBeInTheDocument();
    });
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
