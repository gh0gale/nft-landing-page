
import React, { useState } from "react";
import mockup from "../assets/mockup.png";
import logo from "../assets/logo.png";
import { BsFacebook, BsX, BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import "./Footer.css";

export const SignUp = () => {
  const [activeSection, setActiveSection] = useState("about");

  const socialLink = [
    { icon: <BsFacebook />, link: "#" },
    { icon: <BsInstagram />, link: "#" },
    { icon: <BsX />, link: "#" },
    { icon: <FaTiktok />, link: "#" },
  ];

  const sectionContent = {
    
    contact: (
      <p>
        Have questions? We’d love to hear from you! Reach out to us at{" "}
        <a href="mailto:support@.com">info.onethrive@gmail.com</a> or
        call us at +91 98175 10375.
      </p>
    ),
    privacy: (
      <p>
        Your privacy is important to us. We ensure all your data is encrypted,
        secure, and never shared with third parties. You control your
        preferences, and we respect your choices at all times.
      </p>
    ),
    terms: (
      <p>
        By using our platform, you agree to comply with our terms of service.
        This includes responsible usage, no unauthorized access, and compliance
        with applicable laws and regulations.
      </p>
    ),
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        {/* Left: Logo & Social */}
        <div className="brand-section">
          <img src={logo} alt="OneThrive Logo" className="brand-logo" />
          <p className="social-text">Let’s connect and grow together.</p>
          <ul className="social-icons">
            {socialLink.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Social link ${index + 1}`}
                >
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Image */}
        <div className="image-section">
          <img src={mockup} alt="Mockup" className="signup-image" />
        </div>
      </div>

      {/* Footer Section Navigation */}
      <footer className="footer">
        <div className="footer-links">
          
          <button onClick={() => setActiveSection("contact")}>Contact</button>
          <button onClick={() => setActiveSection("privacy")}>
            Privacy Policy
          </button>
          <button onClick={() => setActiveSection("terms")}>
            Terms of Service
          </button>
        </div>

        <div className="footer-content">{sectionContent[activeSection]}</div>

        <p className="footer-copy">
          &copy; {new Date().getFullYear()} OneThrive. All rights reserved.
        </p>
      </footer>
    </div>
  );
};
