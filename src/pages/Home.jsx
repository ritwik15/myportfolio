// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import heroData from '../data/hero';

const Home = () => {
    console.log("✅ Home.jsx loaded");
  return (
    <div id="home">
     
      <Hero {...heroData} />
    </div>
  );
};

export default Home;
