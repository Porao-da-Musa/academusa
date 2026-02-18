import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";

vi.mock("../services/supabaseConfig", () => ({
  login: vi
    .fn()
    .mockResolvedValue({ id: "123", email: "aluno@academusa.com.br" }),
}));

describe("Login Component", () => {
  it("renders the login form", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>,
    );
    expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/senha/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Entrar/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Criar conta/i }),
    ).toBeInTheDocument();
  });

  it("allows user to input email and password and finally login", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/login"]}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<div>Home Page</div>} />
        </Routes>
      </MemoryRouter>,
    );

    const emailInput = screen.getByLabelText(/e-mail/i);
    const passwordInput = screen.getByLabelText(/senha/i);
    const loginButton = screen.getByRole("button", { name: /Entrar/i });

    await user.type(emailInput, "aluno@academusa.com.br");
    await user.type(passwordInput, "aluniacademusa");
    await user.click(loginButton);

    await waitFor(() => {
      expect(screen.getByText("Home Page")).toBeInTheDocument();
    });
  });

  it("shows error message on failed login", async () => {
    const { login } = await import("../services/authService");
    vi.mocked(login).mockRejectedValueOnce(
      new Error("Invalid login credentials"),
    );

    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>,
    );

    const emailInput = screen.getByLabelText(/e-mail/i);
    const passwordInput = screen.getByLabelText(/senha/i);
    const loginButton = screen.getByRole("button", { name: /Entrar/i });

    await user.type(emailInput, "aluno@academusa.com.br");
    await user.type(passwordInput, "wrongpassword");
    await user.click(loginButton);

    await waitFor(() => {
      expect(
        screen.getByText(/Erro ao entrar. Verifique suas credenciais./i),
      ).toBeInTheDocument();
    });
  });
});
