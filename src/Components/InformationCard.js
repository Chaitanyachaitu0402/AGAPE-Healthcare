import React from "react";
import "../Styles/Info.css";

function InformationCard({ title, description, image }) {
  return (
    <div className="info-cards">
      {/* Medium-size image */}
      <img 
        src={image} 
        alt={title} 
        className="info-card-image"
        style={{
          width: "100px",
          height: "100px",
          objectFit: "cover",
          borderRadius: "10px",
          // marginBottom: "12px"
          marginTop: "25px"
        }}
      />

      <h4 className="info-card-title">{title}</h4>
      <p className="info-card-description">{description}</p>
    </div>
  );
}

export default InformationCard;
