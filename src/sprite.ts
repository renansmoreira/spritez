import { AnimationConfig } from './configs/animationConfig';
import { Position } from './configs/position';
import { SpriteConfig } from './configs/spriteConfig';

const DEFAULT_NAME = 'NAME_NOT_CONFIGURED';

export class Sprite {
  private _config: SpriteConfig;
  private _image: HTMLImageElement;
  private _frameCount: number;
  private _activeAnimationName: string;
  private _previousAnimationName: string;
  private _activeAnimation: AnimationConfig;
  private _actualFrame: number;

  constructor(config: SpriteConfig) {
    this._config = { ...config };
    this._image = new Image();
    this._frameCount = 0;
    this._activeAnimationName = config.defaultAnimation;
    this._activeAnimation = config.animations[config.defaultAnimation];
    this._actualFrame = this._activeAnimation.startFrame;

    this._updateImage();
  }

  get currentAnimationName(): string {
    return this._activeAnimationName;
  }

  private _updateImage(): void {
    this._image.src = this._activeAnimation.image.src;
    this._frameCount = 0;
    this._actualFrame = this._activeAnimation.startFrame;
  }

  private _validateAnimationName(animationName: string): boolean {
    const animationExists = this._config.animations[animationName] !== undefined;

    if (!animationExists)
      console.info(`No animation named "${animationName}" was found for "${this._config.name || DEFAULT_NAME}".`);

    return animationExists;
  }

  hide(): void {
    this._config.show = false;
  }

  changePosition(newPosition: Position): void {
    this._config.position = newPosition;
  }

  changeAnimation(animationName: string): void {
    if (!this._validateAnimationName(animationName)) {
      return;
    }

    if (this._activeAnimationName !== animationName) {
      this._activeAnimationName = animationName;
      this._activeAnimation = this._config.animations[animationName];
      this._updateImage();
    }
  }

  playAnimation(animationName: string): void {
    if (!this._validateAnimationName(animationName)) {
      return;
    }

    this._previousAnimationName = this._activeAnimationName;
    this.changeAnimation(animationName);
  }

  update(canvas: CanvasRenderingContext2D): void {
    if (!this._config.show)
      return;

    this._frameCount++;

    if (this._frameCount >= this._activeAnimation.framesToChangeSprite) {
      this._frameCount = 0;

      if (this._actualFrame < this._activeAnimation.maxFrames)
        this._actualFrame = this._actualFrame + 1
      else {
        this._actualFrame = this._activeAnimation.startFrame;

        if (this._previousAnimationName) {
          this.changeAnimation(this._previousAnimationName);
          this._previousAnimationName = undefined;
        }
      }
    }

    canvas.drawImage(
      this._image,
      this._actualFrame * this._activeAnimation.image.width,
      0,
      this._activeAnimation.image.width,
      this._activeAnimation.image.height,
      this._config.position.x,
      this._config.position.y,
      this._activeAnimation.drawImage.width,
      this._activeAnimation.drawImage.height
    );
  }
}
