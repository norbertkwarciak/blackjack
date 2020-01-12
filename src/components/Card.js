import React from 'react';
import cx    from 'classnames';

import './Card.sass';

const SUITS_MAP = {
  diamonds: '♦',
  hearts: '♥',
  clubs: '♣',
  spades: '♠'
}

const suitIcon = (icon, xl = false) => <div className={cx("Card__suit", {xl})}>{icon}</div>

export default function Card({card: {label, suit}}) {
  const red = suit === 'diamonds' || suit === 'hearts';
  return (
    <div className={cx("Card", {red})}>
      <div className="Card__value">
        <span>{label}</span>
        {suitIcon(SUITS_MAP[suit])}
      </div>
      {suitIcon(SUITS_MAP[suit], true)}
      <div className="Card__value Card__value--rotated">
        <span>{label}</span>
        {suitIcon(SUITS_MAP[suit])}
      </div>
    </div>
  )
}
