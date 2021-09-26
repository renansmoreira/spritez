import { AnimationConfig } from './animationConfig';
import { Position } from './position';
import { SpriteDraw } from './spriteDraw';

export interface SpriteConfig {
  name?: string;
  show: boolean;
  drawImage: SpriteDraw;
  position: Position;
  defaultAnimation: string;
  animations: { [key: string]: AnimationConfig };
}
