import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";
import "../styles/AdminBookings.css";

function AdminBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem("adminToken");

      const res = await api.get("/bookings/all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setBookings(res.data.bookings);
    } catch (err) {
      console.log(err);
      alert("Unable to fetch bookings");
    }
  };

  return (
    <>
      <Navbar />

      <div className="admin-bookings">

        <h2>All Bookings</h2>

        <table>

          <thead>
            <tr>
              <th>User</th>
              <th>Car</th>
              <th>Pickup</th>
              <th>Drop</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {bookings.map((booking) => (

              <tr key={booking._id}>

                <td>{booking.user?.name || "N/A"}</td>

                <td>{booking.car?.carName || "N/A"}</td>

                <td>{booking.pickupLocation}</td>

                <td>{booking.dropLocation}</td>

                <td>
                  {new Date(
                    booking.bookingDate
                  ).toLocaleDateString()}
                </td>

                <td>{booking.status}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </>
  );
}

export default AdminBookings;