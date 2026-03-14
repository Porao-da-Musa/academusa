import { useState } from "react";
import { Card } from "@shared/ui/Card";
import { TrendingUp } from "lucide-react";
import { EquipmentOccupationItem } from "./EquipmentOccupationItem";
import { equipmentMock } from "../mocks/equipment.mock";

export function EquipmentOccupationCard() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  function handleToggle(id: string) {
    setExpandedId((prev) => (prev === id ? null : id));
  }

  return (
    <Card className="bg-white">
      <div id="gym-map-header" className="flex items-center gap-2">
        <TrendingUp className="text-gray-700" />
        <h2 className="text-lg text-gray-800">Ocupação de Equipamentos</h2>
      </div>
      <div id="gym-map-list">
        {equipmentMock.map((equipment) => (
          <EquipmentOccupationItem
            key={equipment.id}
            equipment={equipment}
            isExpanded={expandedId === equipment.id}
            onToggle={() => handleToggle(equipment.id)}
          />
        ))}
      </div>
    </Card>
  );
}
