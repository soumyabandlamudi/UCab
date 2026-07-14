import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import api from "../services/api";
import "../styles/Login.css";

function UserLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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
      const res = await api.post("/users/login", formData);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert(res.data.message);

      navigate("/user/home");

    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <>
      <Navbar />

      <div className="login-container">

        <div className="login-card">

          <h2>User Login</h2>

          <form onSubmit={handleSubmit}>

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
              Login
            </button>

          </form>

          <p>
            Don't have an account?
          </p>

          <Link to="/signup">
            <button className="signup-btn">
              Register
            </button>
          </Link>

        </div>

      </div>

    </>
  );
}

export default UserLogin;