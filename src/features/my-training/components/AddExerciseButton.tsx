"use client";

type Props = {
  onOpenAddExercise: () => void;
};

export function AddExerciseButton({ onOpenAddExercise }: Props) {
  return (
    <button
      onClick={onOpenAddExercise}
      className="
    flex items-center gap-1.5 rounded-lg bg-blue-600  px-3 py-2 text-xs sm:px-5 sm:py-3 sm:text-sm font-normal text-white transition hover:bg-blue-700"
    >
      <span className="text-base sm:text-lg leading-none">+</span>
      Adicionar Exercício
    </button>
  );
}
