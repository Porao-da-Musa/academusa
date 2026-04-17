interface AvailabilityBarProps {
  occupancyPercent: number;
  bgClass: string;
}

export function AvailabilityBar({
  occupancyPercent,
  bgClass,
}: AvailabilityBarProps) {
  return (
    <div
      id="exercise-bar-track"
      className="relative w-full mt-2 h-9 bg-gray-200 rounded-lg"
    >
      <div
        id="exercise-bar-fill"
        className={`relative h-full rounded-l-lg transition-[width,background-color] duration-700 ease-in-out ${bgClass}`}
        style={{ width: `${occupancyPercent}%` }}
      >
        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-sm whitespace-nowrap">
          {occupancyPercent}%
        </span>
      </div>
    </div>
  );
}
