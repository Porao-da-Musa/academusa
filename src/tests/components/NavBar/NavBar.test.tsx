import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { Navbar } from "../../../components/NavBar";
import { NavbarHome } from "../../../components/NavBarHome";

describe("Testes das Navbars", () => {
  describe("Navbar Principal (Landing Page)", () => {
    it("deve renderizar o nome Academusa e os links da Landing Page", () => {
      render(
        <MemoryRouter initialEntries={["/"]}>
          <Navbar />
        </MemoryRouter>,
      );

      expect(screen.getByText("Academusa")).toBeInTheDocument();
      expect(screen.getByText("Funcionalidades")).toBeInTheDocument();
      expect(screen.getByText("Sobre")).toBeInTheDocument();
      expect(screen.getByText("Planos")).toBeInTheDocument();
    });

    it("deve mostrar a versão simplificada na rota de login", () => {
      render(
        <MemoryRouter initialEntries={["/login"]}>
          <Navbar />
        </MemoryRouter>,
      );

      expect(screen.getByText("Academusa")).toBeInTheDocument();
      expect(screen.queryByText("Sobre")).not.toBeInTheDocument();
    });
  });

  describe("NavbarHome (Dashboard)", () => {
    it("deve renderizar o nome FitFlow Academia e as rotas internas", () => {
      render(
        <MemoryRouter initialEntries={["/home"]}>
          <NavbarHome />
        </MemoryRouter>,
      );

      expect(screen.getByText("FitFlow Academia")).toBeInTheDocument();
      expect(screen.getByText("Painel")).toBeInTheDocument();
      expect(screen.getByText("Mapa da Academia")).toBeInTheDocument();
      expect(screen.getByText("Meu Treino")).toBeInTheDocument();
      expect(screen.getByText("Exercícios")).toBeInTheDocument();
    });

    it("deve aplicar a classe de link ativo quando estiver na rota correta", () => {
      render(
        <MemoryRouter initialEntries={["/home/map"]}>
          <NavbarHome />
        </MemoryRouter>,
      );

      const linkMapa = screen.getByText("Mapa da Academia");
      expect(linkMapa).toHaveClass("bg-blue-600");
    });

    it("deve mostrar a logo simplificada se estiver no /login dentro do contexto Home", () => {
      render(
        <MemoryRouter initialEntries={["/login"]}>
          <NavbarHome />
        </MemoryRouter>,
      );

      expect(screen.getByText("FitFlow Academia")).toBeInTheDocument();
      expect(screen.queryByText("Painel")).not.toBeInTheDocument();
    });
  });
});
