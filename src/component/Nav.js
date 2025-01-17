import React from "react";
import "./Nav.css";
import { useState } from "react";
import logo from "../assets/logo.png";

export const Nav = () => {
  return (
    <nav>
      <div className="brand-container">
        <div className="brand">
          <img className="brand-logo" src={logo}></img>
        </div>
        <div className="toggle-container">
          <div className="toggle"></div>
          <div className="mode-icon"></div>
        </div>
      </div>
      <div className="list-container">
        <ul className="list">
          <li>
            <a className="L" href="Features"> Features</a>
          </li>
          <li>
            <a className="L" href="/About">About</a>
          </li>
          <li>
            <a className="L" href="/Launch">Launch</a>
          </li>
          <li>
            <a className="SU" href="/SignUp">SignUp</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
