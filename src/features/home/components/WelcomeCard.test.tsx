import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { WelcomeCard } from "./WelcomeCard";

vi.mock("../../../services/supabaseClient", () => ({
  supabase: {
    auth: {
      getUser: vi.fn().mockResolvedValue({
        data: {
          user: {
            user_metadata: { name: "UsuarioTeste123" },
          },
        },
        error: null,
      }),
    },
  },
}));

describe("Componente WelcomeCard", () => {
  it("should display the full greeting with user name", async () => {
    render(<WelcomeCard />);

    expect(
      await screen.findByText("Bem-vindo(a) de volta, UsuarioTeste123!"),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Pronto para começar seu treino?"),
    ).toBeInTheDocument();
  });
});
