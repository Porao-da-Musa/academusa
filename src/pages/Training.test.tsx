import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";
import Training from "./Training";

test("Deve validar a renderização e interagir com a página", async () => {
  const user = userEvent.setup(); //AQUI RAPAZIADA, É SO PARA MOSTRAR QUE A BIBLIOTECA ESTÁ FUNCIONANDO, NÃO PRECISA INTERAGIR COM NADA AQUI, MAS SE QUISER TESTAR ALGUMA INTERAÇÃO, É SÓ USAR O USER PARA SIMULAR CLIQUES, DIGITAÇÕES, ETC.
  render(<Training />);

  const titulo = screen.getByRole("heading", { name: /bem-vindo/i });
  expect(titulo).toBeInTheDocument();
});
