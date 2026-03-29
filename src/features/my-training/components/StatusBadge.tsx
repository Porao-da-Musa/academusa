import { CheckCircle, Clock } from "lucide-react";

export function StatusBadge({
  isAvailable,
}: {
  readonly isAvailable: boolean;
}) {
  if (isAvailable) {
    return (
      <>
        <CheckCircle size={14} className="text-green-600" />
        <span className="text-green-600">Disponível</span>
      </>
    );
  }

  return (
    <>
      <Clock size={14} className="text-red-600" />
      <span className="text-red-600">Ocupado</span>
    </>
  );
}
