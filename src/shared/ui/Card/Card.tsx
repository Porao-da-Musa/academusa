import type { ReactNode } from "react";

type CardProps = {
  readonly children: ReactNode;
  readonly className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`
        rounded-lg
        p-5
        m-2
        ${className}
      `}
      style={{ boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)" }}
    >
      {children}
    </div>
  );
}
