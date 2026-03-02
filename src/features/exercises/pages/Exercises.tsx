import { useEffect, useState } from "react";
import { ExerciseCard } from "../components/ExerciseCard";
import type { Exercise } from "../types/exercises.types";
import { fetchExercises } from "../mocks/exercises.mock";

export function Exercises() {
  const [exercises, setExercises] = useState<Exercise[]>([]);

  useEffect(() => {
    fetchExercises()
      .then((data) => {
        setExercises(data);
      })
  }, []);


  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl text-gray-900 mb-2">Banco de Exercícios</h1>
          <p className="text-gray-600">
            Encontre exercícios alternativos quando o equipamento estiver
            ocupado
          </p>
        </div>
      </div>
      <div className="text-sm text-gray-600 py-4">Mostrando {exercises.length} exercícios</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {exercises.map((exercise) => (
            <ExerciseCard key={exercise.id} {...exercise} />
          ))}
        </div>
    </main>
  );
}
