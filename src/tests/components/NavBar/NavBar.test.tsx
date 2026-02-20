import { render, screen, act } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { Navbar } from "../../../components/NavBar";

const mockRoutes = [
  { label: "Funcionalidades", path: "/#features", isAnchor: true },
  { label: "Sobre", path: "/about" },
  { label: "Planos", path: "/#plans", isAnchor: true },
];

const dashboardRoutes = [
  { label: "Alunos", path: "/dashboard/alunos" },
  { label: "Financeiro", path: "/dashboard/financeiro" },
];

describe("Componente Navbar", () => {
  it("deve renderizar a logo e as rotas públicas corretamente", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Navbar variant="public" routes={mockRoutes} />
      </MemoryRouter>,
    );

    expect(screen.getByText("Academusa")).toBeInTheDocument();
    expect(screen.getByText("Sobre")).toBeInTheDocument();
    expect(screen.getByText("Entrar")).toBeInTheDocument();
  });

  it("deve aplicar estilos ativos à rota atual", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <Navbar variant="public" routes={mockRoutes} />
      </MemoryRouter>,
    );

    const linkSobre = screen.getByRole("link", { name: /sobre/i });
    expect(linkSobre).toHaveClass("bg-orange-600");
  });

  it("deve renderizar versão simplificada em páginas de autenticação", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <Navbar variant="public" routes={mockRoutes} />
      </MemoryRouter>,
    );

    expect(screen.getByText("Academusa")).toBeInTheDocument();
    expect(screen.queryByText("Sobre")).not.toBeInTheDocument();
  });

  it("deve renderizar a variante dashboard sem botões de autenticação", () => {
    render(
      <MemoryRouter>
        <Navbar variant="dashboard" routes={dashboardRoutes} />
      </MemoryRouter>,
    );

    expect(screen.getByText("Alunos")).toBeInTheDocument();
    expect(screen.queryByText("Entrar")).not.toBeInTheDocument();
  });

  it("deve alterar o estilo ao rolar a página (scroll)", () => {
    const { container } = render(
      <MemoryRouter>
        <Navbar variant="public" routes={mockRoutes} />
      </MemoryRouter>,
    );

    const nav = container.querySelector("nav");

    act(() => {
      window.scrollY = 50;
      window.dispatchEvent(new Event("scroll"));
    });

    expect(nav).toHaveClass("shadow-lg");
  });

  it("deve navegar para os caminhos corretos através dos links", () => {
    render(
      <MemoryRouter>
        <Navbar variant="public" routes={mockRoutes} />
      </MemoryRouter>,
    );

    const linkCadastro = screen.getByRole("link", { name: /começar/i });
    expect(linkCadastro).toHaveAttribute("href", "/signup");
  });
});
