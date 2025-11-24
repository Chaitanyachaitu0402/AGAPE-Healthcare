import React from "react";
import Doctor from "../Assets/CEO.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
          Welcome to <b>AGAPE Health Care</b>, a trusted destination committed to providing safe, reliable, and accessible healthcare information to our community. Founded by <b>Vinod Maragani</b>, our mission is to guide individuals and families with accurate details about medicines, health products, and wellness essentials. We believe that informed decisions lead to better health outcomes, and we strive to offer clarity, support, and trust at every step.
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="Trusted Guidance"
          description="Get clear, reliable information about medicines, health essentials, and pharmacy services. We ensure every detail is accurate, easy to understand, and tailored to your needs."
        />

        <SolutionStep
          title="Health Support"
          description="We help you understand your health better with simple explanations, product details, and guidance, empowering you to make informed healthcare choices."
        />

        <SolutionStep
          title="Personalized Care"
          description="Led by Vinod Maragani, our pharmacy is dedicated to offering personalized attention, ensuring every visitor receives the support and knowledge they need for better well-being."
        />
      </div>
    </div>
  );
}

export default About;
