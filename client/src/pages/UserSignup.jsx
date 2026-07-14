import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import Navbar from "../components/Navbar";
import "../styles/Signup.css";

function UserSignup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/users/signup", formData);

      alert(res.data.message || "Registration Successful");

      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Signup Failed");
    }
  };

  return (
    <>
      <Navbar />

      <div className="signup-container">
        <div className="signup-card">

          <h2>Register</h2>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              name="email"
              onChange={handleChange}
              required
            />

            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              required
            />

            <button type="submit">
              Signup
            </button>

          </form>

          <p>
            Already have an account?
          </p>

          <Link to="/login">
            <button className="login-btn">
              Login
            </button>
          </Link>

        </div>
      </div>
    </>
  );
}

export default UserSignup;