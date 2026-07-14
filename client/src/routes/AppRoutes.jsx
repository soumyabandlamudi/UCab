import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import UserSignup from "../pages/UserSignup";
import UserLogin from "../pages/UserLogin";
import Cars from "../pages/Cars";
import BookCab from "../pages/BookCab";
import MyBookings from "../pages/MyBookings";

import AdminLogin from "../pages/AdminLogin";
import AdminDashboard from "../pages/AdminDashboard";
import AddCar from "../pages/AddCar";
import AdminCars from "../pages/AdminCars";
import EditCar from "../pages/EditCar";
import AdminUsers from "../pages/AdminUsers";
import AdminBookings from "../pages/AdminBookings";
import UserHome from "../pages/UserHome";
function AppRoutes() {
  return (
    <Routes>

      {/* User Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<UserSignup />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/book/:id" element={<BookCab />} />
      <Route path="/my-bookings" element={<MyBookings />} />

      {/* Admin Routes */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/add-car" element={<AddCar />} />
      <Route path="/admin/cars" element={<AdminCars />} />
      <Route path="/admin/edit-car/:id" element={<EditCar />} />
      <Route path="/admin/users" element={<AdminUsers />} />
      <Route path="/admin/bookings" element={<AdminBookings />} />
<Route path="/user/home" element={<UserHome />} />
    </Routes>
  );
}

export default AppRoutes;