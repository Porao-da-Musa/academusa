import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
  it("renders the button with children", () => {
    render(<Button>Submit</Button>);

    const button = screen.getByRole("button", { name: /submit/i });

    expect(button).toBeInTheDocument();
  });

  it("calls onClick when clicked", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<Button onClick={onClick}>Click</Button>);

    const button = screen.getByRole("button", { name: /click/i });

    await user.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled when disabled prop is true", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(
      <Button disabled onClick={onClick}>
        Disabled
      </Button>,
    );

    const button = screen.getByRole("button", { name: /disabled/i });

    expect(button).toBeDisabled();

    await user.click(button);

    expect(onClick).not.toHaveBeenCalled();
  });

  it("is disabled when isLoading is true", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(
      <Button isLoading onClick={onClick}>
        Save
      </Button>,
    );

    const button = screen.getByRole("button", { name: /save/i });

    expect(button).toBeDisabled();

    await user.click(button);

    expect(onClick).not.toHaveBeenCalled();
  });

  it("renders a spinner when loading", () => {
    render(<Button isLoading>Loading</Button>);

    const spinner = document.querySelector("svg");

    expect(spinner).toBeInTheDocument();
  });

  it("applies full width class when fullWidth is true", () => {
    render(<Button fullWidth>Wide</Button>);

    const button = screen.getByRole("button", { name: /wide/i });

    expect(button.className).toContain("w-full");
  });

  it("applies the correct variant class", () => {
    render(<Button variant="secondary">Variant</Button>);

    const button = screen.getByRole("button", { name: /variant/i });

    expect(button.className).toContain("bg-slate-800");
  });

  it("applies the correct size class", () => {
    render(<Button size="lg">Large</Button>);

    const button = screen.getByRole("button", { name: /large/i });

    expect(button.className).toContain("px-6");
  });

  it("applies custom className", () => {
    render(<Button className="custom-class">Styled</Button>);

    const button = screen.getByRole("button", { name: /styled/i });

    expect(button.className).toContain("custom-class");
  });
});
