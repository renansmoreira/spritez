import { SpriteImage } from "./spriteImage";

export interface AnimationConfig {
  startFrame: number;
  maxFrames: number;
  framesToChangeSprite: number;
  image: SpriteImage;
}
