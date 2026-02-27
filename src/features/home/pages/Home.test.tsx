import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./Home";
import { describe, it, expect } from "vitest";

describe("Home", () => {
  it("should render Treino de Hoje component", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );

    const treinoDeHojeHeading = screen.getByText("Treino de Hoje");
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

  it("Should redirect to /treinos when 'Iniciar Treino' is clicked", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );

    const iniciarTreinoButton = screen.getByText("Iniciar Treino");
    expect(iniciarTreinoButton).toBeInTheDocument();

    iniciarTreinoButton.click();
  });
});
