// src/components/TestimonialsCarousel.js

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Testimonial.css";

const testimonialsData = [
  { name: "Alice Smith", feedback: "This therapy center has changed my life." },
  { name: "John Doe", feedback: "A great place with amazing professionals." },
  {
    name: "Sophie Lee",
    feedback: "The sessions here have helped me regain confidence.",
  },
];

function TestimonialsCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="testimonials" className="testimonials-carousel">
      <h2>Testimonials</h2>
      <Slider {...settings}>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <p>"{testimonial.feedback}"</p>
            <h4>- {testimonial.name}</h4>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default TestimonialsCarousel;
