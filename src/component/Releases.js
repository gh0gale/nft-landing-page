import React from "react";
import "./Releases.css";
import release1 from "../assets/release1.png";
import release2 from "../assets/release2.png";
import { Card } from "./Card";

export const Releases = () => {
  return (
    <div className="releases">
      <div className="releases-container-o">
        <div className="releases-content">
          <h2 className="releases-text"> Initial Release 4/11</h2>
          <p className="releases-description">
            We have released four limited edition NFTs early which can be bid on
            via <a href="#">OpenSea</a>
          </p>
          <p className="releases-description">
            There will be the only four of these NFTs we ever make, so be sure
            not to miss out!
          </p>
          <p className="releases-description">50% of proceeds go to charity.</p>
          <a href="/" className="releases-link">
            Check them out
          </a>
        </div>
        <div className="releases-img">
          <img  src={release1}></img>
        </div>
      </div>
      <div className="releases-container-g">
        <div className="releases-card">
          <Card className = 'realease-custom'
            image={release2}
            series="Gloop Series"
            title="Purple Man"
            price={3.95}
            tag="1094"
            time={2}
          />
        </div>
        <div className="releases-content">
          <h2 className="releases-text"> Initial Release 4/11</h2>
          <p className="releases-description">
            We have released four limited edition NFTs early which can be bid on
            via <a href="#">OpenSea</a>
          </p>
          <p className="releases-description">
            There will be the only four of these NFTs we ever make, so be sure
            not to miss out!
          </p>
          <p className="releases-description">50% of proceeds go to charity.</p>
          <a href="/" className="releases-link">
            Check them out
          </a>
        </div>
      </div>
    </div>
  );
};
