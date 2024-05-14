import React from 'react';
import { FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <h2>Contact</h2>
      <div className="footer-content">
        <a href="mailto:ttll33333@naver.com" className="footer-link">
          <FaEnvelope className="footer-icon" /> ttll33333@naver.com
        </a>
        <a href="tel:010-4555-3910" className="footer-link">
          <FaPhone className="footer-icon" /> 010-4555-3910
        </a>
        <a href="https://github.com/jaeminjeon123?tab=repositories" target="_blank" rel="noopener noreferrer" className="footer-link">
          <FaGithub className="footer-icon" /> GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;