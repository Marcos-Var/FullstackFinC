import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <span className="logo-icon">🛒</span>
            <span className="logo-text">ProductStore</span>
          </Link>

          {/* Desktop Menu */}
          <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
            <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/products" className="nav-link" onClick={() => setIsOpen(false)}>
              Products
            </Link>
            <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="navbar-auth">
            {token ? (
              <>
                <span className="user-name">👋 {user.name}</span>
                <button onClick={handleLogout} className="btn btn-primary">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-primary">
                  Login
                </Link>
                <Link to="/register" className="btn btn-secondary">
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="navbar-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${isOpen ? 'active' : ''}`}></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;