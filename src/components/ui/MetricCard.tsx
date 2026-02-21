import React from "react";
import type { LucideIcon } from "lucide-react";
import { Card } from "./Card";

interface MetricCardProps {
  title: string;
  icon: LucideIcon;
  iconColor: string;
  value: string | number;
  bottomContent?: React.ReactNode;
  className?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  icon: Icon,
  iconColor,
  value,
  bottomContent,
  className = "",
}) => {
  return (
    <Card className={`bg-white ${className} m-0`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-600 text-sm">{title}</span>
        <Icon className={`h-5 w-5 ${iconColor}`} />
      </div>

      <div className="font-normal text-2xl text-black">{value}</div>
      

      {bottomContent && <div className="bottom">{bottomContent}</div>}
    </Card>
  );
};
