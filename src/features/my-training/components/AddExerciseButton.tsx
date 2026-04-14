"use client";

import { useState } from "react";
import { AddExerciseModal } from "./AddExerciseModal";
import type { WorkoutExercise } from "../types/training.types";

type Props = {
  onAddExercise: (
    exercise: Omit<WorkoutExercise, "id" | "order" | "status" | "alternatives">,
  ) => void;
};

export function AddExerciseButton({ onAddExercise }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-normal text-white hover:bg-blue-700 transition"
      >
        <span className="text-lg leading-none">+</span>
        Adicionar Exercício
      </button>

      {isOpen && (
        <AddExerciseModal
          onClose={() => setIsOpen(false)}
          onAddExercise={onAddExercise}
        />
      )}
    </>
  );
}
