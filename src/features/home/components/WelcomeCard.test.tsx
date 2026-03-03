import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { WelcomeCard } from "./WelcomeCard";

describe("Componente WelcomeCard", () => {
  it("it should display the full greeting when a dynamic name is passed via props", () => {
    const mockUserName = "UsuarioTeste123";
    render(<WelcomeCard name={mockUserName} />);

    expect(
      screen.getByText(`Bem vindo de volta, ${mockUserName}!`),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Pronto para começar seu treino?"),
    ).toBeInTheDocument();
  });
});
