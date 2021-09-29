import { Position } from './configs/position';
import { SpriteConfig } from './configs/spriteConfig';
export declare class Sprite {
    private _config;
    private _image;
    private _frameCount;
    private _activeAnimationName;
    private _previousAnimationName;
    private _activeAnimation;
    private _actualFrame;
    private _stopPlayingAnimation;
    private _amountOfFramesToSleepOnFinish;
    constructor(config: SpriteConfig);
    get currentAnimationName(): string;
    private get _isPlayingSpecificAnimation();
    hide(): void;
    changePosition(newPosition: Position): void;
    changeAnimation(animationName: string): void;
    playAnimation(animationName: string, amountOfFramesToSleepOnFinish: number): void;
    update(canvas: CanvasRenderingContext2D): void;
    private _updateImage;
    private _validateAnimationName;
    private _needToSleepAnimation;
    private _restorePreviousAnimation;
    private _processSpriteFrameTransition;
    private _startSpecificAnimationSleepFrames;
    private _drawImage;
}
