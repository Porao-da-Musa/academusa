import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { TrainerShowcaseCard } from "./TrainerShowcaseCard";

describe("TrainerShowcaseCard", () => {
  it("renders the section heading", () => {
    render(<TrainerShowcaseCard />);

    const heading = screen.getByRole("heading", {
      level: 2,
      name: /feito para treinadores modernos/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("renders the main description texts", () => {
    render(<TrainerShowcaseCard />);

    expect(
      screen.getByText(
        /dê aos seus alunos uma experiência profissional e motivadora\./i,
      ),
    ).toBeInTheDocument();

    expect(
      screen.getByText(/dashboards intuitivos e automações inteligentes\./i),
    ).toBeInTheDocument();
  });

  it("renders weekly workout label", () => {
    render(<TrainerShowcaseCard />);

    const label = screen.getByText(/treinos esta semana/i);

    expect(label).toBeInTheDocument();
  });

  it("renders weekly workout total", () => {
    render(<TrainerShowcaseCard />);

    const total = screen.getByText(/^24$/);

    expect(total).toBeInTheDocument();
  });

  it("renders trainer stats values and labels", () => {
    render(<TrainerShowcaseCard />);

    expect(screen.getByText(/^156$/)).toBeInTheDocument();
    expect(screen.getByText("Alunos")).toBeInTheDocument();

    expect(screen.getByText(/^89%$/)).toBeInTheDocument();
    expect(screen.getByText(/engajamento/i)).toBeInTheDocument();
  });

  it("renders floating result card information", () => {
    render(<TrainerShowcaseCard />);

    expect(screen.getByText(/\+47% resultados/i)).toBeInTheDocument();
    expect(screen.getByText(/nos últimos 30 dias/i)).toBeInTheDocument();
  });
});
