import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { Navbar } from "./NavBar";
import { NavbarVariant } from "./navbar.types";

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
  it("it should render the logo and public routes correctly", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Navbar variant={NavbarVariant.PUBLIC} routes={mockRoutes} />
      </MemoryRouter>,
    );

    expect(screen.getByText("Academusa")).toBeInTheDocument();
    expect(screen.getByText("Sobre")).toBeInTheDocument();
    expect(screen.getByText("Entrar")).toBeInTheDocument();
  });

  it("it should apply active styles to the current route", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <Navbar variant={NavbarVariant.PUBLIC} routes={mockRoutes} />
      </MemoryRouter>,
    );

    const linkSobre = screen.getByRole("link", { name: /sobre/i });
    expect(linkSobre).toHaveClass("bg-orange-600");
  });

  it("it should render simplified version in authentication pages", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <Navbar variant={NavbarVariant.PUBLIC} routes={mockRoutes} />
      </MemoryRouter>,
    );

    expect(screen.getByText("Academusa")).toBeInTheDocument();
    expect(screen.queryByText("Sobre")).not.toBeInTheDocument();
  });

  it("it should render dashboard variant without authentication buttons", () => {
    render(
      <MemoryRouter>
        <Navbar variant={NavbarVariant.DASHBOARD} routes={dashboardRoutes} />
      </MemoryRouter>,
    );

    expect(screen.getByText("Alunos")).toBeInTheDocument();
    expect(screen.queryByText("Entrar")).not.toBeInTheDocument();
  });

  it("it should change the style when scrolling the page", () => {
    const { container } = render(
      <MemoryRouter>
        <Navbar variant={NavbarVariant.PUBLIC} routes={mockRoutes} />
      </MemoryRouter>,
    );

    const nav = container.querySelector("nav");

    window.scrollY = 50;
    fireEvent.scroll(window);

    expect(nav).toHaveClass("shadow-lg");
  });

  it("it should navigate to the correct paths through the links", () => {
    render(
      <MemoryRouter>
        <Navbar variant={NavbarVariant.PUBLIC} routes={mockRoutes} />
      </MemoryRouter>,
    );

    const linkCadastro = screen.getByRole("link", { name: /começar/i });
    expect(linkCadastro).toHaveAttribute("href", "/signup");
  });
});
