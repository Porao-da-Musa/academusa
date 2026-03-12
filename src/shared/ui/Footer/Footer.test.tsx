import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("renders the brand name", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );

    const brand = screen.getByText("Academusa");

    expect(brand).toBeInTheDocument();
  });

  it("renders the copyright text with the current year", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );

    const year = new Date().getFullYear();
    const copyright = screen.getByText(
      new RegExp(`© ${year} Academusa. Todos os direitos reservados.`, "i"),
    );

    expect(copyright).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );

    const terms = screen.getByRole("link", { name: /termos/i });
    const privacy = screen.getByRole("link", { name: /privacidade/i });
    const contact = screen.getByRole("link", { name: /contato/i });

    expect(terms).toBeInTheDocument();
    expect(privacy).toBeInTheDocument();
    expect(contact).toBeInTheDocument();
  });

  it("navigates to the correct routes when links are clicked", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );

    const terms = screen.getByRole("link", { name: /termos/i });
    const privacy = screen.getByRole("link", { name: /privacidade/i });
    const contact = screen.getByRole("link", { name: /contato/i });

    await user.click(terms);
    expect(terms).toHaveAttribute("href", "/terms");

    await user.click(privacy);
    expect(privacy).toHaveAttribute("href", "/privacy");

    await user.click(contact);
    expect(contact).toHaveAttribute("href", "/contact");
  });

  it("renders correctly when blackText prop is enabled", () => {
    render(
      <MemoryRouter>
        <Footer blackText />
      </MemoryRouter>,
    );

    const brand = screen.getByText("Academusa");

    expect(brand).toBeInTheDocument();
  });
});
