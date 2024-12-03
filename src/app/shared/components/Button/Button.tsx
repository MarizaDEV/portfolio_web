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
  const buttonStyles = {
    ...styles.button,
    ...(variant === "primary" && styles.primary),
    ...(variant === "secondary" && styles.secondary),
    ...(variant === "danger" && styles.danger),
  };

  return (
    <button onClick={onClick} disabled={disabled} style={buttonStyles}>
      {icon && <span style={styles.icon}>{icon}</span>}
      {label}
    </button>
  );
};
