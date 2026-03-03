import { render, screen, waitFor } from "@testing-library/react";
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

    const treinoDeHojeHeading = screen.getByRole("heading", {
      name: /treino de hoje/i,
    });
    expect(treinoDeHojeHeading).toBeInTheDocument();
  });

  it('should render Treinos when "Treino de Hoje" is rendered', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );

    const treinoDeHojeHeading = screen.getByText("Supino Reto");
    expect(treinoDeHojeHeading).toBeInTheDocument();
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

    const iniciarTreinoButton = screen.getByRole("button", {
      name: /iniciar treino/i,
    });
    expect(iniciarTreinoButton).toBeInTheDocument();

    await userEvent.click(iniciarTreinoButton);

    await waitFor(
      () => {
        const treinoDeHojeHeading = screen.getByRole("heading", {
          name: /Bem-vindo à Página Meu Treino!/i,
        });
        expect(treinoDeHojeHeading).toBeInTheDocument();
      },
      { timeout: 2000 },
    );
  });
});
