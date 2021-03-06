import { Sprite } from '../src/sprite';

export class SpritesFactory {
  createRedHood(): Sprite {
    return new Sprite({
      name: 'Red hood',
      show: true,
      position: {
        x: 310,
        y: 310
      },
      defaultAnimation: 'stand_left',
      animations: {
        'stand_left': {
          drawImage: {
            width: 40,
            height: 50
          },
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
          drawImage: {
            width: 40,
            height: 50
          },
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
          drawImage: {
            width: 40,
            height: 50
          },
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
          drawImage: {
            width: 40,
            height: 50
          },
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
  }

  createGhoul(): Sprite {
    return new Sprite({
      show: true,
      position: {
        x: 80,
        y: 80
      },
      defaultAnimation: 'stand_right',
      animations: {
        'stand_left': {
          drawImage: {
            width: 50,
            height: 40
          },
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
          drawImage: {
            width: 50,
            height: 40
          },
          startFrame: 0,
          maxFrames: 2,
          framesToChangeSprite: 20,
          image: {
            src: './samples/assets/ghoul_right.png',
            width: 31,
            height: 24
          }
        },
        'death': {
          drawImage: {
            width: 54,
            height: 40
          },
          startFrame: 0,
          maxFrames: 4,
          framesToChangeSprite: 10,
          image: {
            src: './samples/assets/ghoul_death.png',
            width: 31,
            height: 21
          }
        }
      }
    });
  };

  createTree(position: { x: number, y: number }): Sprite {
    return new Sprite({
      show: true,
      position: {
        x: position.x,
        y: position.y
      },
      defaultAnimation: 'static',
      animations: {
        'static': {
          drawImage: {
            width: 100,
            height: 100
          },
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
}
