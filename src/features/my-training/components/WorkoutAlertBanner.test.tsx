import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { WorkoutAlertBanner } from "./WorkoutAlertBanner";

test("should render alert when hasOccupied is true", () => {
  render(<WorkoutAlertBanner hasOccupied={true} />);

  const alert = screen.queryByText(/alguns equipamentos estão ocupados/i);
  expect(alert).toBeInTheDocument();
});

test("should not render alert when hasOccupied is false", () => {
  render(<WorkoutAlertBanner hasOccupied={false} />);

  const alert = screen.queryByText(/alguns equipamentos estão ocupados/i);
  expect(alert).not.toBeInTheDocument();
});
