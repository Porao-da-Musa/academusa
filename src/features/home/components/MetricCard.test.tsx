import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MetricCard } from "./MetricCard";
import { Activity } from "lucide-react";

describe("MetricCard Component", () => {
  it("it should render labels and dynamic values correctly", () => {
    const mockTitle = "Test Metric";
    const mockValue = "12345";

    render(
      <MetricCard
        title={mockTitle}
        icon={Activity}
        iconColor="text-blue-600"
        value={mockValue}
      />,
    );

    expect(screen.getByText(mockTitle)).toBeInTheDocument();
    expect(screen.getByText(mockValue)).toBeInTheDocument();
  });

  it("it should exhibit proper behavior when the metric is exactly zero", () => {
    render(
      <MetricCard
        title="Faltas no Mês"
        icon={Activity}
        iconColor="text-red-600"
        value={0}
      />,
    );

    expect(screen.getByText("Faltas no Mês")).toBeInTheDocument();
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("it should render conditional bottomContent when passed via props", () => {
    const mockBottomText = "Texto condicional renderizado";

    render(
      <MetricCard
        title="Lotação"
        icon={Activity}
        iconColor="text-red-600"
        value="50%"
        bottomContent={<span>{mockBottomText}</span>}
      />,
    );

    expect(screen.getByText(mockBottomText)).toBeInTheDocument();
  });

  it("it should not render extra DOM structure when bottomContent is not provided", () => {
    const { container } = render(
      <MetricCard
        title="Treinos"
        icon={Activity}
        iconColor="text-blue-600"
        value={5}
      />,
    );

    expect(container.querySelectorAll(".bg-white > div").length).toBe(2);
  });
});
