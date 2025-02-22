import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Top Navbar */}
      <nav style={styles.topNavbar}>
        <h1 style={styles.logo} onClick={() => navigate("/")}> 
          Recipe Hub <span style={styles.icon}>🍽️</span>
        </h1>
        <div style={styles.navButtons}>
          <button style={styles.navBtn} onClick={() => navigate("/about")}>About</button>
          <button style={styles.navBtn} onClick={() => navigate("/login")}>Login</button>
          <button style={styles.navBtn} onClick={() => navigate("/signup")}>Signup</button>
        </div>
      </nav>
    </div>
  );
};

const styles = {
  topNavbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 90px", 
    height: "70px", 
    background: "linear-gradient(to right, #d8e9c8, #f5d0db)", 
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  logo: {
    fontSize: "50px",
    fontWeight: "bold",
    fontStyle: "italic", 
    fontFamily: "'Times New Roman', serif", 
    color: "#222", 
    cursor: "pointer",
    textShadow: "3px 3px 5px rgba(0, 0, 0, 0.5)", 
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  icon: {
    width: "45px", 
    height: "70px",
  },
  navButtons: {
    display: "flex",
    gap: "12px",
  },
  navBtn: {
    background: "#fff",
    color: "#ff7e5f",
    padding: "10px 18px",
    fontSize: "16px",
    border: "1px solid #ff7e5f",
    borderRadius: "20px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s ease",
  },
};

export default Navbar;