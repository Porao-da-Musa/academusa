import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { MyWorkout } from "./MyWorkout";

test("Deve validar a renderização e interagir com a página", async () => {
  render(<MyWorkout />);

  const titulo = screen.getByRole("heading", { name: /bem-vindo/i });
  expect(titulo).toBeInTheDocument();
});
