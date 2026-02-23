import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import { login } from "../services/authService";

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
    const { login } = await import("../services/authService");

    vi.mocked(login).mockResolvedValue({
      data: { id: "123", email: "aluno@academusa.com.br" },
      error: null,
    });

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

    await waitFor(
      () => {
        expect(screen.getByText("Home Page")).toBeInTheDocument();
      },
      { timeout: 2000 },
    );
  });

  it("shows error message on invalid credentials", async () => {
    vi.mock("../services/authService");
    vi.mocked(login).mockRejectedValueOnce({
      __isAuthError: true,
      name: "AuthApiError",
      status: 400,
      code: "invalid_credentials",
      message: "Invalid login credentials",
    });

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

  it("shows error message on invalid email format", async () => {
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

    await user.type(emailInput, "invalid-email");
    await user.type(passwordInput, "aluniacademusa");
    await user.click(loginButton);

    expect(screen.queryByText("Home Page")).not.toBeInTheDocument();
  });

  it("prevents form submission when password is empty", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/login"]}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<div>Home Page</div>} />
        </Routes>
      </MemoryRouter>,
    );

    const emailInput = screen.getByLabelText(/e-mail/i) as HTMLInputElement;
    const passwordInput = screen.getByLabelText(/senha/i) as HTMLInputElement;
    const loginButton = screen.getByRole("button", { name: /Entrar/i });

    await user.type(emailInput, "aluno@academusa.com.br");

    expect(passwordInput).toBeRequired();

    await user.click(loginButton);

    expect(screen.queryByText("Home Page")).not.toBeInTheDocument();
    expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument();
  });

  it("updates input values correctly during typing", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>,
    );

    const emailInput = screen.getByLabelText(/e-mail/i) as HTMLInputElement;
    const passwordInput = screen.getByLabelText(/senha/i) as HTMLInputElement;

    // Verifica que os campos começam vazios
    expect(emailInput.value).toBe("");
    expect(passwordInput.value).toBe("");

    await user.type(emailInput, "aluno");
    expect(emailInput.value).toBe("aluno");

    await user.type(emailInput, "@academusa.com.br");
    expect(emailInput.value).toBe("aluno@academusa.com.br");

    await user.type(passwordInput, "aluni");
    expect(passwordInput.value).toBe("aluni");

    await user.type(passwordInput, "academusa");
    expect(passwordInput.value).toBe("aluniacademusa");
  });

  it("allows user to clear input values", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>,
    );

    const emailInput = screen.getByLabelText(/e-mail/i) as HTMLInputElement;
    const passwordInput = screen.getByLabelText(/senha/i) as HTMLInputElement;

    await user.type(emailInput, "abc");
    await user.type(passwordInput, "123");

    await user.clear(emailInput);
    await user.clear(passwordInput);

    expect(emailInput.value).toBe("");
    expect(passwordInput.value).toBe("");
  });

  it("disables login button while loading", async () => {
    vi.mocked(login).mockImplementation(
      () =>
        new Promise((resolve) =>
          setTimeout(
            () =>
              resolve({
                data: { id: "123", email: "aluno@academusa.com.br" },
                error: null,
              }),
            100,
          ),
        ),
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
    await user.type(passwordInput, "aluniacademusa");

    expect(loginButton).not.toBeDisabled();

    await user.click(loginButton);

    await waitFor(() => {
      expect(loginButton).toBeDisabled();
    });

    await waitFor(
      () => {
        expect(loginButton).not.toBeDisabled();
      },
      { timeout: 2000 },
    );
  });

  it("shows correct UI behavior during async loading state", async () => {
    vi.mocked(login).mockImplementation(
      () =>
        new Promise((resolve) =>
          setTimeout(
            () =>
              resolve({
                data: { id: "123", email: "aluno@academusa.com.br" },
                error: null,
              }),
            150,
          ),
        ),
    );

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

    // Estado inicial: botão habilitado com texto "Entrar"
    expect(loginButton).not.toBeDisabled();
    expect(loginButton).toHaveTextContent("Entrar");

    await user.click(loginButton);

    // Durante o loading: botão desabilitado e texto "Entrando..."
    await waitFor(() => {
      expect(loginButton).toBeDisabled();
      expect(loginButton).toHaveTextContent("Entrando...");
    });
    await waitFor(
      () => {
        expect(screen.getByText("Home Page")).toBeInTheDocument();
      },
      { timeout: 2000 },
    );
  });

  it("clears error message when starting new async request", async () => {
    const user = userEvent.setup();

    vi.mocked(login).mockRejectedValueOnce(new Error("Invalid credentials"));

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>,
    );

    const emailInput = screen.getByLabelText(/e-mail/i);
    const passwordInput = screen.getByLabelText(/senha/i);
    const loginButton = screen.getByRole("button", { name: /Entrar/i });

    await user.type(emailInput, "aluno@academusa.com.br");
    await user.type(passwordInput, "senhaerrada");
    await user.click(loginButton);

    // Verifica que a mensagem de erro aparece
    await waitFor(() => {
      expect(
        screen.getByText(/Erro ao entrar. Verifique suas credenciais./i),
      ).toBeInTheDocument();
    });

    // Segundo mock: sucesso no login
    vi.mocked(login).mockResolvedValueOnce({
      data: { id: "123", email: "aluno@academusa.com.br" },
      error: null,
    });

    await user.clear(passwordInput);
    await user.type(passwordInput, "senhacorreta");
    await user.click(loginButton);

    await waitFor(() => {
      expect(
        screen.queryByText(/Erro ao entrar. Verifique suas credenciais./i),
      ).not.toBeInTheDocument();
    });
  });
});
