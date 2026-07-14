import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import api from "../services/api";
import "../styles/AddCar.css";

function AddCar() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    carName: "",
    brand: "",
    model: "",
    pricePerKm: "",
    seats: "",
    fuelType: "",
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("adminToken");

      const data = new FormData();

      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      data.append("image", image);

      await api.post("/cars/add", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Car Added Successfully");

      navigate("/admin/cars");
    } catch (err) {
      alert(err.response?.data?.message || "Failed to add car");
    }
  };

  return (
    <>
      <Navbar />

      <div className="add-car-container">
        <div className="add-car-card">
          <h2>Add New Car</h2>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="carName"
              placeholder="Car Name"
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="brand"
              placeholder="Brand"
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="model"
              placeholder="Model"
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="pricePerKm"
              placeholder="Price Per Km"
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="seats"
              placeholder="Seats"
              onChange={handleChange}
              required
            />

             <select
  name="fuelType"
  onChange={handleChange}
  required
  defaultValue=""
>
  <option value="" disabled>
    Select Fuel Type
  </option>
  <option value="Petrol">Petrol</option>
  <option value="Diesel">Diesel</option>
  <option value="Electric">Electric</option>
  <option value="CNG">CNG</option>
</select>

            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
              required
            />

            <button type="submit">
              Add Car
            </button>

          </form>
        </div>
      </div>
    </>
  );
}

export default AddCar;