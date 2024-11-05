// src/components/HeroSection.js

import React from "react";
import "../styles/Hero.css";

function HeroSection() {
  return (
    <section className="hero">
      <h2>Your Path to Wellness Starts Here</h2>
      <p>
        "Professional therapy services to help you overcome challenges and
        achieve peace."
      </p>
      <p>
        "Discover personalized solutions, guided by experienced therapists, to
        help you build a healthier and happier life."
      </p>
      <button className="hero-button">
        <a href="#contact">Learn More</a>
      </button>
    </section>
  );
}

export default HeroSection;
