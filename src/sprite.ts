import { AnimationConfig } from './configs/animationConfig';
import { Position } from './configs/position';
import { SpriteConfig } from './configs/spriteConfig';

const DEFAULT_NAME = 'NAME_NOT_CONFIGURED';

export class Sprite {
  private _config: SpriteConfig;
  private _image: HTMLImageElement;
  private _frameCount: number;
  private _activeAnimationName: string;
  private _activeAnimation: AnimationConfig;
  private _actualFrame: number;

  constructor(config: SpriteConfig) {
    this._config = { ...config };
    this._image = new Image();
    this._frameCount = 0;
    this._activeAnimationName = config.defaultAnimation;
    this._activeAnimation = config.animations[config.defaultAnimation];
    this._actualFrame = this._activeAnimation.startFrame;

    this.updateImage();
  }

  get currentAnimationName(): string {
    return this._activeAnimationName;
  }

  private updateImage(): void {
    this._image.src = this._activeAnimation.image.src;
  }

  hide(): void {
    this._config.show = false;
  }

  changePosition(newPosition: Position): void {
    this._config.position = newPosition;
  }

  changeAnimation(animationName: string): void {
    if (!this._config.animations[animationName]) {
      console.info(`No animation named "${animationName}" was found for "${this._config.name || DEFAULT_NAME}".`);
      return;
    }

    if (this._activeAnimationName !== animationName) {
      this._activeAnimationName = animationName;
      this._activeAnimation = this._config.animations[animationName];
      this.updateImage();
    }
  }

  update(canvas: CanvasRenderingContext2D): void {
    if (!this._config.show)
      return;

    this._frameCount++;

    if (this._frameCount >= this._activeAnimation.framesToChangeSprite) {
      this._frameCount = 0;

      this._actualFrame = this._actualFrame < this._activeAnimation.maxFrames
        ? this._actualFrame + 1
        : this._activeAnimation.startFrame;
    }

    canvas.drawImage(
      this._image,
      this._actualFrame * this._activeAnimation.image.width,
      0,
      this._activeAnimation.image.width,
      this._activeAnimation.image.height,
      this._config.position.x,
      this._config.position.y,
      this._config.drawImage.width,
      this._config.drawImage.height
    );
  }
}
