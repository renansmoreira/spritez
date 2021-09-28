import { Sprite } from '../src/sprite';
import { SpritesFactory } from './spritesFactory';

class SampleGame {
  private _canvas: HTMLCanvasElement;
  private _ghoul: Sprite;
  private _redHood: Sprite;
  private _trees: Sprite[];

  constructor(
    private _spritesFactory: SpritesFactory = new SpritesFactory()
  ) {
    this._canvas = document.getElementById('gameCanvas') as unknown as HTMLCanvasElement;
    this._ghoul = this._spritesFactory.createGhoul();
    this._redHood = this._spritesFactory.createRedHood();
    this._trees = [
      this._spritesFactory.createTree({ x: 200, y: 20 }),
      this._spritesFactory.createTree({ x: 280, y: 80 }),
      this._spritesFactory.createTree({ x: 30, y: 280 }),
      this._spritesFactory.createTree({ x: 150, y: 150 })
    ];
  }

  changeSprite(spriteName: string, animationName: string): void {
    this[spriteName].changeAnimation(animationName);
  }

  changePosition(spriteName: string, x: number, y: number): void {
    this[spriteName].changePosition({ x, y });
  }

  playAnimation(spriteName: string, animationName: string): void {
    this[spriteName].playAnimation(animationName);
  }

  update() {
    this._canvas.getContext('2d').clearRect(
      0,
      0,
      this._canvas.width,
      this._canvas.height,
    );
    this._ghoul.update(this._canvas.getContext('2d'));
    this._redHood.update(this._canvas.getContext('2d'));
    this._trees.forEach((t: Sprite) => t.update(this._canvas.getContext('2d')));
  }
}

const fps = 60;
window['game'] = new SampleGame();

setInterval(() => {
  window['game'].update();
}, 1000 / fps);
