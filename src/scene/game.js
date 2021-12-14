import CardHandler from '../helpers/CardHandler';
import spriteSheet from '../assets/spritesheet.png';
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
    const { createDeck } = this.CardHandler;
    console.log(createDeck());
  }
  update() {}
}
