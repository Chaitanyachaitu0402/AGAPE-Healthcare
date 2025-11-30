import React from "react";
import "../Styles/Doctors.css";
import franchiseImg from "../Assets/franchise.png"; // <-- Add your image here

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Start your future with Agape</span>
        </h3>

        <p className="dt-description">
          Explore a rewarding franchise opportunity with Agape. Build your future 
          with strong business support, training guidance, and a trusted brand.
        </p>

        {/* Centered Franchise Image */}
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <img 
            src={franchiseImg} 
            alt="Franchise Opportunity" 
            style={{ 
              width: "100%", 
              maxWidth: "900px", 
              borderRadius: "12px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
            }} 
          />
        </div>
      </div>
    </div>
  );
}

export default Doctors;
