import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import './styles/global.css';

// Componente para rutas protegidas
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated() ? children : <Navigate to="/login" />;
}

function AppContent() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Rutas protegidas */}
        <Route 
          path="/products" 
          element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          } 
        />
        
        {/* Ruta por defecto */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;