export default class Card extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, config) {
    super(scene, x, y, texture, config.frame);
    this.rank = config.rank;
    this.suit = config.suit;
    this.name = `${this.rank}_${this.suit}`;
    this.points = config.value;
    this.isMoney = false;
    this.cardsDealt = config.cardsDealt;
    this.setScale(1.2);
    this.setInteractive();
    this.showBack = () => {};

    scene.add.existing(this);
  }
}
