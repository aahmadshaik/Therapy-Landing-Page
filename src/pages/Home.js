// src/pages/Home.js

import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import About from "../components/About";
import Contact from "../components/Contact";

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <HeroSection />
      <Services />
      <TestimonialsCarousel />
      <About />
      <Contact />
    </div>
  );
}

export default Home;
