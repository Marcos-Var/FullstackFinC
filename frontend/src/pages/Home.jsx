import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Home.css';

function Home() {
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="home-container fade-in">
      <div className="container">
        {/* Hero Section */}
        <section className="hero">
          <h1 className="hero-title">
            Welcome to <span className="gradient-text">ProductStore</span>
          </h1>
          <p className="hero-subtitle">
            Your one-stop shop for managing products with a modern, full-stack solution
          </p>
          
          {isAuthenticated() ? (
            <div className="hero-actions">
              <p className="welcome-message">👋 Welcome back, {user?.name}!</p>
              <Link to="/products" className="btn btn-primary btn-lg">
                View Products
              </Link>
            </div>
          ) : (
            <div className="hero-actions">
              <Link to="/register" className="btn btn-primary btn-lg">
                Get Started
              </Link>
              <Link to="/login" className="btn btn-secondary btn-lg">
                Login
              </Link>
            </div>
          )}
        </section>

        {/* Features Section */}
        <section className="features">
          <h2 className="section-title">Features</h2>
          <div className="grid grid-3">
            <div className="feature-card card">
              <div className="feature-icon">🚀</div>
              <h3>Fast & Secure</h3>
              <p>Built with Spring Boot and React for optimal performance and security</p>
            </div>
            
            <div className="feature-card card">
              <div className="feature-icon">💾</div>
              <h3>Dual Database</h3>
              <p>PostgreSQL for products and MongoDB for audit logs</p>
            </div>
            
            <div className="feature-card card">
              <div className="feature-icon">🔐</div>
              <h3>JWT Authentication</h3>
              <p>Secure authentication with JSON Web Tokens</p>
            </div>
            
            <div className="feature-card card">
              <div className="feature-icon">📱</div>
              <h3>Responsive Design</h3>
              <p>Works seamlessly on desktop, tablet, and mobile devices</p>
            </div>
            
            <div className="feature-card card">
              <div className="feature-icon">⚡</div>
              <h3>Real-time Updates</h3>
              <p>Instant updates and smooth user experience</p>
            </div>
            
            <div className="feature-card card">
              <div className="feature-icon">🎨</div>
              <h3>Modern UI</h3>
              <p>Beautiful, animated interface with smooth transitions</p>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="tech-stack">
          <h2 className="section-title">Tech Stack</h2>
          <div className="tech-grid">
            <div className="tech-item">
              <span className="tech-badge">Java Spring Boot</span>
            </div>
            <div className="tech-item">
              <span className="tech-badge">React</span>
            </div>
            <div className="tech-item">
              <span className="tech-badge">PostgreSQL</span>
            </div>
            <div className="tech-item">
              <span className="tech-badge">MongoDB</span>
            </div>
            <div className="tech-item">
              <span className="tech-badge">JWT</span>
            </div>
            <div className="tech-item">
              <span className="tech-badge">Docker</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;