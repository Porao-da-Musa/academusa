import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Card } from "../../../shared/ui/Card/Card";

type MetricCardProps = {
  readonly title: string;
  readonly icon: LucideIcon;
  readonly iconColor: string;
  readonly value: string | number;
  readonly bottomContent?: ReactNode;
  readonly className?: string;
};

export function MetricCard({
  title,
  icon: Icon,
  iconColor,
  value,
  bottomContent,
  className = "",
}: MetricCardProps) {
  return (
    <Card className={`bg-white m-0 ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-600 text-sm">{title}</span>
        <Icon className={`h-5 w-5 ${iconColor}`} />
      </div>

      <div className="font-normal text-2xl text-black">{value}</div>

      {bottomContent ? <div>{bottomContent}</div> : null}
    </Card>
  );
}
