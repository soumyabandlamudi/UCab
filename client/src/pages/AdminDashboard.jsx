import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/AdminDashboard.css";

function AdminDashboard() {
  return (
    <>
      <Navbar />

      <div className="dashboard-page">

        <div className="dashboard-header">
          <h1>Admin Dashboard</h1>
          <p>
            Welcome back, Administrator. Manage users, cabs and bookings from
            one place.
          </p>
        </div>

        <div className="dashboard-grid">

          <Link to="/admin/add-car" className="dashboard-card">
            <div className="card-icon">🚗</div>
            <h3>Add Cab</h3>
            <p>Register a new cab into the system.</p>
          </Link>

          <Link to="/admin/cars" className="dashboard-card">
            <div className="card-icon">🚕</div>
            <h3>Manage Cabs</h3>
            <p>View, edit and delete available cabs.</p>
          </Link>

          <Link to="/admin/users" className="dashboard-card">
            <div className="card-icon">👤</div>
            <h3>Users</h3>
            <p>View all registered customers.</p>
          </Link>

          <Link to="/admin/bookings" className="dashboard-card">
            <div className="card-icon">📖</div>
            <h3>Bookings</h3>
            <p>Track and manage customer bookings.</p>
          </Link>

        </div>

      </div>
    </>
  );
}

export default AdminDashboard;