import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";
import "../styles/Cars.css";

function Cars() {
const navigate = useNavigate();
  const [cars, setCars] = useState([]);

  const fetchCars = async () => {

    try {

      const res = await api.get("/cars");

      setCars(res.data.cars);

    } catch (error) {

      console.log(error);

      alert("Failed to fetch cars");

    }

  };

  useEffect(() => {

    fetchCars();

  }, []);

  return (

    <>
      <Navbar />

      <div className="cars-container">

        <h1>Available Cars</h1>

        <div className="cars-grid">

          {cars.map((car) => (

            <div className="car-card" key={car._id}>

              <img
                src={`http://localhost:5000/uploads/${car.image}`}
                alt={car.carName}
              />

              <h2>{car.carName}</h2>

              <p>

                <strong>Brand :</strong>

                {car.brand}

              </p>

              <p>

                <strong>Model :</strong>

                {car.model}

              </p>

              <p>

                <strong>Fuel :</strong>

                {car.fuelType}

              </p>

              <p>

                <strong>Seats :</strong>

                {car.seats}

              </p>

              <p>

                <strong>Price :</strong>

                ₹{car.pricePerKm} / KM

              </p>

              <p>

                <strong>Status :</strong>

                {car.available ? "Available" : "Not Available"}

              </p>

               <button onClick={() => navigate(`/book/${car._id}`)}>
    Book Now
</button>

            </div>

          ))}

        </div>

      </div>

    </>

  );

}

export default Cars;