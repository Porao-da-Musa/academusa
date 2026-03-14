import { Ban, SquareCheck } from "lucide-react";
import type { Machine } from "../types/equipmentOccupation.mock";

interface EquipmentMachinesGridProps {
  machines: Machine[];
}

export const EquipmentMachinesGrid = ({
  machines,
}: EquipmentMachinesGridProps) => {
  return (
    <div
      id="equipment-machines-grid"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 bg-gray-800 rounded-b-lg"
      aria-labelledby="grid-title"
    >
      <h2 id="grid-title" className="sr-only">
        Detalhes das Máquinas
      </h2>
      {machines.map((machine) => (
        <div
          key={machine.id}
          id={`machine-${machine.id}`}
          className="flex items-center justify-between p-3 bg-gray-700 rounded-lg shadow"
          tabIndex={0}
          role="listitem"
          aria-label={`Máquina ${machine.name}, status: ${machine.status}`}
        >
          <span className="text-white font-medium">{machine.name}</span>
          {machine.status === "Disponível" ? (
            <SquareCheck
              className="w-5 h-5 text-green-500"
              data-testid="icon-disponivel"
              role="img"
              aria-label="Status: Disponível"
            />
          ) : (
            <Ban
              className="w-5 h-5 text-red-500"
              data-testid="icon-ocupado"
              role="img"
              aria-label="Status: Ocupado"
            />
          )}
        </div>
      ))}
    </div>
  );
};
