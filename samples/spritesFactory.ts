import { Sprite } from '../src/sprite';

export class SpritesFactory {
  createRedHood(): Sprite {
    return new Sprite({
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
  }

  createGhoul(): Sprite {
    return new Sprite({
      show: true,
      drawImage: {
        width: 50,
        height: 40
      },
      position: {
        x: 80,
        y: 80
      },
      defaultAnimation: 'stand_right',
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
        },
        'death': {
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

  createTree(): Sprite {
    return new Sprite({
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
}
