import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { WelcomeCard } from "./WelcomeCard";
import { vi } from "vitest";

vi.mock("../../../services/supabaseClient", () => ({
  supabase: {
    auth: {
      getUser: vi.fn().mockResolvedValue({
        data: {
          user: {
            user_metadata: { name: "Kaique" },
          },
        },
        error: null,
      }),
    },
  },
}));

describe("Componente WelcomeCard", () => {
  it("it should display the full greeting when a dynamic name is passed via props", () => {
    const mockUserName = "UsuarioTeste123";
    render(<WelcomeCard />);

    expect(
      screen.getByText(`Bem vindo de volta, ${mockUserName}!`),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Pronto para começar seu treino?"),
    ).toBeInTheDocument();
  });
});
