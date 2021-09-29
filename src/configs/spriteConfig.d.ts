import { AnimationConfig } from './animationConfig';
import { Position } from './position';
export interface SpriteConfig {
    name?: string;
    show: boolean;
    position: Position;
    defaultAnimation: string;
    animations: {
        [key: string]: AnimationConfig;
    };
}
