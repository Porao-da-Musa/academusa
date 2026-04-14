"use client";

type Props = {
  onOpenAddExercise: () => void;
};

export function AddExerciseButton({ onOpenAddExercise }: Props) {
  return (
    <button
      onClick={onOpenAddExercise}
      className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-normal text-white transition hover:bg-blue-700"
    >
      <span className="text-lg leading-none">+</span>
      Adicionar Exercício
    </button>
  );
}
