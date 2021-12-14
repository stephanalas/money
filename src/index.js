import Phaser from 'phaser';
import Game from './scene/game';
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  backgroundColor: '#4e6a54',
  scale: {
    autoCenter: Phaser.Scale.CENTER_BOTH,
    mode: Phaser.Scale.FIT,
  },
  scene: [new Game()],
};

const game = new Phaser.Game(config);
