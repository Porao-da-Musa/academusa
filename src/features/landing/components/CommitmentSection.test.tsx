import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { CommitmentSection } from "./CommitmentSection";

describe("CommitmentSection", () => {
  it("renders the section heading", () => {
    render(<CommitmentSection />);

    const heading = screen.getByRole("heading", {
      level: 2,
      name: /compromisso com resultados/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("renders the mission description text", () => {
    render(<CommitmentSection />);

    const description = screen.getByText(
      /nosso foco é levar treinadores e alunos a alcançarem seus objetivos\./i,
    );

    expect(description).toBeInTheDocument();
  });

  it("renders the results metric value", () => {
    render(<CommitmentSection />);

    const metricValue = screen.getByText(/\+10\.000/i);

    expect(metricValue).toBeInTheDocument();
  });

  it("renders the results metric label", () => {
    render(<CommitmentSection />);

    const metricLabel = screen.getByText(/resultados transformados/i);

    expect(metricLabel).toBeInTheDocument();
  });
});
