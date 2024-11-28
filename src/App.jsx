import './App.css';
import './assets/styles/stagingPage.css'
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import TrackRecord from './components/TrackRecord';
import TestimonialSlider from './components/TestimonialSlider';
import Commercial from './components/Commercial';
import StrataAdvantage from './components/StrateAdvantage';
import HowItWorks from './components/HowItWorks';


function App() {
  return (
    <div className="App">
     
      <HeroSection />
      <TrackRecord />
      <Commercial/>
      <StrataAdvantage/>
      <HowItWorks/>
      <TestimonialSlider/>
      
    </div>
  );
}

export default App;
