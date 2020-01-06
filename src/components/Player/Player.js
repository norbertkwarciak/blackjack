import React from 'react';
import Card  from 'components/Card';

import './Player.sass';

export default function Player({player, isDealer = false}) {
  return (
    <div className="Player">
      <span>{isDealer ? 'Dealer\'s hand:' : 'Player\'s hand:'} {player.count}</span>
      <div className="Player__cards">
        {player.cards.map((c, index) => (
          <Card card={c} key={index} />
        ))}
      </div>
    </div>
  )
}
