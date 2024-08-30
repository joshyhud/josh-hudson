import React from "react";
import "../assets/css/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Your Name. All rights reserved.</p>
      <div className="social-media">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
