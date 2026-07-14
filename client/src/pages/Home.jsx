import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import cab from "../assets/images/taxi.avif";
import "../styles/Home.css";

function Home() {
  return (
    <>
      <Navbar />

      <section className="home">

        <div className="home-left">

          <h1>Book Your Ride with  UCab</h1>

          <p>
            Travel safely and comfortably with UCab. Choose from a wide range
            of cabs at affordable prices and enjoy a fast, secure, and
            hassle-free booking experience anytime, anywhere.
          </p>

          <Link to="/cars">
            <button className="home-btn">
              Explore Services
            </button>
          </Link>

        </div>

        <div className="home-right">

          <img src={cab} alt="UCab Taxi" />

        </div>

      </section>
    </>
  );
}

export default Home;