import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Login from "./Login";

describe("Página de Login", () => {
  it('deve renderizar o botão "Criar conta"', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>,
    );

    const elementoTexto = screen.getByText(/Criar conta/i);

    expect(elementoTexto).toBeInTheDocument();
  });
});
