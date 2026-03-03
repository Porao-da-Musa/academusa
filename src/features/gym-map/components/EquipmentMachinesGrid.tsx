import { Ban, SquareCheck } from "lucide-react";

interface EquipmentMachinesGridProps {
  machines: {
    id: string;
    name: string;
    status: "Disponível" | "Ocupado";
    remainingMinutes?: number;
  }[];
}

export default function EquipmentMachinesGrid({
  machines,
}: EquipmentMachinesGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-2 bg-slate-50 p-4 rounded-md">
      {machines.map((machine) => {
        return (
          <div
            key={machine.id}
            className="flex items-center justify-between p-2 shadow-sm rounded-md bg-white text-slate-600 ring-1 ring-slate-300"
          >
            <span>{machine.name}</span>
            <span className="flex items-center gap-1">
              {machine.remainingMinutes && (
                <span className="sm:text-xs text-md text-slate-400">
                  {machine.remainingMinutes}min
                </span>
              )}
              {machine.status === "Disponível" ? (
                <SquareCheck className="w-4 h-4 text-green-600" />
              ) : (
                <Ban className="w-4 h-4 text-red-600" />
              )}
            </span>
          </div>
        );
      })}
    </div>
  );
}
