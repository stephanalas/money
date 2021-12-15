import Card from '../classes/Card';

export default class CardHandler {
  constructor(scene) {
    this.scene = scene;
    this.createDeck = () => {
      const suits = ['diamonds', 'club', 'spade', 'heart', 'joker'];
      const rank = [
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'A',
        'J',
        'K',
        'Q',
      ];
      const deck = [];
      let points,
        cardsDealt,
        rankIdx = 0,
        suitIdx = 0;
      for (let i = 0; i < 54; i++) {
        // if big joker
        if (i === 52) {
          points = 400;
          cardsDealt = 11;
          let suit = 'joker';
          let rank = 'big';
          deck.push(
            new Card(scene, 100, 100, 'cards', {
              points,
              cardsDealt,
              suit,
              rank,
            })
          );
          continue;
        }
        if (i === 53) {
          points = 300;
          cardsDealt = 11;
          let suit = 'joker';
          let rank = 'litte';
          deck.push(
            new Card(scene, 100, 100, 'cards', {
              points,
              cardsDealt,
              suit,
              rank,
              frame: i,
            })
          );
          continue;
        }
        // if little joker
        if (rankIdx === rank.length) {
          rankIdx = 0;
          suitIdx++;
        }
        let currentRank = rank[rankIdx];
        let parsedRank = parseInt(currentRank);
        // if it is not a face card
        if (!isNaN(parsedRank)) {
          cardsDealt = parsedRank;
          if (parsedRank === 10) points = 10;
          else points = 5;
        } else {
          // if it is a face card check to see which face card it is
          if (['K', 'Q', 'J'].includes(currentRank)) {
            cardsDealt = 10;
            points = 10;
          } else {
            cardsDealt = 11;
            points = 100;
          }
        }
        deck.push(
          new Card(scene, 100, 100, 'cards', {
            rank: currentRank,
            cardsDealt,
            points,
            suit: suits[suitIdx],
            frame: i,
          })
        );
        rankIdx++;
      }
      return deck;
    };
    this.shuffleDeck = this.shuffleDeck.bind(this);
    this.dealCards = this.dealCards.bind(this);
  }
  shuffleDeck = (deck) => {
    return Phaser.Utils.Array.Shuffle(deck);
  };
  dealCards(deck, player, findMoney = false) {
    const card = deck.pop();
    const numberOfCards = card.cardsDealt;
    const hand = player.hand;
    const { height, width } = this.scene.game.scale;
    // hand.add(card);
    const playersCards = [card];
    for (let i = 0; i < numberOfCards; i++) {
      playersCards.push(deck.pop());
    }
    let x = width / 2,
      y = height / 2,
      offset = 0;
    const tweens = playersCards.map((card, idx) => {
      x += 32;
      card.setDepth(idx);
      return {
        x,
        y,
        targets: card,
        ease: 'Power2',
        completeDelay: !idx ? 500 : 0,
      };
    });

    this.scene.tweens.timeline({
      tweens,
      totalDuration: 3000,
    });
  }
  // tween to player dealt area || middle of game
  // pause to see cardDealt amount
  // onComplete add card to player hand group
  // deal more cards to player dealt area dependin gon cardsDealt amount
  // if its the last player
  // the last card decides money
}
