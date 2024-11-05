// src/components/Navbar.js
import "../styles/Navbar.css";
import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="company-name">
        <h1>Therapy Center</h1>
      </div>
      <ul>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
