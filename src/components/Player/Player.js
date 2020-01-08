import React from 'react';
import Card  from 'components/Card/Card';

import './Player.sass';

export default function Player({player: {score, cards}, isDealer = false}) {
  console.log("TCL: Player -> cards", cards)
  return (
    <div className="Player">
      <span>{isDealer ? 'Dealer\'s hand:' : 'Player\'s hand:'} {score}</span>
      <div className="Player__cards">
        {cards.map((c, index) => (
          <Card card={c} key={index} />
        ))}
      </div>
    </div>
  )
}
