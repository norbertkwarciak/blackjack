import React from 'react';
import './Card.sass';

export default function Card({card}) {
  return (
    <div className="Card">
      {card.value}
      {card.suit}
    </div>
  )
}
