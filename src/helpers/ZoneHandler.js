export default class ZoneHandler {
  constructor(scene) {
    this.createPlayerAreas = (player, opponent) => {
      const { width } = scene.game.scale;
      const r1 = scene.add.rectangle(width / 2, 980, 960, 180);
      r1.setStrokeStyle(3, 0xefc53f);
      player.area = r1;
      const r2 = scene.add.rectangle(width / 2, 100, 960, 180);
      r2.setStrokeStyle(3, 0xefc53f);
      opponent.area = r2;
    };
  }
}
