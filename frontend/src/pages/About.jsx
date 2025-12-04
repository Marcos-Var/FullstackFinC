import React from 'react';
import './Simple.css';

function About() {
  return (
    <div className="simple-page fade-in">
      <div className="container">
        <div className="simple-content">
          <h1>ℹ️ Sobre Nosotros</h1>
          <p className="lead">
            ProductStore es una aplicación moderna de pila completa construida con tecnologías de vanguardia.
          </p>

          <section className="content-section">
            <h2>Nuestra Misión</h2>
            <p>
              Nuestro objetivo es ofrecer una experiencia de gestión de productos fluida, con una interfaz hermosa e intuitiva y una arquitectura de backend robusta.
            </p>
          </section>

          <section className="content-section">
            <h2>Technology Stack</h2>
            <ul>
              <li><strong>Backend:</strong> Java Spring Boot with JWT authentication</li>
              <li><strong>Databases:</strong> PostgreSQL for products, MongoDB for audit logs</li>
              <li><strong>Frontend:</strong> React with modern hooks and routing</li>
              <li><strong>Containerization:</strong> Docker for easy deployment</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>Key Features</h2>
            <ul>
              <li>Complete CRUD operations for product management</li>
              <li>Secure JWT-based authentication</li>
              <li>Dual database architecture for optimal performance</li>
              <li>Responsive design that works on all devices</li>
              <li>Real-time updates and smooth animations</li>
              <li>Comprehensive audit logging</li>
            </ul>
          </section>

          <section className="content-section">
            <h2>Construido con ❤️</h2>
            <p>
              Este proyecto demuestra prácticas modernas de desarrollo full-stack,
               incluyendo el diseño de API RESTful, autenticación segura,
               optimización de bases de datos y un hermoso diseño de UI/UX.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;