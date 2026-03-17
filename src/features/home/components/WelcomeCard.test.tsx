import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { WelcomeCard } from "./WelcomeCard";

const mockUserName = "UsuarioTeste123";

vi.mock("../hooks/useUser", () => ({
  useUser: () => ({
    name: mockUserName,
  }),
}));

describe("Componente WelcomeCard", () => {
  it("should display the full greeting with user name", () => {
    render(<WelcomeCard />);

    expect(
      screen.getByText(`Bem-vindo(a) de volta, ${mockUserName}!`),
    ).toBeInTheDocument();
  });
});
