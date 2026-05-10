import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent, within } from "@testing-library/react";
import { ExerciseSearchBar } from "../components/ExerciseSearchBar";

describe("ExerciseSearchBar", () => {
  const defaultProps = {
    searchTerm: "",
    onSearchChange: vi.fn(),
    selectedCategory: "Todos",
    onCategoryChange: vi.fn(),
    selectedLevel: "Todos",
    onLevelChange: vi.fn(),
  };

  function renderSearchBar(props = {}) {
    return render(<ExerciseSearchBar {...defaultProps} {...props} />);
  }

  it("should render the search input", () => {
    renderSearchBar();
    expect(
      screen.getByPlaceholderText(/Buscar exercícios ou grupos musculares/i),
    ).toBeInTheDocument();
  });

  it("should render the category select with all options", () => {
    renderSearchBar();

    const categorySelect = screen.getByRole("combobox", { name: /Categoria/i });

    const options = ["Todos", "Peito", "Costas", "Pernas", "Ombros", "Braços"];

    options.forEach((option) => {
      expect(
        within(categorySelect).getByRole("option", { name: option }),
      ).toBeInTheDocument();
    });
  });

  it("should render the level select with all options", () => {
    renderSearchBar();

    const levelSelect = screen.getByRole("combobox", { name: /Nível/i });

    const options = ["Todos", "Iniciante", "Intermediário", "Avançado"];

    options.forEach((option) => {
      expect(
        within(levelSelect).getByRole("option", { name: option }),
      ).toBeInTheDocument();
    });
  });

  it("should call onSearchChange when typing in the search input", () => {
    const onSearchChange = vi.fn();
    renderSearchBar({ onSearchChange });
    const input = screen.getByPlaceholderText(
      /Buscar exercícios ou grupos musculares/i,
    );
    fireEvent.change(input, { target: { value: "agachamento" } });
    expect(onSearchChange).toHaveBeenCalledWith("agachamento");
  });

  it("should call onCategoryChange when selecting a category", () => {
    const onCategoryChange = vi.fn();
    renderSearchBar({ onCategoryChange });
    const selects = screen.getAllByRole("combobox");
    fireEvent.change(selects[0], { target: { value: "Peito" } });
    expect(onCategoryChange).toHaveBeenCalledWith("Peito");
  });

  it("should call onLevelChange when selecting a level", () => {
    const onLevelChange = vi.fn();
    renderSearchBar({ onLevelChange });
    const selects = screen.getAllByRole("combobox");
    fireEvent.change(selects[1], { target: { value: "Avançado" } });
    expect(onLevelChange).toHaveBeenCalledWith("Avançado");
  });

  it("should NOT show the clear button when no filters are active", () => {
    renderSearchBar();
    expect(
      screen.queryByRole("button", { name: /Limpar tudo/i }),
    ).not.toBeInTheDocument();
  });

  it("should show the clear button when searchTerm is set", () => {
    renderSearchBar({ searchTerm: "agachamento" });
    expect(
      screen.getByRole("button", { name: /Limpar tudo/i }),
    ).toBeInTheDocument();
  });

  it("should show the clear button when a category filter is active", () => {
    renderSearchBar({ selectedCategory: "Peito" });
    expect(
      screen.getByRole("button", { name: /Limpar tudo/i }),
    ).toBeInTheDocument();
  });

  it("should show the clear button when a level filter is active", () => {
    renderSearchBar({ selectedLevel: "Iniciante" });
    expect(
      screen.getByRole("button", { name: /Limpar tudo/i }),
    ).toBeInTheDocument();
  });

  it("should call all reset handlers when clear button is clicked", () => {
    const onSearchChange = vi.fn();
    const onCategoryChange = vi.fn();
    const onLevelChange = vi.fn();
    renderSearchBar({
      searchTerm: "supino",
      onSearchChange,
      onCategoryChange,
      onLevelChange,
    });

    fireEvent.click(screen.getByRole("button", { name: /Limpar tudo/i }));

    expect(onSearchChange).toHaveBeenCalledWith("");
    expect(onCategoryChange).toHaveBeenCalledWith("Todos");
    expect(onLevelChange).toHaveBeenCalledWith("Todos");
  });

  it("should reflect the current searchTerm value in the input", () => {
    renderSearchBar({ searchTerm: "remada" });
    const input = screen.getByPlaceholderText(
      /Buscar exercícios ou grupos musculares/i,
    );
    expect(input).toHaveValue("remada");
  });

  it("should reflect the current selectedCategory in the select", () => {
    renderSearchBar({ selectedCategory: "Costas" });
    const selects = screen.getAllByRole("combobox");
    expect(selects[0]).toHaveValue("Costas");
  });

  it("should reflect the current selectedLevel in the select", () => {
    renderSearchBar({ selectedLevel: "Intermediário" });
    const selects = screen.getAllByRole("combobox");
    expect(selects[1]).toHaveValue("Intermediário");
  });
});
