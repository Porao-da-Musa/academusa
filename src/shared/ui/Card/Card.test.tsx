import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Card } from "./Card";

describe("Card", () => {
  it("renders children content", () => {
    render(
      <Card>
        <span>Card Content</span>
      </Card>,
    );

    const content = screen.getByText(/card content/i);

    expect(content).toBeInTheDocument();
  });

  it("applies the custom className when provided", () => {
    render(
      <Card className="custom-class">
        <span>Custom Card</span>
      </Card>,
    );

    const content = screen.getByText(/custom card/i);
    const card = content.parentElement as HTMLElement;

    expect(card.className).toContain("custom-class");
  });
});
