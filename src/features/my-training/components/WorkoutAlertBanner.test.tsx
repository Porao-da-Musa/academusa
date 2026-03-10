import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { WorkoutAlertBanner } from "./WorkoutAlertBanner";

test("deve renderizar alerta quando hasOccupied for true", () => {
  render(<WorkoutAlertBanner hasOccupied={true} />);

  const alert = screen.getByText(/ocupado/i);
  expect(alert).toBeInTheDocument();
});

test("não deve renderizar alerta quando hasOccupied for false", () => {
  render(<WorkoutAlertBanner hasOccupied={false} />);

  const alert = screen.queryByText(/ocupado/i);
  expect(alert).not.toBeInTheDocument();
});
