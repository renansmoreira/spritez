import { SpriteDraw } from './spriteDraw';
import { SpriteImage } from './spriteImage';

export interface AnimationConfig {
  startFrame: number;
  maxFrames: number;
  framesToChangeSprite: number;
  image: SpriteImage;
  drawImage: SpriteDraw;
}
