import React from "react";
import "../styles/footer.css";
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>Contact Us</h3>
          <div className="address">
            <p>Megenagna Bole</p>
            <p>Ethiopia Addis Ababa</p>
            <p>Email: yeabesiraalemayehu@gmail.com</p>
            <p>Phone: +2519 00464155</p>
          </div>
        </div>
        <div className="footer-middle">
          <h3>Quick Links</h3>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#ab">About</a>
            <a href="#cont">Contact</a>
          </div>
        </div>
        <div className="footer-right">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a
              href="https://www.instagram.com/yeabesira_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
              <span> Instagram</span>
            </a>
            <a
              href="https://www.linkedin.com/in/yeabesira-alemayehu-b7a7422b8/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
              <span> LinkedIn</span>
            </a>
            <a
              href="https://web.facebook.com/profile.php?id=61566535806599"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
              <span> Facebook</span>
            </a>
            <a
              href="https://x.com/YeabesiraA99923"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
              <span> Twitter</span>
            </a>
          </div>
        </div>
        <div className="footer-end">
          <p>
            © {new Date().getFullYear()} Yeabesira Alemayehu. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
