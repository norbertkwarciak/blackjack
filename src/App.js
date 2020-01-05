import React, { useState, useEffect } from 'react';
import { getDeck }                    from './logic/deck';
import Player                         from './components/Player';

import './App.sass';

function App() {
  const [cards, setCards] = useState([]);
  const [result, setResult] = useState(0);
  // const [gameOver, endGame] = useState(false);

  const drawCards = () => {
    const results = getDeck()
      .sort(() => .5 - Math.random())
      .slice(0, 2);

    const points = results
      .map(c => c.value)
      .reduce((prev, curr) => prev + curr, 0);

    setCards(results);
    setResult(points);
  }

  const startGame = () => {
    drawCards();
  }
  const stand = () => {}

  useEffect(() => drawCards(), []);

  return (
    <div className="Blackjack">
      <header>
        <div className="container">
          <h2>Blackjack</h2>
        </div>
      </header>
      <div className="Blackjack__game">
        <div className="container">
          <div className="Blackjack__table">
            <Player cards={cards} />
            <div className="Blackjack__actions">
              <button className="btn" onClick={startGame}>New Game</button>
              <button className="btn" onClick={drawCards}>Hit</button>
              <button className="btn" onClick={stand}>Stand</button>
            </div>

            <span>Result: {result}</span>

            {/* {gameOver && <span>You lost!</span>} */}

            <Player cards={cards} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
