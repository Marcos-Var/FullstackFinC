import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Header 
          title="Welcome to ProductStore" 
          subtitle="Your one-stop shop for amazing products"
        />
        <div className="container">
          <h2>Home Page</h2>
          <p>Frontend is working! 🎉</p>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;