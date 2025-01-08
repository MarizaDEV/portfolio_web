const styles = {
  button: {
    width: "150px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "transform 0.3s",
    margin: "25px 0",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
    animation: "gradientAnimation 10s linear infinite",
  },
  primary: {
    backgroundColor: "#BE267A",
  },
  secondary: {
    background: "linear-gradient(45deg, #1E4468, #BE267A, #721347, #1E4468)",
    backgroundSize: "400% 100%",
  },
  danger: {
    backgroundColor: "#DC3545",
  },
  icon: {
    marginRight: "8px",
  },
};

const animationStyles = `
@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = animationStyles;
document.head.appendChild(styleSheet);

export default styles;
