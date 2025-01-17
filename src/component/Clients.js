import React from "react";
import clients1 from "../assets/clients1.png";
import clients2 from "../assets/clients2.png";
import clients3 from "../assets/clients3.png";
import clients4 from "../assets/clients4.png";
import clients5 from "../assets/clients5.png";
import './Clients.css';
export const Clients = () => {
  const data = [clients1, clients2, clients3, clients4, clients5];
  return (
    <div className="clients">
      <div className="client-container">
        <div className="client-content">
          {data.map((clients, index) => (
            <div className="client" key={index}>
              <img src={clients} alt="client"></img>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
