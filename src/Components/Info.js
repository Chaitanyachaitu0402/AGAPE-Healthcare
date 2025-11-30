import React from "react";
import InformationCard from "./InformationCard";
import "../Styles/Info.css";

import surgicalImg from "../Assets/surgical.png";
import firstAidImg from "../Assets/firstaid.png";
import babyImg from "../Assets/baby.webp";
import labImg from "../Assets/lab.jpeg";
import cosmeticsImg from "../Assets/cosmetics.jpg";
import personalcareImg from "../Assets/personalcare.jpg";
import supplementsImg from "../Assets/pills.png";
import brandedImg from "../Assets/branded.jpg";
import genericImg from "../Assets/generic.jpg";
import foodImg from "../Assets/food.jpg";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>Our Product Collection</span>
        </h3>

        <p className="info-description">
          We provide reliable, easy-to-understand information about our pharmacy, services, and healthcare support. 
          From guidance on medications to details about our facilities and care offerings. 
          We aim to ensure every visitor feels informed, supported, and confident about the care they receive at our pharmacy.
        </p>
      </div>

      <div className="info-cards-content">

        <InformationCard
          title="Surgical Items"
          description="Our surgical items include essential instruments and sterile supplies trusted by healthcare professionals."
          image={surgicalImg}
        />

        <InformationCard
          title="First Aid Kits"
          description="Our first aid kits include essential medical supplies designed to handle minor injuries at home or work."
          image={firstAidImg}
        />

        <InformationCard
          title="Baby Products"
          description="Explore our range of reliable baby essentials, crafted to keep your little one healthy and happy."
          image={babyImg}
        />

        <InformationCard
          title="Lab Items"
          description="We offer a range of high-quality lab items designed to support reliable diagnostic procedures."
          image={labImg}
        />

        <InformationCard
          title="Cosmetics"
          description="Explore our collection of high-quality cosmetics carefully chosen to keep your skin glowing and healthy."
          image={cosmeticsImg}
        />

        <InformationCard
          title="Women health & hygiene"
          description="Our Women health & hygiene products support your daily hygiene and wellness needs with trusted options for all ages."
          image={personalcareImg}
        />

        <InformationCard
          title="Health Supplements"
          description="Discover essential vitamins, minerals, and supplements designed to support your daily well-being."
          image={supplementsImg}
        />

        <InformationCard
          title="Branded Medicines"
          description="We provide authentic branded medicines from trusted pharmaceutical companies."
          image={brandedImg}
        />

        <InformationCard
          title="Generic Medicines"
          description="We offer trusted generic medicines that deliver the same therapeutic benefits at lower costs."
          image={genericImg}
        />

        <InformationCard
          title="Food"
          description="We offer nutritious food products that support your overall health and well-being."
          image={foodImg}
        />

      </div>
    </div>
  );
}

export default Info;
