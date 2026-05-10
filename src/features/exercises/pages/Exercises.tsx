import { useEffect, useMemo, useState } from "react";
import { ExerciseCard } from "../components/ExerciseCard";
import type { Exercise } from "../types/exercises.types";
import { fetchExercises } from "../mocks/exercises.mock";
import { ExerciseSearchBar } from "../components/ExerciseSearchBar";

export function Exercises() {
  const [exercises, setExercises] = useState<Exercise[]>([]);

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [selectedLevel, setSelectedLevel] = useState<string>("Todos");

  useEffect(() => {
    fetchExercises().then((data) => {
      setExercises(data);
    });
  }, []);

  const filteredExercises = useMemo(() => {
    return exercises.filter((exercise) => {
      const matchesLevel =
        selectedLevel === "Todos" || exercise.level === selectedLevel;

      const matchesCategory =
        selectedCategory === "Todos" || exercise.category === selectedCategory;

      const term = searchTerm.toLowerCase().trim();
      const matchesSearch =
        term === "" || exercise.name.toLowerCase().includes(term);
      // No figma ele pesquisa nas categorias, equipamentos e musculos,
      // mas eu não tenho certeza se esse é o comportamento correto,
      // por isso essa parte esta comentada
      // ||
      // exercise.category.toLowerCase().includes(term) ||
      // exercise.equipment.toLowerCase().includes(term) ||
      // exercise.muscles.some((muscle) => muscle.toLowerCase().includes(term))

      return matchesLevel && matchesCategory && matchesSearch;
    });
  }, [exercises, searchTerm, selectedCategory, selectedLevel]);

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
      <ExerciseSearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        selectedLevel={selectedLevel}
        onLevelChange={setSelectedLevel}
      />
      <div className="text-sm text-gray-600 py-4">
        Mostrando {filteredExercises.length} exercícios
      </div>
      {filteredExercises.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredExercises.map((exercise) => (
            <ExerciseCard key={exercise.id} {...exercise} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10 bg-white rounded-xl shadow-sm">
          <p className="text-gray-500 mt-2">
            Nenhum exercício encontrado com esses critérios
          </p>
        </div>
      )}
    </main>
  );
}
