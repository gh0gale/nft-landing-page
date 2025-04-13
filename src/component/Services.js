import React from "react";
import "./Services.css";

const servicesList = [
  {
    title: "👥 Team Building Activities",
    desc: "Engaging games and challenges that promote trust, communication, and a fun team dynamic.",
  },
  {
    title: "💆🏻Wellness",
    desc: "Promoting healthy lifestyles and team bonding - stress management, therapy sessions, guided meditation.",
  },
  {
    title: "🏝️ Offsite Retreats",
    desc: "Curated getaways designed to relax, refresh, and realign your team outside the usual setting.",
  },
  {
    title: "🎨 Creative Workshops",
    desc: "From painting and storytelling to design sprints — let your team tap into their creative side.",
  },
  {
    title: "♻️ CSR and more!",
    desc: "Participate in meaningful corporate social responsibility initiatives and community impact programs.",
  },
  {
    title: "🏏 Sport",
    desc: "Cricket matches, yoga, fitness sessions - League tournaments, marathons,match screenings.",
  },

  
];

export const Services = () => {
  return (
    <section className="services-section">
      <h2 className="services-title">What We Offer</h2>
      <p className="services-subtitle">
        Handpicked experiences that inspire, energize, and unite teams.
      </p>

      <div className="services-grid">
        {servicesList.map((service, index) => (
          <div className="service-box" key={index}>
            <h3 className="service-heading">{service.title}</h3>
            <p className="service-text">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
