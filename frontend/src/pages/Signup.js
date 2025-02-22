import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
    navigate("/login"); // Redirect to login after signup
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" onChange={handleChange} style={styles.input} required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} style={styles.input} required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} style={styles.input} required />
          <button type="submit" style={styles.button}>Sign Up</button>
        </form>
        <p style={styles.text}>
          Already have an account? <span style={styles.link} onClick={() => navigate("/login")}>Login</span>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: { display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#f9f9f9" },
  card: { padding: "30px", borderRadius: "10px", background: "#fff", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", textAlign: "center" },
  title: { fontSize: "24px", marginBottom: "20px", fontWeight: "bold" },
  input: { width: "100%", padding: "12px", margin: "8px 0", borderRadius: "8px", border: "1px solid #ccc", fontSize: "16px" },
  button: { width: "100%", padding: "12px", borderRadius: "8px", background: "#ff7e5f", color: "#fff", fontSize: "18px", fontWeight: "bold", cursor: "pointer", border: "none", transition: "0.3s" },
  text: { marginTop: "10px", fontSize: "14px" },
  link: { color: "#ff7e5f", fontWeight: "bold", cursor: "pointer" }
};

export default Signup;
