import { Card } from "@shared/ui/Card";
import { Plus } from "lucide-react";
import type { Exercise } from "../types/exercises.types";
import { getLevelStyles } from "../utils/exercises.utils";

export function ExerciseCard(exercise: Exercise) {
  const levelStyles = getLevelStyles(exercise.level);
  return (
    <Card>
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-gray-900">{exercise.name}</h3>
        <button className="text-blue-600 hover:text-blue-700">
          <Plus />
        </button>
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-500">Categoria:</span>
          <span className="text-gray-900">{exercise.category}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-500">Equipamento:</span>
          <span className="text-gray-900">{exercise.equipment}</span>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`px-2 py-1 rounded text-xs font-medium ${levelStyles.bg} ${levelStyles.text}`}>
            {exercise.level}
          </span>
        </div>
        <div className="flex flex-wrap gap-1 pt-1">
          {exercise.muscles.map((muscle) => (
            <span 
              key={`${exercise.id}-${muscle}`} 
              className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
            >
              {muscle}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}
