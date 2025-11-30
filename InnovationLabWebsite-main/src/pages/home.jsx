import React from 'react';
import ImageSlider from '../components/slider';
import HeroSection from '../components/herosection';
import NewsAndUpdates from '../components/news_updates';
import AnimatedPinDemo from '../components/card';
import '../styles/home.css';


const Home = () => {
  return (
    <div className="home-container bg-white"> 
      <HeroSection />

      <div 
        className="bg-scroll bg-cover bg-center py-16" 
        style={{ backgroundImage: `url("/assets/bc.jpg")` }}
      >
        <NewsAndUpdates />
        <ImageSlider />
      </div>
    </div>
  );
};

export default Home;