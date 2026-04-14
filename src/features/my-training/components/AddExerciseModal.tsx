"use client";

import { useState } from "react";
import type { WorkoutExercise } from "../types/training.types";

type Props = {
  onClose: () => void;
  onAddExercise: (
    exercise: Omit<WorkoutExercise, "id" | "order" | "status" | "alternatives">,
  ) => void;
};

export function AddExerciseModal({ onClose, onAddExercise }: Props) {
  const [name, setName] = useState("");
  const [equipment, setEquipment] = useState("");
  const [sets, setSets] = useState(3);
  const [reps, setReps] = useState(10);

  const isFormValid =
    name.trim().length > 0 &&
    equipment.trim().length > 0 &&
    sets > 0 &&
    reps > 0;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!isFormValid) {
      return;
    }

    onAddExercise({
      name: name.trim(),
      equipment: equipment.trim(),
      sets,
      reps,
    });

    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 text-black backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-2xl bg-gray-100 p-6">
        <h2 className="mb-6 text-xl font-medium text-gray-800">
          Adicionar Exercício
        </h2>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm text-gray-600">Nome do Exercício</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="ex: Agachamento Livre"
              className="mt-2 w-full rounded-lg border border-gray-300 bg-gray-100 px-4 py-3 outline-none focus:border-gray-400"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Equipamento</label>
            <input
              value={equipment}
              onChange={(e) => setEquipment(e.target.value)}
              placeholder="ex: Rack de Agachamento"
              className="mt-2 w-full rounded-lg border border-gray-300 bg-gray-100 px-4 py-3 outline-none focus:border-gray-400"
            />
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="text-sm text-gray-600">Séries</label>
              <input
                value={sets}
                onChange={(e) => setSets(Number(e.target.value))}
                type="number"
                min={1}
                className="mt-2 w-full rounded-lg border border-gray-300 bg-gray-100 px-4 py-3 outline-none"
              />
            </div>

            <div className="w-1/2">
              <label className="text-sm text-gray-600">Repetições</label>
              <input
                value={reps}
                onChange={(e) => setReps(Number(e.target.value))}
                type="number"
                min={1}
                className="mt-2 w-full rounded-lg border border-gray-300 bg-gray-100 px-4 py-3 outline-none"
              />
            </div>
          </div>

          <div className="mt-4 flex gap-4">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 rounded-xl border border-gray-300 bg-gray-100 py-3 text-gray-700 transition hover:bg-gray-200"
            >
              Cancelar
            </button>

            <button
              type="submit"
              disabled={!isFormValid}
              className="w-1/2 rounded-xl bg-blue-600 py-3 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-blue-600"
            >
              Adicionar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
