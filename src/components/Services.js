// src/components/Services.js

import React, { useEffect, useRef, useState } from "react";
import "../styles/Services.css"; // Ensure the CSS file is linked

function Services() {
  const services = [
    {
      name: "Individual Therapy",
      description: "One-on-one sessions tailored to your needs.",
      pic: "https://img.freepik.com/premium-vector/individual-session-with-psychologist-flat-color-mental-health-issues-treatment-psychological-therapy-2d-cartoon-faceless-characters-with-consulting-room-background_151150-2890.jpg",
    },
    {
      name: "Couples Therapy",
      description: "Helping couples navigate their relationship challenges.",
      pic: "https://img.freepik.com/free-vector/divorce-flat-composition-demonstrating-psychologist-working-with-unhappy-sad-couple-sitting-couch-with-their-backs-turned-away-vector-illustration_1284-69504.jpg",
    },
    {
      name: "Family Therapy",
      description: "Support for family communication and growth.",
      pic: "https://img.freepik.com/free-vector/family-therapy-concept-illustration_114360-20275.jpg?t=st=1730796001~exp=1730799601~hmac=ed100dd4f34d5186c741e7e9a1de1b8843fba83a1d07b830a2433d531de6ba50&w=900",
    },
    {
      name: "Child Therapy",
      description:
        "Specialized therapy for children to address emotional and behavioral challenges.",
      pic: "https://img.freepik.com/free-vector/child-psychologist-flat-concept-with-woman-playing-with-girl-toddler-vector-illustration_1284-77505.jpg",
    },
    {
      name: "Group Therapy",
      description:
        "A supportive environment where individuals can share and grow together.",
      pic: "https://img.freepik.com/free-vector/colored-cartoon-group-therapy-composition-with-teenagers-psychology-meetings-classroom_1284-27874.jpg?t=st=1730796158~exp=1730799758~hmac=767d1453d17df0f9c192c2c62ecf990803cfd2ad864ca25ee396fe8dece509c1&w=826",
    },
    {
      name: "Online Therapy",
      description:
        "Flexible online sessions that you can attend from anywhere.",
      pic: "https://img.freepik.com/free-photo/person-virtual-date_23-2149296025.jpg?ga=GA1.1.212455384.1730796004&semt=ais_hybrid",
    },
  ];

  const [visible, setVisible] = useState(Array(services.length).fill(false));
  const servicesRef = useRef([]);

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the container
      rootMargin: "0px",
      threshold: 0.4, // Trigger when at least 10% is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.dataset.index);
          setVisible((prev) => {
            const newVisible = [...prev];
            newVisible[index] = true; // Mark this item as visible
            return newVisible;
          });
          observer.unobserve(entry.target); // Stop observing this item
        }
      });
    }, options);

    // Observe each service card
    servicesRef.current.forEach((service) => {
      if (service) {
        observer.observe(service);
      }
    });

    return () => {
      // Cleanup observer on unmount
      observer.disconnect();
    };
  }, []);

  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="services-list">
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => (servicesRef.current[index] = el)} // Store reference to each service
            data-index={index} // Store index for reference
            className={`service ${
              visible[index]
                ? index % 2 === 0
                  ? "from-left"
                  : "from-right"
                : ""
            }`}
          >
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <img className="image" src={service.pic} alt={service.name} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
