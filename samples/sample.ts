import { Sprite } from '../src/sprite';

class SampleGame {
  private _canvas: HTMLCanvasElement;
  private _ghoul: Sprite;
  private _redHood: Sprite;
  private _tree: Sprite;

  constructor() {
    this._canvas = document.getElementById('gameCanvas') as unknown as HTMLCanvasElement;
    this._ghoul = new Sprite({
      show: true,
      drawImage: {
        width: 50,
        height: 40
      },
      position: {
        x: 80,
        y: 80
      },
      defaultAnimation: 'stand_left',
      animations: {
        'stand_left': {
          startFrame: 0,
          maxFrames: 2,
          framesToChangeSprite: 20,
          image: {
            src: './samples/assets/ghoul_left.png',
            width: 31,
            height: 24
          }
        },
        'stand_right': {
          startFrame: 0,
          maxFrames: 2,
          framesToChangeSprite: 20,
          image: {
            src: './samples/assets/ghoul_right.png',
            width: 31,
            height: 24
          }
        }
      }
    });
    this._redHood = new Sprite({
      show: true,
      drawImage: {
        width: 40,
        height: 50
      },
      position: {
        x: 310,
        y: 310
      },
      defaultAnimation: 'stand_left',
      animations: {
        'stand_left': {
          startFrame: 0,
          maxFrames: 0,
          framesToChangeSprite: 3,
          image: {
            src: './samples/assets/walking.png',
            width: 96,
            height: 132
          }
        },
        'stand_right': {
          startFrame: 0,
          maxFrames: 0,
          framesToChangeSprite: 3,
          image: {
            src: './samples/assets/walking_flipped.png',
            width: 96,
            height: 132
          }
        },
        'walk_left': {
          startFrame: 1,
          maxFrames: 24,
          framesToChangeSprite: 3,
          image: {
            src: './samples/assets/walking.png',
            width: 96,
            height: 132
          }
        },
        'walk_right': {
          startFrame: 1,
          maxFrames: 24,
          framesToChangeSprite: 3,
          image: {
            src: './samples/assets/walking_flipped.png',
            width: 96,
            height: 132
          }
        }
      }
    });
    this._tree = new Sprite({
      name: 'Tree',
      show: true,
      drawImage: {
        width: 100,
        height: 100
      },
      position: {
        x: 150,
        y: 150
      },
      defaultAnimation: 'static',
      animations: {
        'static': {
          startFrame: 0,
          maxFrames: 0,
          framesToChangeSprite: 20,
          image: {
            src: './samples/assets/tree.png',
            width: 48,
            height: 48
          }
        }
      }
    });
  }

  changeSprite(spriteName: string, animationName: string) {
    this[spriteName].changeAnimation(animationName);
  }

  changePosition(spriteName: string, x: number, y: number) {
    this[spriteName].changePosition({ x, y });
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
