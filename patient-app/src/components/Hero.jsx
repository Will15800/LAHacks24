

import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <header className="hero">
      <h1>Welcome to RecovR!</h1>
      <p>Your personalized recovery guide.</p>
      <Link to="../pages/DoctorPage" className="hero-btn">Get Started</Link>
      
    </header>
  );
}
//FOR REFERENCE TO PATIENT PAGE: <Link to="../pages/PatientPage" className="hero-btn">Get Started</Link>
export default Hero;

