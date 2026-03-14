import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { About } from "./About";

vi.mock("../components/AboutHeader", () => ({
  AboutHeader: () => <h1>About Header</h1>,
}));

vi.mock("../components/TrainerShowcaseCard", () => ({
  TrainerShowcaseCard: () => <section>Trainer Showcase</section>,
}));

vi.mock("../components/TechnologySection", () => ({
  TechnologySection: () => <section>Technology Section</section>,
}));

vi.mock("../components/CommitmentSection", () => ({
  CommitmentSection: () => <section>Commitment Section</section>,
}));

vi.mock("@shared/ui/Footer", () => ({
  Footer: ({ blackText }: { blackText?: boolean }) => (
    <footer>{blackText ? "Footer Black Text" : "Footer"}</footer>
  ),
}));

describe("About", () => {
  it("renders the AboutHeader component", () => {
    render(<About />);

    const header = screen.getByRole("heading", { name: /about header/i });

    expect(header).toBeInTheDocument();
  });

  it("renders the TrainerShowcaseCard component", () => {
    render(<About />);

    const section = screen.getByText(/trainer showcase/i);

    expect(section).toBeInTheDocument();
  });

  it("renders the TechnologySection component", () => {
    render(<About />);

    const section = screen.getByText(/technology section/i);

    expect(section).toBeInTheDocument();
  });

  it("renders the CommitmentSection component", () => {
    render(<About />);

    const section = screen.getByText(/commitment section/i);

    expect(section).toBeInTheDocument();
  });

  it("renders the Footer with blackText prop enabled", () => {
    render(<About />);

    const footer = screen.getByText(/footer black text/i);

    expect(footer).toBeInTheDocument();
  });
});
