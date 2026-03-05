import { render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { Home } from "./Home";
import { describe, it, expect } from "vitest";
import { MyWorkout } from "@features/my-workout/pages/MyWorkout";

describe("Home", () => {
  it("should render Home component", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );

    const todayWorkoutHeading = screen.getByRole("heading", {
      name: /treino de hoje/i,
    });
    expect(todayWorkoutHeading).toBeInTheDocument();
  });

  it('should render Treinos when "Treino de Hoje" is rendered', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );

    const exerciseText = screen.getByText("Supino Reto");
    expect(exerciseText).toBeInTheDocument();
  });

  it("Should redirect to /my-workout when 'Iniciar Treino' is clicked", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home/my-workout" element={<MyWorkout />} />
        </Routes>
      </MemoryRouter>,
    );

    const startWorkoutButton = screen.getByRole("button", {
      name: /iniciar treino/i,
    });
    expect(startWorkoutButton).toBeInTheDocument();

    await userEvent.click(startWorkoutButton);

    const myWorkoutHeading = await screen.findByRole("heading", {
      name: /Bem-vindo à Página Meu Treino!/i,
    });
    expect(myWorkoutHeading).toBeInTheDocument();
  });
});
