import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { AboutHeader } from "./AboutHeader";

describe("AboutHeader", () => {
  it("renders the main heading with the correct text", () => {
    render(<AboutHeader />);

    const heading = screen.getByRole("heading", {
      level: 1,
      name: /sobre o academusa/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("renders the mission description text", () => {
    render(<AboutHeader />);

    const description = screen.getByText(
      /nossa missão é conectar treinadores e alunos com tecnologia de alto nível, proporcionando desempenho, organização e resultados reais\./i,
    );

    expect(description).toBeInTheDocument();
  });
});
