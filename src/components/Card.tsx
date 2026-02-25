import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = "" }) => {
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
};
