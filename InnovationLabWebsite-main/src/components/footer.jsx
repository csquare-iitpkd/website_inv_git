import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaMapMarkerAlt, FaUser, FaThumbtack } from "react-icons/fa";
import { FaInstagram, FaYoutube, FaLinkedin, FaTwitter } from "react-icons/fa";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo-section">
          <h2 className="footer-logo">CSquare</h2>
          <p>Your Innovation Hub</p>
          {/* <FaUser className="footer-icon" />
          <Link to="/admin_login_page" className="footer-link">Admin Login</Link> */}
        </div>

        <div className="footer-links-section">
          <h3>Useful Links</h3>
          <ul>
            <li>
              <FaThumbtack className="footer-icon" />
              <a href="https://cfbs.iitpkd.ac.in"> Online Job Request</a>
            </li>
            <li>
              <FaEnvelope className="footer-icon" />
              <a href="mailto:csquare@iitpkd.ac.in"> csquare@iitpkd.ac.in</a>
            </li>
          </ul>
        </div>

        <div className="footer-contact-section">
          <h3>Contact Us</h3>
          <p>Indian Institute of Technology Palakkad,</p>
          <p>Nila Campus, Kanjikode West P.O,</p>
          <p>Palakkad, Kerala - 678623</p>

          {/* Clickable Location Icon */}
          <a 
            href="https://www.google.com/maps?q=Indian+Institute+of+Technology+Palakkad" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-map-link"
          >
            <FaMapMarkerAlt className="footer-icon" />
          </a>
        </div>
      </div>

      <div className="footer-social">
        <a href="mailto:csquare@iitpkd.ac.in"><FaEnvelope /></a>
        <a href="https://instagram.com"><FaInstagram /></a>
        <a href="https://youtube.com"><FaYoutube /></a>
        <a href="https://linkedin.com"><FaLinkedin /></a>
        <a href="https://twitter.com"><FaTwitter /></a>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Indian Institute of Technology Palakkad. All Rights Reserved. Managed by ananthu@iitpkd.ac.in </p>
      </div>
    </footer>
  );
};

export default Footer;
