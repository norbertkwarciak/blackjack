import React from 'react';
import Card  from '../Card';

import './Player.sass';

export default function Player({cards}) {
  return (
    <div className="Player">
      {cards.map((c, index) => (
        <Card card={c} key={index} />
      ))}
    </div>
  )
}
