import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleMouseEnter = (buttonName) => {
    setHoveredButton(buttonName);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  const getButtonStyle = (buttonName) => {
    const baseStyle = styles.navBtn;
    const hoverStyle = buttonName === 'logout' ? styles.logoutBtnHover : styles.navBtnHover;

    // Apply hover style only if the button is hovered
    if (hoveredButton === buttonName) {
      return { ...baseStyle, ...hoverStyle };
    }

    return baseStyle;
  };

  return (
    <div>
      <nav style={styles.topNavbar}>
        <h1 
          style={styles.logo} 
          onClick={() => navigate("/")}>
          Recipe Hub <span style={styles.icon}>🍽️</span>
        </h1>
        <div style={styles.navButtons}>
          <button 
            style={getButtonStyle('about')} 
            onClick={() => navigate("/about")}
            onMouseEnter={() => handleMouseEnter('about')}
            onMouseLeave={handleMouseLeave}
          >
            About
          </button>

          {token ? (
            <>
              <button 
                style={getButtonStyle('home')} 
                onClick={() => navigate("/")}
                onMouseEnter={() => handleMouseEnter('home')}
                onMouseLeave={handleMouseLeave}
              >
                Home
              </button>
              <button 
                style={getButtonStyle('new-recipe')} 
                onClick={() => navigate("/create-recipe")}
                onMouseEnter={() => handleMouseEnter('new-recipe')}
                onMouseLeave={handleMouseLeave}
              >
                New Recipe?
              </button>
              <button 
                style={getButtonStyle('my-recipes')} 
                onClick={() => navigate("/Dashboard")}
                onMouseEnter={() => handleMouseEnter('my-recipes')}
                onMouseLeave={handleMouseLeave}
              >
                My Recipes
              </button>
              <button 
                style={getButtonStyle('logout')} 
                onClick={handleLogout}
                onMouseEnter={() => handleMouseEnter('logout')}
                onMouseLeave={handleMouseLeave}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button 
                style={getButtonStyle('login')} 
                onClick={() => navigate("/login")}
                onMouseEnter={() => handleMouseEnter('login')}
                onMouseLeave={handleMouseLeave}
              >
                Login
              </button>
              <button 
                style={getButtonStyle('signup')} 
                onClick={() => navigate("/signup")}
                onMouseEnter={() => handleMouseEnter('signup')}
                onMouseLeave={handleMouseLeave}
              >
                Signup
              </button>
            </>
          )}
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
    transition: "transform 0.3s ease-in-out",
  },
  icon: {
    width: "45px", 
    height: "70px",
  },
  navButtons: {
    display: "flex",
    gap: "12px",
    justifyContent: "flex-end",
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
    transition: "all 0.3s ease-in-out",
  },
  navBtnHover: {
    transform: "scale(1.1)",
    backgroundColor: "#ff7e5f",
    color: "#fff",
  },
  logoutBtn: {
    background: "#ff7e5f", // Set a solid background color
    color: "#fff",
    borderColor: "#ff7e5f",
    fontWeight: "bold",
    transition: "all 0.3s ease-in-out",
  },
  logoutBtnHover: {
    transform: "scale(1.1)",
    backgroundColor: "#ff4e4e", // Hover color
    color: "#fff",
  },
};

export default Navbar;
