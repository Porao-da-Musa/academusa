import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { Signup } from "./Signup";

const mockNavigate = vi.fn();
const mockRegisterUser = vi.fn();

vi.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

vi.mock("../services/authService", () => ({
  signup: (...args: unknown[]) => mockRegisterUser(...args),
}));

vi.mock("../services/supabaseClient", () => ({
  supabase: {
    auth: {
      signUp: vi.fn(),
      signInWithPassword: vi.fn(),
      signOut: vi.fn(),
    },
  },
}));
describe("Signup", () => {
  const setup = () => {
    const user = userEvent.setup();
    render(<Signup />);
    return {
      user,
      nameInput: screen.getByLabelText(/nome completo/i),
      emailInput: screen.getByLabelText(/e-mail/i),
      passwordInput: screen.getByLabelText(/^senha$/i),
      confirmPasswordInput: screen.getByLabelText(/confirmar senha/i),
      submitButton: screen.getByRole("button", { name: /criar conta/i }),
    };
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render the initial screen correctly", () => {
    setup();

    expect(
      screen.getByRole("heading", { name: /criar conta/i }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/nome completo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^senha$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/confirmar senha/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /criar conta/i })).toBeEnabled();
  });

  it("should update input values on type", async () => {
    const { user, nameInput } = setup();
    await user.type(nameInput, "Maria Silva");
    expect(nameInput).toHaveValue("Maria Silva");
  });

  it("should display error if name is empty", async () => {
    const {
      user,
      submitButton,
      emailInput,
      passwordInput,
      confirmPasswordInput,
    } = setup();

    await user.type(emailInput, "seu@exemplo.com");
    await user.type(passwordInput, "123456");
    await user.type(confirmPasswordInput, "123456");
    await user.click(submitButton);

    expect(screen.getByText(/por favor informe seu nome/i)).toBeInTheDocument();
    expect(mockRegisterUser).not.toHaveBeenCalled();
  });

  it("should display error if name contains only spaces", async () => {
    const {
      user,
      nameInput,
      submitButton,
      emailInput,
      passwordInput,
      confirmPasswordInput,
    } = setup();

    await user.type(nameInput, "     ");
    await user.type(emailInput, "seu@exemplo.com");
    await user.type(passwordInput, "123456");
    await user.type(confirmPasswordInput, "123456");
    await user.click(submitButton);

    expect(screen.getByText(/por favor informe seu nome/i)).toBeInTheDocument();
    expect(mockRegisterUser).not.toHaveBeenCalled();
  });

  it("should display error for invalid email format", async () => {
    const {
      user,
      nameInput,
      emailInput,
      submitButton,
      passwordInput,
      confirmPasswordInput,
    } = setup();

    await user.type(nameInput, "Maria Silva");
    await user.type(emailInput, "emailinvalido");
    await user.type(passwordInput, "123456");
    await user.type(confirmPasswordInput, "123456");
    await user.click(submitButton);

    expect(screen.getByText(/e-mail inválido/i)).toBeInTheDocument();
    expect(mockRegisterUser).not.toHaveBeenCalled();
  });

  it("should display error for password with less than 6 characters", async () => {
    const {
      user,
      nameInput,
      emailInput,
      passwordInput,
      confirmPasswordInput,
      submitButton,
    } = setup();

    await user.type(nameInput, "Maria Silva");
    await user.type(emailInput, "seu@exemplo.com");
    await user.type(passwordInput, "123");
    await user.type(confirmPasswordInput, "123");
    await user.click(submitButton);

    expect(
      screen.getByText(/senha deve ter ao menos 6 caracteres/i),
    ).toBeInTheDocument();
    expect(mockRegisterUser).not.toHaveBeenCalled();
  });

  it("should display error if passwords do not match", async () => {
    const {
      user,
      nameInput,
      emailInput,
      passwordInput,
      confirmPasswordInput,
      submitButton,
    } = setup();

    await user.type(nameInput, "Maria Silva");
    await user.type(emailInput, "seu@exemplo.com");
    await user.type(passwordInput, "123456");
    await user.type(confirmPasswordInput, "456123");
    await user.click(submitButton);

    expect(screen.getByText(/as senhas não conferem/i)).toBeInTheDocument();
    expect(mockRegisterUser).not.toHaveBeenCalled();
  });

  it("should process registration successfully and redirect", async () => {
    mockRegisterUser.mockResolvedValueOnce({});

    const {
      user,
      nameInput,
      emailInput,
      passwordInput,
      confirmPasswordInput,
      submitButton,
    } = setup();

    await user.type(nameInput, "Maria Silva");
    await user.type(emailInput, "seu@exemplo.com");
    await user.type(passwordInput, "123456");
    await user.type(confirmPasswordInput, "123456");

    await user.click(submitButton);

    expect(
      await screen.findByText(/usuário cadastrado com sucesso/i),
    ).toBeInTheDocument();

    await waitFor(
      () => {
        expect(mockNavigate).toHaveBeenCalledWith("/login");
      },
      { timeout: 2000 },
    );
  });

  it("should display error message returned by the API", async () => {
    const apiError = "Este e-mail já está em uso.";
    mockRegisterUser.mockRejectedValueOnce(new Error(apiError));

    const {
      user,
      nameInput,
      emailInput,
      passwordInput,
      confirmPasswordInput,
      submitButton,
    } = setup();

    await user.type(nameInput, "Maria Silva");
    await user.type(emailInput, "seu@exemplo.com");
    await user.type(passwordInput, "123456");
    await user.type(confirmPasswordInput, "123456");

    await user.click(submitButton);

    const errorElement = await screen.findByText(apiError);
    expect(errorElement).toBeInTheDocument();

    expect(submitButton).toBeEnabled();
    expect(submitButton).toHaveTextContent(/criar conta/i);
  });

  it("should display default error message if API fails without message", async () => {
    mockRegisterUser.mockRejectedValueOnce({});

    const {
      user,
      nameInput,
      emailInput,
      passwordInput,
      confirmPasswordInput,
      submitButton,
    } = setup();

    await user.type(nameInput, "Maria Silva");
    await user.type(emailInput, "seu@exemplo.com");
    await user.type(passwordInput, "123456");
    await user.type(confirmPasswordInput, "123456");

    await user.click(submitButton);

    const errorElement = await screen.findByText(/erro ao cadastrar usuário/i);
    expect(errorElement).toBeInTheDocument();
  });

  it("should navigate to login when clicking the 'Entrar' button", async () => {
    const { user } = setup();
    const loginButton = screen.getByRole("button", { name: /entrar/i });
    await user.click(loginButton);
    expect(mockNavigate).toHaveBeenCalledWith("/login");
  });
});
