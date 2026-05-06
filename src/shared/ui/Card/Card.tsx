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
        p-3 min-[400px]:p-5
        m-1 min-[400px]:m-2
        ${className}
      `}
      style={{ boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)" }}
    >
      {children}
    </div>
  );
}
