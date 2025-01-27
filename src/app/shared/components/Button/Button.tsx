import { ReactNode } from "react";
import styles from "./styles/styles";

interface ButtonProps
  extends Omit<
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    "ref"
  > {
  label: string;
  children?: ReactNode;
  // onClick: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "danger";
  icon?: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  children,
  onClick,
  disabled = false,
  variant = "primary",
  icon,
  ...rest
}) => {
  const buttonStyles = {
    ...styles.button,
    ...(variant === "primary" && styles.primary),
    ...(variant === "secondary" && styles.secondary),
    ...(variant === "danger" && styles.danger),
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={buttonStyles}
      {...rest}
    >
      {icon && <span style={styles.icon}>{icon}</span>}
      {children}
      <span>{label}</span>
    </button>
  );
};
