import React from "react";
import logo from "../assets/logo.png";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import './Footer.css';

export default function Footer() {
  const links = [
    {
      title: "About",
      data: ["Terms", "Legal"],
    },
    {
      title: "Services",
      data: ["Team Building", "Workshops", "Wellness"],
    },
    {
      title: "Contact",
      data: ["info.onethrive@gmail.com", "+91 88673 97613", "+91 79691 01774"],
    },
    {
      title: "Social",
      data: ["Twiiter", "Instagram"],
    },
  ];
  const socialLink = [
    <BsFacebook />,
    <BsTwitter />,
    <BsInstagram />,
    <FaTiktok />,
  ];
  return (
    <footer>
      <div className="upper">
        <div className="brand-container">
          <div className="brand">
            <img src={logo} alt="logo" />
          </div>
          <ul>
            {socialLink.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="links">
          {links.map(({ title, data }, index) => {
            return (
              <div className="link" key={index}>
                <h4>{title}</h4>
                <ul>
                  {data.map((link, index2) => (
                    <li key={index2}>{link}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      {/* <div className="lower">
        <p className="copy">&copy; Copyright 2025 OneThrive</p>
      </div> */}
    </footer>
  );
}