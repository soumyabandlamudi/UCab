import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const [showDropdown, setShowDropdown] = useState(false);

  const token = localStorage.getItem("token");
  const adminToken = localStorage.getItem("adminToken");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("adminToken");

    alert("Logged Out Successfully");

    navigate("/");
  };

  return (
    <nav className="navbar">

      <div className="logo">
        <Link to="/">UCab</Link>
      </div>

      <ul className="nav-links">

         {!token && !adminToken && (
  <li>
    <Link to="/">Home</Link>
  </li>
)}

        {!token && !adminToken && (
          <li className="dropdown">
             <span
  className="dropdown-btn"
  onClick={() => setShowDropdown(!showDropdown)}
>
  Login ▼
</span>

            {showDropdown && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/login">
                    User Login
                  </Link>
                </li>

                <li>
                  <Link to="/admin/login">
                    Admin Login
                  </Link>
                </li>
              </ul>
            )}
          </li>
        )}

        {token && (
          <>
          <li>
  <Link to="/user/home">Home</Link>
</li>
            <li>
              <Link to="/cars">Book Cab</Link>
            </li>

            <li>
              <Link to="/my-bookings">
                My Bookings
              </Link>
            </li>

            <li>
              <button onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
        )}

        {adminToken && (
          <>
            <li>
              <Link to="/admin/dashboard">
                Dashboard
              </Link>
            </li>

            <li>
              <button onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
        )}

      </ul>
    </nav>
  );
}

export default Navbar;