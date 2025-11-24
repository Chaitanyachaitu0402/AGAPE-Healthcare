import React, { useEffect, useState } from "react";
import Doctor from "../Assets/heroimage.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container" id="home">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">❤️ Health comes first</p>
          <h2 className="text-title">
            Quality Medicines, Caring Service You Can Rely On          </h2>
          <p className="text-descritpion">
            We provide trusted, high-quality medicines backed by friendly and reliable customer care.
          </p>
          <a href="#contact">
            <button
            className="text-appointment-btn"
            type="button"
          >
            <FontAwesomeIcon icon={faPhone} /> Contact Us
          </button>
          </a>
          <div className="text-stats">
            <div className="text-stats-container">
              <p>120k+</p>
              <p>Prescriptions Filled</p>
            </div>

            <div className="text-stats-container">
              <p>24/7</p>
              <p>Pharmacist Support</p>
            </div>

            <div className="text-stats-container">
              <p>100%</p>
              <p>Genuine Medicines</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={Doctor} alt="Doctor" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
