import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { EquipmentOccupationCard } from "./EquipmentOccupationCard";
import { equipmentMock } from "../mocks/equipment.mock";
import { EquipmentOccupationItem } from "./EquipmentOccupationItem";
import { EquipmentMachinesGrid } from "./EquipmentMachinesGrid";

describe("Ocupação de Equipamentos", () => {
  it("deve renderizar o card de ocupação de equipamentos", () => {
    render(<EquipmentOccupationCard />);

    const card = screen.getByRole("heading", {
      name: /Ocupação de Equipamentos/i,
    });
    expect(card).toBeInTheDocument();
  });

  it("deve renderizar os itens de ocupação de equipamentos", () => {
    render(<EquipmentOccupationCard />);

    equipmentMock.forEach((equipment) => {
      expect(screen.getByText(equipment.name)).toBeInTheDocument();
    });
  });

  it("deve exibir nome, fração de uso, minutos de espera e porcentagem no header do item", () => {
    const equipment = equipmentMock[1]; // Bicicleta Ergométrica: inUse 2/5, 10min espera, 40%
    render(
      <EquipmentOccupationItem
        equipment={equipment}
        isExpanded={false}
        onToggle={() => {}}
      />,
    );

    expect(screen.getByText(equipment.name)).toBeInTheDocument();
    expect(
      screen.getByText(`(${equipment.inUse}/${equipment.total} em uso)`),
    ).toBeInTheDocument();
    expect(
      screen.getByText(`~${equipment.estimatedWaitMinutes}min espera`),
    ).toBeInTheDocument();
    expect(screen.getAllByText("40%").length).toBeGreaterThan(0);
  });

  it("deve verificar se ao alterar o indice de ocupação, a porcentagem exibida é atualizada corretamente", () => {
    const equipment = equipmentMock[0]; // Esteira: inUse 0/10, 0min espera, 0%
    const { rerender } = render(
      <EquipmentOccupationItem
        equipment={equipment}
        isExpanded={false}
        onToggle={() => {}}
      />,
    );
    expect(screen.getAllByText("0%").length).toBeGreaterThan(0);

    rerender(
      <EquipmentOccupationItem
        equipment={{ ...equipment, inUse: 5, estimatedWaitMinutes: 10 }}
        isExpanded={false}
        onToggle={() => {}}
      />,
    );

    expect(screen.queryByText("(5/10 em uso)")).toBeInTheDocument();
    expect(screen.queryByText("~10min espera")).toBeInTheDocument();
    expect(screen.getAllByText("50%")).toHaveLength(2);
  });

  it("deve exibir porcentagem maior ao aumentar o inUse do equipamento", () => {
    const baseEquipment = {
      id: "1",
      name: "Esteira",
      total: 10,
      inUse: 2,
      estimatedWaitMinutes: 0,
      machines: [],
    };

    const { rerender } = render(
      <EquipmentOccupationItem
        equipment={baseEquipment}
        isExpanded={false}
        onToggle={() => {}}
      />,
    );
    expect(screen.getAllByText("20%").length).toBeGreaterThan(0);

    rerender(
      <EquipmentOccupationItem
        equipment={{ ...baseEquipment, inUse: 9 }}
        isExpanded={false}
        onToggle={() => {}}
      />,
    );
    expect(screen.getAllByText("90%").length).toBeGreaterThan(0);
  });

  it("deve exibir porcentagem menor ao diminuir o inUse do equipamento", () => {
    const baseEquipment = {
      id: "1",
      name: "Esteira",
      total: 10,
      inUse: 9,
      estimatedWaitMinutes: 0,
      machines: [],
    };

    const { rerender } = render(
      <EquipmentOccupationItem
        equipment={baseEquipment}
        isExpanded={false}
        onToggle={() => {}}
      />,
    );
    expect(screen.getAllByText("90%").length).toBeGreaterThan(0);

    rerender(
      <EquipmentOccupationItem
        equipment={{ ...baseEquipment, inUse: 2 }}
        isExpanded={false}
        onToggle={() => {}}
      />,
    );
    expect(screen.getAllByText("20%").length).toBeGreaterThan(0);
  });

  describe("exibição de detalhes", () => {
    it("deve exibir as máquinas do equipamento ao expandir", async () => {
      const user = userEvent.setup();
      render(<EquipmentOccupationCard />);

      const buttons = screen.getAllByRole("button", { name: /Ver detalhes/i });
      await user.click(buttons[0]);

      equipmentMock[0].machines.forEach((machine) => {
        expect(screen.getByText(machine.name)).toBeInTheDocument();
      });
    });

    it("deve expandir os detalhes ao clicar em Ver detalhes", async () => {
      const user = userEvent.setup();
      render(<EquipmentOccupationCard />);

      const buttons = screen.getAllByRole("button", { name: /Ver detalhes/i });
      await user.click(buttons[0]);

      expect(
        screen.getByRole("button", { name: /Ocultar detalhes/i }),
      ).toBeInTheDocument();
    });

    it("deve ocultar os detalhes ao clicar em Ocultar detalhes", async () => {
      const user = userEvent.setup();
      render(<EquipmentOccupationCard />);

      const verButton = screen.getAllByRole("button", {
        name: /Ver detalhes/i,
      });
      await user.click(verButton[0]);

      const ocultarButton = screen.getByRole("button", {
        name: /Ocultar detalhes/i,
      });
      await user.click(ocultarButton);

      expect(
        screen.queryByRole("button", { name: /Ocultar detalhes/i }),
      ).not.toBeInTheDocument();
    });

    it("deve fechar o primeiro item e abrir o segundo ao clicar em Ver detalhes do segundo", async () => {
      const user = userEvent.setup();
      render(<EquipmentOccupationCard />);

      const verButtons = screen.getAllByRole("button", {
        name: /Ver detalhes/i,
      });
      await user.click(verButtons[0]);

      expect(
        screen.getAllByRole("button", { name: /Ocultar detalhes/i }),
      ).toHaveLength(1);

      await user.click(verButtons[1]);

      expect(
        screen.getAllByRole("button", { name: /Ocultar detalhes/i }),
      ).toHaveLength(1);
      expect(
        screen.getAllByRole("button", { name: /Ver detalhes/i }),
      ).toHaveLength(equipmentMock.length - 1);
    });

    it("deve refletir a mudança de status de uma máquina na UI", async () => {
      const initialMachines = equipmentMock[0].machines;
      const { rerender } = render(
        <EquipmentMachinesGrid machines={initialMachines} />,
      );

      // 1. Verifica o estado inicial
      const initialOccupied = initialMachines.filter(
        (m) => m.status === "Ocupado",
      ).length;
      const initialFree = initialMachines.filter(
        (m) => m.status === "Disponível",
      ).length;

      expect(screen.getAllByTestId("icon-ocupado")).toHaveLength(
        initialOccupied,
      );
      expect(screen.getAllByTestId("icon-disponivel")).toHaveLength(
        initialFree,
      );

      // 2. Altera o status de uma máquina para "Disponível"
      const updatedMachines = JSON.parse(JSON.stringify(initialMachines));
      updatedMachines[0].status = "Disponível";

      rerender(<EquipmentMachinesGrid machines={updatedMachines} />);

      // 3. Verifica se a UI foi atualizada
      const finalOccupied = updatedMachines.filter(
        (m: { status: string }) => m.status === "Ocupado",
      ).length;
      const finalFree = updatedMachines.filter(
        (m: { status: string }) => m.status === "Disponível",
      ).length;

      expect(screen.queryAllByTestId("icon-ocupado")).toHaveLength(
        finalOccupied,
      );
      expect(screen.getAllByTestId("icon-disponivel")).toHaveLength(finalFree);
    });
  });
});
