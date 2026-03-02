import { Link } from "react-router-dom";
import type { EquipmentStatus } from "../types/equipmentOccupation.mock";
import {
  LOW_OCCUPANCY_THRESHOLD,
  HIGH_OCCUPANCY_THRESHOLD,
} from "../../home/constants/occupancy.constants";

interface ExerciseBarComponentProps {
  equipment: EquipmentStatus;
}

function getBarClasses(occupancyPercent: number): { bg: string; text: string } {
  if (occupancyPercent <= LOW_OCCUPANCY_THRESHOLD)
    return { bg: "bg-green-500 ", text: "text-green-500" };
  if (occupancyPercent <= HIGH_OCCUPANCY_THRESHOLD)
    return { bg: "bg-amber-400", text: "text-amber-400" };

  return { bg: "bg-red-500", text: "text-red-500" };
}

export default function ExerciseBarComponent({
  equipment,
}: ExerciseBarComponentProps) {
  const { name, total, inUse, estimatedWaitMinutes } = equipment;
  const occupancyPercent = total > 0 ? Math.round((inUse / total) * 100) : 0;
  const barClasses = getBarClasses(occupancyPercent);

  return (
    <div id="exercise-bar" className="m-4 rounded-lg bg-white">
      <div
        id="exercise-bar-header"
        className="flex items-center justify-between"
      >
        <div id="exercise-bar-info" className="flex items-center gap-2">
          <span className="font-semibold text-gray-800">{name}</span>
          <span className="text-sm text-gray-500">
            ({inUse}/{total} em uso)
          </span>
        </div>
        <div
          id="exercise-bar-stats"
          className="flex items-center gap-2 text-sm text-gray-600"
        >
          {estimatedWaitMinutes != null && (
            <span>~{estimatedWaitMinutes}min espera</span>
          )}
          <span
            className={`font-medium transition-colors duration-700 ease-in-out ${barClasses.text}`}
          >
            {occupancyPercent}%
          </span>
        </div>
      </div>

      {/* Barra de disponibilidade */}
      <div
        id="exercise-bar-track"
        className="relative w-full mt-2 h-9 bg-gray-200 rounded-lg"
      >
        <div
          id="exercise-bar-fill"
          className={`relative h-full rounded-l-lg transition-[width,background-color] duration-700 ease-in-out ${barClasses.bg}`}
          style={{ width: `${occupancyPercent}%` }}
        >
          <span className="absolute right-2 top-1/2 -translate-y-1/2 font-sm text-white text-sm whitespace-nowrap">
            {occupancyPercent}%
          </span>
        </div>
      </div>

      <Link
        to="/details"
        className="text-sm text-blue-500 hover:underline mt-1"
      >
        Ver detalhes
      </Link>
    </div>
  );
}
