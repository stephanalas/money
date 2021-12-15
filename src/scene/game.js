import CardHandler from '../helpers/CardHandler';
import spriteSheet from '../assets/spritesheet.png';
import Player from '../classes/Player';
import ZoneHandler from '../helpers/ZoneHandler';
export default class Game extends Phaser.Scene {
  constructor() {
    super({
      key: 'Game',
    });
  }
  preload() {
    this.load.spritesheet('cards', spriteSheet, {
      frameWidth: 100,
      frameHeight: 140,
    });
  }
  create() {
    this.CardHandler = new CardHandler(this);
    this.ZoneHandler = new ZoneHandler(this);
    const player = new Player(this, { id: 1, name: 'Steph', isBot: false });
    const bot = new Player(this, { id: 2, name: 'bot', isBot: true });
    this.ZoneHandler.createPlayerAreas(player, bot);
    this.lobby = [player, bot];
    const { createDeck, dealCards, shuffleDeck } = this.CardHandler;
    this.deck = shuffleDeck(createDeck());
    dealCards(this.deck, player, false);
  }
  update() {}
}
