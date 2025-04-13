import React from "react";
import home from "../assets/home.jpg";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-content">
          <h1 className="title">
            Because Work<br />Should Feel Like More.
          </h1>

          <p className="info">
            At <strong>OneThrive</strong>, we craft experiences that bring teams closer —
            through energizing activities, creative sessions, and wellness programs
            designed to build a happier, more connected workplace. From small
            startups to enterprise teams, we help people thrive, together.
          </p>

          <button className="signup-btn-home">Get Started</button>
        </div>

        <div className="image-container">
          <div className="image-content">
            <img src={home} alt="Team collaboration" className="home-image" />
          </div>

          <div className="ellipse-container">
            <div className="ellipse"></div>
            <div className="ellipse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
