import React from 'react';
import Header from '../components/header';
import ImageSlider from '../components/slider';
import HeroSection from '../components/herosection';
import NewsAndUpdates from '../components/news_updates';
import Footer from '../components/footer';
import AnimatedPinDemo from '../components/card';
import '../styles/home.css';


const Home = () => {
  return (
    <div className="home-container bg-white"> 
      <Header />
      <HeroSection />

      <div 
        className="bg-scroll bg-cover bg-center py-16" 
        style={{ backgroundImage: `url("/assets/bc.jpg")` }}
      >
        <NewsAndUpdates />
        <ImageSlider />
      </div>

      <Footer />
    </div>
  );
};

export default Home;