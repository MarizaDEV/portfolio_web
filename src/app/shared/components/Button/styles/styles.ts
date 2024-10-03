const styles = {
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    transition: "transform 0.3s, background 0.3s", // Transição suave
  },
  primary: {
    backgroundColor: "#007BFF",
  },
  secondary: {
    background: "linear-gradient(90deg, #1E4468, #BE267A)", // Degradê
  },
  danger: {
    backgroundColor: "#DC3545",
  },
  icon: {
    marginRight: "8px",
  },
  hover: {
    background: "linear-gradient(90deg, #BE267A, #1E4468)", // Degradê invertido
    transform: "scale(1.05)", // Aumenta ligeiramente o botão
  },
  active: {
    transform: "scale(0.95)", // Reduz ligeiramente o botão ao clicar
  },
};

export default styles;
