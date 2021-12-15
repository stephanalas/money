export default class Player {
  constructor(scene, config) {
    this.id = config.id;
    this.name = config.name;
    this.points = 0;
    this.hand = scene.add.group();
    this.isBot = config.isBot;
    this.playZone;
  }
}
