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
    <Card className={`bg-white h-[25vh] w-full flex flex-col ${className}`}>
      <div className="top flex">
        <p className="font-light text-start text-base text-gray-600">{title}</p>
        <Icon className={`h-6 w-6 ${iconColor} ml-auto`} />
      </div>

      <div className="mid flex-1">
        <p className="font-normal text-2xl mt-3 text-black">{value}</p>
      </div>

      {bottomContent && <div className="bottom">{bottomContent}</div>}
    </Card>
  );
};
