import React from 'react';

function TourCard({ id, name, info, image, price, onRemove }) {
  return (
    <div className="tour-card">
      <img src={image} alt={name} className="tour-image" />
      <div className="tour-details">
        <h3>{name}</h3>
        <p>{info}</p>
        <p className="tour-price">Price: ${price}</p>
        <button onClick={() => onRemove(id)} className="not-interested-btn">
          Not Interested
        </button>
      </div>
    </div>
  );
}

export default TourCard;