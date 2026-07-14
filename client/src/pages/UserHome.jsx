import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import userImage from "../assets/images/user.png";
import "../styles/UserHome.css";

function UserHome() {

  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  return (
    <>
      <Navbar />

      <section className="hero">

        <div className="hero-left">

          <h1>Welcome {user.name || "User"} 👋</h1>

          <h2>Ride Smarter with UCab</h2>

          <p>
            Experience safe, affordable and comfortable rides.
            Book your favourite cab in just a few clicks and
            enjoy a hassle-free journey with UCab.
          </p>

          <Link to="/cars">
            <button className="hero-btn">
              Book a Cab
            </button>
          </Link>

        </div>

        <div className="hero-right">

          <img src={userImage} alt="UCab" />

        </div>

      </section>

      <section className="services">

        <h2>Why Choose UCab?</h2>

        <div className="cards">

          <div className="card">

            <h3>🚖 Easy Booking</h3>

            <p>
              Book your cab quickly with a simple and
              user-friendly booking process.
            </p>

          </div>

          <div className="card">

            <h3>🛡 Safe Journey</h3>

            <p>
              Verified drivers and well-maintained vehicles
              ensure a safe and secure ride.
            </p>

          </div>

          <div className="card">

            <h3>💰 Affordable Prices</h3>

            <p>
              Enjoy transparent pricing with comfortable
              rides at budget-friendly rates.
            </p>

          </div>

        </div>

      </section>

      <footer>

        <h2>UCab</h2>

        <p>
          Safe • Fast • Reliable
        </p>

        <p>
          📞 +91 9876543210
        </p>

        <p>
          📧 support@ucab.com
        </p>

        <p>
          © 2026 UCab. All Rights Reserved.
        </p>

      </footer>

    </>
  );
}

export default UserHome;