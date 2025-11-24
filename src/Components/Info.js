import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth, faBaby, faFlask, faPaintBrush, faPlus, faIdBadge, faCapsules, faBowlFood } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>Our Product Collection</span>
        </h3>
        <p className="info-description">
          We provide reliable, easy-to-understand information about our pharmacy, services, and healthcare support. From guidance on medications to details about our facilities and care offerings. We aim to ensure every visitor feels informed, supported, and confident about the care they receive at our pharmacy.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Surgical Items"
          description="Our surgical items include essential instruments and sterile supplies trusted by healthcare professionals."
          icon={faTruckMedical}
        />

        <InformationCard
          title="First Aid Kits"
          description="Our first aid kits include essential medical supplies designed to handle minor injuries and emergencies, ensuring you’re prepared at home, work, or on the go.."
          icon={faHeartPulse}
        />

        <InformationCard
          title="Baby Products"
          description="Explore our range of reliable baby essentials, crafted to keep your little one healthy and happy."
          icon={faBaby}
        />

        <InformationCard
          title="Lab Items"
          description="We offer a range of high-quality lab items designed to support reliable diagnostic procedures and medical evaluations."
          icon={faFlask}
        />

        <InformationCard
          title="Cosmetics"
          description="Explore our collection of high-quality cosmetics carefully chosen to keep your skin glowing, healthy, and protected."
          icon={faPaintBrush}
        />

        <InformationCard
          title="Personal Care"
          description="Our personal care products support your daily hygiene and wellness needs with trusted, high-quality options for all ages."
          icon={faPlus}
        />

        <InformationCard
          title="Health Supplements"
          description="Discover essential vitamins, minerals, and nutritional supplements designed to support your overall health and daily well-being."
          icon={faHeartPulse}
        />

        <InformationCard
          title="Branded Medicines"
          description="We provide authentic, high-quality branded medicines from trusted pharmaceutical companies to support safe and effective treatment."
          icon={faIdBadge}
        />

        <InformationCard
          title="Generic Medicines"
          description="We provide trusted generic medicines that deliver the same therapeutic benefits as brand-name products while helping you save on healthcare costs."
          icon={faCapsules}
        />

        <InformationCard
          title="Food"
          description="We offer a range of healthy and nutritious food products to support your overall well-being."
          icon={faBowlFood}
        />

      </div>
    </div>
  );
}

export default Info;
