import { Card } from "@shared/ui/Card";
import { TrendingUp } from "lucide-react";
import ExerciseBarComponent from "../components/exerciseBarComponent";
import { equipmentMock } from "../mocks/equipment.mock";

export function GymMap() {
  return (
    <div className="min-h-screen bg-grey-50 p-12">
      <h1 className="text-4xl font-bold text-black"></h1>
      <Card className="bg-white">
        <div className="flex items-center gap-2">
          <TrendingUp className="text-gray-700" />
          <p className="text-lg text-gray-800">Ocupação de Equipamentos</p>
        </div>
        {equipmentMock.map((equipment) => (
          <ExerciseBarComponent key={equipment.id} equipment={equipment} />
        ))}
      </Card>
    </div>
  );
}
