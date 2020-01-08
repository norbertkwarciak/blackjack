import React, { useState, useEffect } from 'react';
import { getDeck }                    from 'logic/deck';
import { getScore }                   from 'logic/score';
import { getWinner }                  from 'logic/winner';
import Button                         from 'components/Button/Button';
import Confirm                        from 'components/Confirm/Confirm';
import Modal                          from 'components/Modal/Modal';
import Player                         from 'components/Player/Player';

import './App.sass';

const BLACKJACK = 21;
const DEALER_LIMIT = 19;

function App() {
  const [deck, setDeck] = useState([]);
  const [player, setPlayer] = useState(null);
  const [dealer, setDealer] = useState(null);
  const [modalVisible, handleModal] = useState(false);
  const [message, setMessage] = useState('');
  const [gameOver, endGame] = useState(false);

  const getRandomCard = deck => {
    const randomIndex = Math.floor(Math.random() * deck.length); // losuję randomową kartę
    const randomCard = deck[randomIndex]; // zapisuję randomową kartę

    deck.splice(randomIndex, 1); // usuwam wylosowaną kartę z tablicy

    return { randomCard, updatedDeck: deck }; // zwracam wylosowaną kartę i zmodyfikowaną tablicę kart
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
      score: getScore(playerStartingHand)
    };
    const dealer = {
      cards: dealerStartingHand,
      score: getScore(dealerStartingHand)
    };

    return {
      updatedDeck: playerCard2.updatedDeck,
      player,
      dealer
    };
  }

  const startGame = () => {
    const cards = getDeck();
    const { updatedDeck, player, dealer } = dealCards(cards);

    setDeck(updatedDeck);
    setPlayer(player);
    setDealer(dealer);
    endGame(false);
    modalVisible && handleModal(false);
  }

  const hit = () => {
    const { randomCard, updatedDeck } = getRandomCard(deck);

    player.cards.push(randomCard);
    player.score = getScore(player.cards);

    if (player.score > BLACKJACK) {
      setPlayer(player);
      setMessage('You lost!');
      endGame(true);
    } else {
      setPlayer(player);
      setDeck(updatedDeck);
    }
  }

  const dealerHit = (dealer, deck) => {
    const { randomCard, updatedDeck } = getRandomCard(deck);

    dealer.cards.push(randomCard);
    dealer.score = getScore(dealer.cards);
    return { dealer, updatedDeck };
  }

  const stand = () => {
    if (!gameOver) {
      const randomCard = getRandomCard(deck);

      const d = dealer;
      d.cards.push(randomCard.randomCard);
      d.score = getScore(d.cards);

      while(dealer.score < DEALER_LIMIT) {
        const draw = dealerHit(d, deck);
        setDealer(draw.dealer);
        setDeck(draw.updatedDeck);
      }

      if(d.score > BLACKJACK) {
        setDeck(randomCard.updatedDeck);
        setDealer(d);
        endGame(true);
        setMessage('You win!');
      } else {
        const winner = getWinner(player, d);
        let msg;

        if (winner === 'dealer') {
          msg = 'Dealer is the winner';
        } else if (winner === 'player') {
          msg = 'You win!';
        } else {
          msg = 'Draw';
        }

        setDeck(randomCard.updatedDeck);
        setDealer(d);
        endGame(true);
        setMessage(msg);
      }
    } else {
      setMessage('Game over!');
    }
  }

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
