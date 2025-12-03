import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ProductStore</h3>
            <p>Your one-stop shop for amazing products</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>📧 contact@productstore.com</p>
            <p>📱 +591 123 456 789</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 ProductStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;