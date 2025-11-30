import React from "react";
import Doctor from "../Assets/logowhite.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck, faPhone
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/BookAppointment.css";

function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  return (
    <div className="ba-section">
      <div className="ba-image-content">
        <img src={Doctor} alt="Doctor Group" className="ba-image1" />
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Why Choose Our Pharmacy</span>
        </h3>
        <p className="ba-description">
          Discover why our pharmacy stands apart as a trusted destination for your healthcare and wellness needs. We are committed to providing reliable information, quality products, and customer-focused service — making your well-being our highest priority. With a foundation built by Vinod Maragani, we ensure trust, transparency, and exceptional care at every step.
        </p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#00B899" }} /> Genuine & Quality Products
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#00B899" }} /> Trusted Health Guidance
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#00B899" }} /> Customer-Focused Service
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#00B899" }} /> Safe & Reliable Pharmacy Support
        </p>

        <a href="#contact">
<button
          className="text-appointment-btn"
          type="button"
        >
          <FontAwesomeIcon icon={faPhone} /> Contact Us
        </button>
        </a>
      </div>
    </div>
  );
}

export default BookAppointment;
