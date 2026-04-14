type Props = {
  onAddExercise: () => void;
};

export function EmptyWorkoutCard({ onAddExercise }: Props) {
  return (
    <div className="w-full rounded-2xl bg-gray-100 py-12 px-6 text-center">
      <p className="text-gray-500 text-base mb-6">
        Nenhum exercício neste plano de treino ainda
      </p>

      <button
        onClick={onAddExercise}
        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-5 py-3 rounded-xl transition"
      >
        <span className="text-lg leading-none">+</span>
        Adicionar Seu Primeiro Exercício
      </button>
    </div>
  );
}
