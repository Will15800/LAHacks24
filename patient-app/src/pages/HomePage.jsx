import React from 'react';
import Hero from '../components/Hero';
import IntroSection from '../components/IntroSection';
import Navbar from '../components/Navbar';
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <IntroSection />
      {/* Other content of the home page */}
    </div>
  );
};

export default HomePage;
