import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";

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

    // Verifica se foi redirecionado para /home
    await waitFor(() => {
      expect(screen.getByText("Home Page")).toBeInTheDocument();
    });
  });
  it("allows login with valid credentials", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>,
    );
  });
});
