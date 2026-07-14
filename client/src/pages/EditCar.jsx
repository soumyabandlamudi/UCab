import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import api from "../services/api";
import "../styles/AddCar.css";

function EditCar() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    carName: "",
    brand: "",
    model: "",
    fuelType: "",
    seats: "",
    pricePerKm: "",
  });

  const [image, setImage] = useState(null);

  useEffect(() => {
    loadCar();
  }, []);

  const loadCar = async () => {
    try {
      const res = await api.get(`/cars/${id}`);

      setFormData(res.data.car);
    } catch (err) {
      alert("Unable to load car");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();

      data.append("carName", formData.carName);
      data.append("brand", formData.brand);
      data.append("model", formData.model);
      data.append("fuelType", formData.fuelType);
      data.append("seats", formData.seats);
      data.append("pricePerKm", formData.pricePerKm);

      if (image) {
        data.append("image", image);
      }

      await api.put(`/cars/${id}`, data);

      alert("Car Updated Successfully");

      navigate("/admin/cars");

    } catch (err) {
      alert(err.response?.data?.message || "Update Failed");
    }
  };

  return (
    <>
      <Navbar />

      <div className="add-car-container">

        <div className="add-car-card">

          <h2>Edit Car</h2>

          <form onSubmit={handleSubmit}>

            <input
              name="carName"
              value={formData.carName}
              onChange={handleChange}
            />

            <input
              name="brand"
              value={formData.brand}
              onChange={handleChange}
            />

            <input
              name="model"
              value={formData.model}
              onChange={handleChange}
            />

            <select
              name="fuelType"
              value={formData.fuelType}
              onChange={handleChange}
            >
              <option>Petrol</option>
              <option>Diesel</option>
              <option>Electric</option>
              <option>CNG</option>
            </select>

            <input
              type="number"
              name="seats"
              value={formData.seats}
              onChange={handleChange}
            />

            <input
              type="number"
              name="pricePerKm"
              value={formData.pricePerKm}
              onChange={handleChange}
            />

            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />

            <button type="submit">
              Update Car
            </button>

          </form>

        </div>

      </div>
    </>
  );
}

export default EditCar;