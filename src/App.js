import React, { useState, useEffect } from 'react';
import { getDeck }                    from 'logic/deck';
import Button                         from 'components/Button';
import Confirm                        from 'components/Confirm';
import Modal                          from 'components/Modal';
import Player                         from 'components/Player';

import './App.sass';

const BLACKJACK = 21;

function App() {
  const [deck, setDeck] = useState([]);
  const [player, setPlayer] = useState(null);
  const [dealer, setDealer] = useState(null);
  const [modalVisible, handleModal] = useState(false);
  const [message, setMessage] = useState('');
  const [gameOver, endGame] = useState(false);

  const getRandomCard = () => {
    const updatedDeck = getDeck(); // tablica kart
    const randomIndex = Math.floor(Math.random() * updatedDeck.length); // losuję randomową kartę
    const randomCard = updatedDeck[randomIndex]; // zapisuję randomową kartę

    updatedDeck.splice(randomIndex, 1); // usuwam wylosowaną kartę z tablicy

    return { randomCard, updatedDeck }; // zwracam wylosowaną kartę i zmodyfikowaną tablicę kart
  }

  const getCount = cards => {
    const count = cards
      .map(c => c.value)
      .reduce((prev, curr) => prev + curr, 0);

    return count;
  }

  const dealCards = deck => {
    const playerCard1 = getRandomCard(deck);
    const dealerCard1 = getRandomCard(playerCard1.updatedDeck);
    const playerCard2 = getRandomCard(dealerCard1.updatedDeck);
    const dealerCard2 = getRandomCard(playerCard2.updatedDeck);

    const playerStartingHand = [playerCard1.randomCard, playerCard2.randomCard];
    const dealerStartingHand = [dealerCard1.randomCard, dealerCard2.randomCard];

    const player = {
      cards: playerStartingHand,
      count: getCount(playerStartingHand)
    };
    const dealer = {
      cards: dealerStartingHand,
      count: getCount(dealerStartingHand)
    };

    return {
      updatedDeck: playerCard2.updatedDeck,
      player,
      dealer
    };
  }

  const startGame = () => {
    dealCards(deck);
    const { updatedDeck, player, dealer } = dealCards(deck);

    setDeck(updatedDeck);
    setPlayer(player);
    setDealer(dealer);
    endGame(false);
    modalVisible && handleModal(false);
  }

  const hit = () => {
    const { randomCard, updatedDeck } = getRandomCard(deck);

    player.cards.push(randomCard);
    player.count = getCount(player.cards);

    if (player.count > BLACKJACK) {
      setPlayer(player);
      setMessage('You lost!');
      endGame(true);
    } else {
      setDeck(updatedDeck);
      setPlayer(player);
    }
  }

  const stand = () => {}

  useEffect(() => startGame(), []);

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
            {gameOver && <p className="Blackjack__message">{message}</p>}
            {player && <Player player={player} />}

            <div className="Blackjack__actions">
              <Button
                action={gameOver ? startGame : () => handleModal(true)}
                text="New Game"
              />
              <Button
                className={{disabled: gameOver}}
                action={hit}
                disabled={gameOver}
                text="Hit"
              />
              <Button
                className={{disabled: gameOver}}
                action={stand}
                disabled={gameOver}
                text="Stand"
              />
            </div>

            {dealer &&
              <Player
                player={dealer}
                isDealer
              />
            }
          </div>
        </div>
      </div>

      {modalVisible &&
        <Modal
          isOpen={modalVisible}
          close={() => handleModal(false)}
        >
          <Confirm
            question="Would you like to start a new game?"
            action={startGame}
            close={() => handleModal(false)}
          />
        </Modal>
      }
    </div>
  );
}

export default App;
