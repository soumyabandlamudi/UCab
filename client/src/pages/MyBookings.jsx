import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";
import "../styles/MyBookings.css";

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await api.get("/bookings/mybookings", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setBookings(res.data.bookings);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />

      <div className="mybooking-container">

        <h1>My Bookings</h1>

        {bookings.length === 0 ? (
          <h3>No Bookings Found</h3>
        ) : (
          bookings.map((booking) => (
            <div className="booking-card" key={booking._id}>

              <div>
                <h4>Booking Date</h4>
                <p>
                  {new Date(booking.bookingDate).toLocaleDateString()}
                </p>
              </div>

              <div>
                <h4>Pickup</h4>
                <p>{booking.pickupLocation}</p>
              </div>

              <div>
                <h4>Drop</h4>
                <p>{booking.dropLocation}</p>
              </div>

              <div>
                <h4>Car</h4>
                <p>{booking.car?.carName}</p>
              </div>

              <div>
                <h4>Brand</h4>
                <p>{booking.car?.brand}</p>
              </div>

              <div>
                <h4>Seats</h4>
                <p>{booking.car?.seats}</p>
              </div>

              <div>
                <h4>Price / Km</h4>
                <p>₹ {booking.car?.pricePerKm}</p>
              </div>

              <div>
                <h4>Status</h4>
                 <p
  className="status"
  style={{
    color: booking.status === "Booked" ? "green" : "red",
    fontWeight: "bold",
  }}
>
  {booking.status}
</p>
              </div>

            </div>
          ))
        )}

      </div>
    </>
  );
}

export default MyBookings;