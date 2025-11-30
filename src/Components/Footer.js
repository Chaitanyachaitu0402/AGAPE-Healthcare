import React from "react";
import "../Styles/Footer.css";
import SubscribeNewsletter from "./SubscribeNewsletter";
import { Link } from "react-router-dom";
import logo from "../Assets/logowhite.png";


function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
            <p className="ft-title">
        <img src={logo} alt="" />
            </p>
            <p className="ft-description">
              Our goal is to help every visitor make informed decisions about medicines, health products, and overall well-being.
            </p>
          </div>

          {/* <SubscribeNewsletter /> */}
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Services</p>
          <ul className="ft-list-items">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#reviews">Reviews </a>
            </li>
            {/* <li>
              <a href="#services">Insights for doctors</a>
            </li> */}
          </ul>
        </div>

        <div className="ft-list" id="contact">
          <p className="ft-list-title">Talk To Us</p>
          <ul className="ft-list-items">
            <li>
              <a href="mailto:support@healthplus.com">agapehealthcaremedicals@gmail.com</a>
            </li>
            <li>
              <a href="tel:+91 98480 68679">+91 98480 68679</a>
            </li>
                        <li>
              <a href="tel:+91 98480 68679"> WhatsApp : +91 79975 54433</a>
            </li>

          </ul>
        </div>
        {/* <div className="ft-list">
          <p className="ft-list-title">Legal</p>
          <ul className="ft-list-items">
            <li>
              <Link to={"/legal"}>General Info</Link>
            </li>
            <li>
              <Link to={"/legal"}>Privacy Policy</Link>
            </li>
            <li>
              <Link to={"/legal"}>Terms of Services</Link>
            </li>
            <li>
              <Link to={"/legal"}>Consultations</Link>
            </li>
            <li>
              <Link to={"/legal"}>How it Works</Link>
            </li>
          </ul>
        </div> */}

          <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.8052422134556!2d80.84893712226724!3d16.7863624687634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3675cc20276713%3A0x9449d5e03d871355!2s13-166%2C%20Nuzividu%2C%20Andhra%20Pradesh%20521201!5e0!3m2!1sen!2sin!4v1763989946982!5m2!1sen!2sin" width="310" height="260"  style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

          </div>

      </div>

      <div className="ft-copyright">
        <p>© 2025 AGAPE Health care. All rights reserved.</p>

        <ul className="ft-social-links">
          {/* <li>
            <a
              href="https://linkedin.com/in/Alkaison/"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
              </svg>
            </a>
          </li> */}
          

          <li>
            <a
              href="https://www.facebook.com/Dr.VinodMaragani"
              title="FaceBook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 320 512"
              >
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/agapehealthcare.enterprises?igsh=M2F3cXJ3dWI5MGxi"
              title="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
<path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
</svg>            </a>
          </li>
        </ul>
      </div>
      <div class="footer-bar">
  <div class="footer-line">
    Made with
    <svg class="heart-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"/>
    </svg>
    by
    <a
      href="https://staffarc.in"
      target="_blank"
      rel="noopener noreferrer"
      class="brand-link"
    >
      <img
        src="https://www.staffarc.in/images/Staffarc-logo.png"
        alt="StaffArc logo"
        class="brand-logo"
      />
      <span>StaffArc</span>
    </a>
  </div>
</div>
    </div>
  );
}

export default Footer;
