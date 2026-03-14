import React from "react";

export type ColorVariant = "red" | "blue" | "purple";

const iconVariants = {
  red: {
    bg: "bg-red-100",
    hover: "group-hover:bg-red-200",
    icon: "text-red-600",
  },
  blue: {
    bg: "bg-blue-100",
    hover: "group-hover:bg-blue-200",
    icon: "text-blue-600",
  },
  purple: {
    bg: "bg-purple-100",
    hover: "group-hover:bg-purple-200",
    icon: "text-purple-600",
  },
} as const;

type ActionCardProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  subtitle: string;
  variant?: ColorVariant;
};

export const ActionCard = ({
  icon: Icon,
  title,
  subtitle,
  variant = "red",
}: ActionCardProps) => {
  const styles = iconVariants[variant];

  return (
    <button
      className="
        bg-white rounded-xl p-6 shadow-sm hover:shadow-md
        transition-shadow text-left group
        flex flex-col items-start
      "
    >
      <div
        className={`
          w-12 h-12 rounded-lg flex items-center justify-center mb-4
          transition-colors
          ${styles.bg}
          ${styles.hover}
        `}
      >
        <Icon className={`w-6 h-6 ${styles.icon}`} />
      </div>

      <h3 className="text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{subtitle}</p>
    </button>
  );
};
