import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { NotFound } from "./NotFound";

describe("NotFound Page", () => {
  function renderPage() {
    return render(<NotFound />);
  }

  it("should render the 404 heading", () => {
    renderPage();

    const heading = screen.getByRole("heading", {
      level: 1,
      name: "404",
    });

    expect(heading).toBeInTheDocument();
  });

  it("should render the not found message", () => {
    renderPage();

    const message = screen.getByText(/página não encontrada/i);

    expect(message).toBeInTheDocument();
  });

  it("should render only one heading on the page", () => {
    renderPage();

    const headings = screen.getAllByRole("heading");

    expect(headings).toHaveLength(1);
  });
});
