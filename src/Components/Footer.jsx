import React from 'react';
import './Footer.css'; // Save the CSS in a separate file named Footer.css

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container-fluid">
        {/* Social media icons */}
        <div className="social-icons mt-4">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.twitch.tv/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitch"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
