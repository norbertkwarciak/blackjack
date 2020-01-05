import React from 'react';
import './Card.sass';

export default function Card({card}) {
  return (
    <div className="Card">
      <div className="Card__value">
        <span>{card.value}</span>
        <span>{card.suit}</span>
      </div>
      <div className="Card__suit">{card.suit}</div>
      <div className="Card__value Card__value--rotated">
        <span>{card.value}</span>
        <span>{card.suit}</span>
      </div>
    </div>
  )
}
