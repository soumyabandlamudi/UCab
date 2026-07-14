import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import api from "../services/api";
import "../styles/AdminCars.css";

function AdminCars() {
  const [cars, setCars] =useState([]);

  useEffect(() => {
    loadCars();
  }, []);

  const loadCars = async () => {
    try {
      const res = await api.get("/cars");
      setCars(res.data.cars || res.data);
    } catch (err) {
      console.log(err);
      alert("Unable to fetch cars");
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Delete this car?");

    if (!confirmDelete) return;

    try {
      await api.delete(`/cars/${id}`);

      alert("Car Deleted Successfully");

      loadCars();
    } catch (err) {
      alert("Delete Failed");
    }
  };

  return (
    <>
      <Navbar />

      <div className="admin-cars">
        <h2>Manage Cars</h2>

        <table>

          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Model</th>
              <th>Fuel</th>
              <th>Seats</th>
              <th>Price/Km</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {cars.map((car) => (

              <tr key={car._id}>

                <td>
                   <img
  src={`http://localhost:5000/uploads/${car.image}`}
  alt={car.carName}
  width="90"
  onError={(e) => {
    e.target.src = "https://via.placeholder.com/90x60?text=No+Image";
  }}
/>
                </td>

                <td>{car.carName}</td>
                <td>{car.brand}</td>
                <td>{car.model}</td>
                <td>{car.fuelType}</td>
                <td>{car.seats}</td>
                <td>₹ {car.pricePerKm}</td>

                <td>

                  <Link to={`/admin/edit-car/${car._id}`}>
                    <button>Edit</button>
                  </Link>

                  <button
                    onClick={() => handleDelete(car._id)}
                    style={{ marginLeft: "10px" }}
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </>
  );
}

export default AdminCars;