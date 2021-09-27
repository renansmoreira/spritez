import { Sprite } from '../src/sprite';
import { SpritesFactory } from './spritesFactory';

class SampleGame {
  private _canvas: HTMLCanvasElement;
  private _ghoul: Sprite;
  private _redHood: Sprite;
  private _tree: Sprite;

  constructor(
    private _spritesFactory: SpritesFactory = new SpritesFactory()
  ) {
    this._canvas = document.getElementById('gameCanvas') as unknown as HTMLCanvasElement;
    this._ghoul = this._spritesFactory.createGhoul();
    this._redHood = this._spritesFactory.createRedHood();
    this._tree = this._spritesFactory.createTree();
  }

  changeSprite(spriteName: string, animationName: string):void {
    this[spriteName].changeAnimation(animationName);
  }

  changePosition(spriteName: string, x: number, y: number):void {
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
    this._tree.update(this._canvas.getContext('2d'));
  }
}

const fps = 60;
window['game'] = new SampleGame();

setInterval(() => {
  window['game'].update();
}, 1000 / fps);
