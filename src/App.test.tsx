import { render, screen } from "@testing-library/react";
import { expect, it, describe } from "vitest";
import App from "./App";
import "@testing-library/jest-dom/vitest";
describe("Componente App", () => {
  it("deve renderizar o título do projeto", () => {
    render(<App />);

    const elementos = screen.getAllByText(/Academusa/i);

    expect(elementos.length).toBeGreaterThan(0);
  });
});
