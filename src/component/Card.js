import React from "react";
import "./Card.css"; // optional

export const Card = ({ image, title, series, price, tag, time }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-meta">{series}</p>
      <p className="card-meta">{price}</p>
      <p className="card-meta">{tag}</p>
      <p className="card-meta">{time}</p>
    </div>
  );
};
