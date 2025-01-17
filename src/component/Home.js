import React from "react";
import home from "../assets/home.png";
import './Home.css';


export const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-content">
          <p className="sub-title">LAUNCHING SOON</p>
          <h1 className="title">An NFT like no other</h1>
          <p className="info">
            Don't miss out on the release of our new NFT.
            Sign up below to recieve updates when we go live.
          </p>
          <button className="signup-btn">SignUp</button>
        </div>
        <div className="image-container">
          <div className="image-content">
            <img src={home} className=""></img>
          </div>
          <div className="ellipse-container">
            <div className="pink"></div>
            <div className="orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
