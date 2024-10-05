import React, { useState } from "react";
import styles from "./styles/styles";

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "danger";
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  variant = "primary",
  icon,
}) => {
  const [isActive, setIsActive] = useState(false);

  const buttonStyles = {
    ...styles.button,
    ...(variant === "primary" && styles.primary),
    ...(variant === "secondary" && styles.secondary),
    ...(variant === "danger" && styles.danger),
    ...(isActive ? styles.active : {}),
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={buttonStyles}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
    >
      {icon && <span style={styles.icon}>{icon}</span>}
      {label}
    </button>
  );
};
