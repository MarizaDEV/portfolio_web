const styles = {
  button: {
    width: "150px",
    display: "flex",
    alignItens: "center",
    justifyContent: "center",
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "transform 0.3s, background 0.3s",
    margin: "30px",
  },
  primary: {
    backgroundColor: "#007BFF",
  },
  secondary: {
    background: "linear-gradient(90deg, #1E4468, #BE267A)",
  },
  danger: {
    backgroundColor: "#DC3545",
  },
  icon: {
    marginRight: "8px",
  },
  hover: {
    background: "linear-gradient(90deg, #BE267A, #1E4468)",
    transform: "scale(1.05)",
  },
  active: {
    transform: "scale(0.95)",
  },
};

export default styles;
