type Props = {
  hasOccupied: boolean;
};

export function WorkoutAlertBanner({ hasOccupied }: Props) {
  if (!hasOccupied) return null;

  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 rounded-xl border border-yellow-300 bg-yellow-50 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3">
            <span className="text-xl">⚠️</span>
            <div>
              <p className="font-medium text-yellow-900">
                Alguns equipamentos estão ocupados
              </p>
              <p className="mt-1 text-sm text-yellow-800">
                Sugerimos alternativas abaixo. Toque nelas para trocar os
                exercícios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
