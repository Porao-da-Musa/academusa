import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { EquipmentOccupationCard } from "./EquipmentOccupationCard";
import { equipmentMock } from "../mocks/equipment.mock";
import { EquipmentOccupationItem } from "./EquipmentOccupationItem";
import { EquipmentMachinesGrid } from "./EquipmentMachinesGrid";

describe("Equipment Occupation", () => {
  it("should render the equipment occupation card", () => {
    render(<EquipmentOccupationCard />);

    const card = screen.getByRole("heading", {
      name: /Ocupação de Equipamentos/i,
    });
    expect(card).toBeInTheDocument();
  });

  it("should render the equipment occupation items", () => {
    render(<EquipmentOccupationCard />);

    equipmentMock.forEach((equipment) => {
      expect(screen.getByText(equipment.name)).toBeInTheDocument();
    });
  });

  it("should display name, usage fraction, wait minutes and percentage in the item header", () => {
    const equipment = equipmentMock[1]; // Ergometric Bike: inUse 2/5, 10min wait, 40%
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

  it("should verify that when changing the occupation index, the displayed percentage is updated correctly", () => {
    const equipment = equipmentMock[0]; // Treadmill: inUse 0/10, 0min wait, 0%
    const { rerender } = render(
      <EquipmentOccupationItem
        equipment={equipment}
        isExpanded={false}
        onToggle={() => {}}
      />,
    );
    expect(screen.getAllByText("40%").length).toBeGreaterThan(0);

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

  it("should display higher percentage when increasing the equipment inUse", () => {
    const baseEquipment = {
      id: "1",
      name: "Treadmill",
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

  it("should display lower percentage when decreasing the equipment inUse", () => {
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

  describe("detail display", () => {
    it("should display the equipment machines when expanding", async () => {
      const user = userEvent.setup();
      render(<EquipmentOccupationCard />);

      const buttons = screen.getAllByRole("button", { name: /Ver detalhes/i });
      await user.click(buttons[0]);

      equipmentMock[0].machines.forEach((machine) => {
        expect(screen.getByText(machine.name)).toBeInTheDocument();
      });
    });

    it("should expand details when clicking View details", async () => {
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

    it("should close the first item and open the second when clicking View details on the second", async () => {
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

    it("should reflect the status change of a machine in the UI", async () => {
      const initialMachines = equipmentMock[0].machines;
      const { rerender } = render(
        <EquipmentMachinesGrid machines={initialMachines} />,
      );

      const initialOccupied = initialMachines.filter(
        (m) => m.status === "Ocupado",
      ).length;
      const initialFree = initialMachines.filter(
        (m) => m.status === "Disponível",
      ).length;

      expect(screen.getAllByTestId("icon-occupied")).toHaveLength(
        initialOccupied,
      );
      expect(screen.getAllByTestId("icon-available")).toHaveLength(initialFree);

      const updatedMachines = JSON.parse(JSON.stringify(initialMachines));
      updatedMachines[0].status = "Disponível";

      rerender(<EquipmentMachinesGrid machines={updatedMachines} />);

      const finalOccupied = updatedMachines.filter(
        (m: { status: string }) => m.status === "Ocupado",
      ).length;
      const finalFree = updatedMachines.filter(
        (m: { status: string }) => m.status === "Disponível",
      ).length;

      expect(screen.queryAllByTestId("icon-occupied")).toHaveLength(
        finalOccupied,
      );
      expect(screen.getAllByTestId("icon-available")).toHaveLength(finalFree);
    });
  });
});
