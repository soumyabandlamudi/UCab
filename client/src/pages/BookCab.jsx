import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import api from "../services/api";
import "../styles/Booking.css";

function BookCab() {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    pickupLocation: "",
    dropLocation: "",
    bookingDate: "",
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
      const token = localStorage.getItem("token");

      await api.post(
        "/bookings/book",
        {
          car: id,
          ...formData,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Cab Booked Successfully!");
      window.location.href = "/my-bookings";
    } catch (error) {
      alert(error.response?.data?.message || "Booking Failed");
    }
  };

  return (
    <>
      <Navbar />

      <div className="booking-page">

        <div className="booking-header">
          <h1>Book Your Ride</h1>
          <p>
            Fill in your journey details and reserve your cab in just a few
            clicks.
          </p>
        </div>

        <div className="booking-container">

          <div className="booking-card">

            <form onSubmit={handleSubmit}>

              <div className="form-group">
                <label>Pickup Location</label>
                <input
                  type="text"
                  name="pickupLocation"
                  placeholder="Enter Pickup Location"
                  value={formData.pickupLocation}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Drop Location</label>
                <input
                  type="text"
                  name="dropLocation"
                  placeholder="Enter Drop Location"
                  value={formData.dropLocation}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Journey Date</label>
                <input
                  type="date"
                  name="bookingDate"
                  value={formData.bookingDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="booking-btn">
                Confirm Booking
              </button>

            </form>

          </div>

        </div>

      </div>
    </>
  );
}

export default BookCab;