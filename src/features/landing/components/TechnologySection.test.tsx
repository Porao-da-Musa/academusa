import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { TechnologySection } from "./TechnologySection";

describe("TechnologySection", () => {
  it("renders the section heading", () => {
    render(<TechnologySection />);

    const heading = screen.getByRole("heading", {
      level: 2,
      name: /mais tempo para o que importa/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("renders the planning description text", () => {
    render(<TechnologySection />);

    const text = screen.getByText(
      /planejamento, acompanhamento e comunicação — tudo num só lugar\./i,
    );

    expect(text).toBeInTheDocument();
  });

  it("renders the repetitive tasks reduction text", () => {
    render(<TechnologySection />);

    const text = screen.getByText(
      /reduzimos tarefas repetitivas para você atender mais alunos\./i,
    );

    expect(text).toBeInTheDocument();
  });
});
