// src/components/About.js

import React from "react";
import "../styles/About.css";

function About() {
  return (
    <section id="about" className="about">
      <h2>About Us</h2>
      <p>
        Our team of compassionate professionals is dedicated to helping you find
        peace and healing through personalized therapy. With years of
        experience, we provide a safe and supportive space for you to explore
        your journey to wellness.
      </p>
      <p>
        We believe in a holistic approach that addresses mental, emotional, and
        physical well-being. By combining traditional methods with modern
        therapeutic techniques, we strive to guide you through challenges and
        help you reach your personal goals.
      </p>
      <h3>Why Choose Us?</h3>
      <ul className="about-features">
        <li>
          Experienced and licensed therapists focused on your unique needs
        </li>
        <li>
          Customized therapy plans to support your personal growth and healing
        </li>
        <li>Confidential, non-judgmental, and safe environment</li>
        <li>Flexible scheduling options to suit your lifestyle</li>
        <li>Continued support and resources beyond therapy sessions</li>
      </ul>
    </section>
  );
}

export default About;
