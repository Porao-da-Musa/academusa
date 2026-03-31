import { Funnel, Search } from "lucide-react";

const CATEGORIES = ["Todos", "Peito", "Costas", "Pernas", "Ombros", "Braços"];
const LEVELS = ["Todos", "Iniciante", "Intermediário", "Avançado"];

export function ExerciseSearchBar({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedLevel,
  onLevelChange,
}: {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedLevel: string;
  onLevelChange: (level: string) => void;
}) {
  const handleClearFilters = () => {
    onSearchChange("");
    onCategoryChange("Todos");
    onLevelChange("Todos");
  };

  const hasActiveFilters =
    searchTerm !== "" ||
    selectedCategory !== "Todos" ||
    selectedLevel !== "Todos";

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Buscar exercícios ou grupos musculares..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none  text-black"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <Funnel className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-600">Filtros:</span>
        </div>

        <select
          aria-label="Categoria"
          className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm bg-white text-black focus:outline-none "
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          {CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <select
          aria-label="Nível"
          className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm bg-white text-black focus:outline-none "
          value={selectedLevel}
          onChange={(e) => onLevelChange(e.target.value)}
        >
          {LEVELS.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>

        {hasActiveFilters && (
          <button
            onClick={handleClearFilters}
            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            Limpar tudo
          </button>
        )}
      </div>
    </div>
  );
}
