/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sprite.ts":
/*!***********************!*\
  !*** ./src/sprite.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Sprite = void 0;
var DEFAULT_NAME = 'NAME_NOT_CONFIGURED';
var Sprite = /** @class */ (function () {
    function Sprite(config) {
        this._config = __assign({}, config);
        this._image = new Image();
        this._frameCount = 0;
        this._activeAnimation = config.animations[config.defaultAnimation];
        this._actualFrame = this._activeAnimation.startFrame;
        this.updateImage();
    }
    Sprite.prototype.updateImage = function () {
        this._image.src = this._activeAnimation.image.src;
    };
    Sprite.prototype.hide = function () {
        this._config.show = false;
    };
    Sprite.prototype.change = function (animationName) {
        if (!this._config.animations[animationName]) {
            console.info("No animation named \"" + animationName + "\" was found for \"" + (this._config.name || DEFAULT_NAME) + "\".");
            return;
        }
        this._activeAnimation = this._config.animations[animationName];
        this.updateImage();
    };
    Sprite.prototype.update = function (canvas) {
        if (!this._config.show)
            return;
        this._frameCount++;
        if (this._frameCount >= this._activeAnimation.framesToChangeSprite) {
            this._frameCount = 0;
            this._actualFrame = this._actualFrame < this._activeAnimation.maxFrames
                ? this._actualFrame + 1
                : this._activeAnimation.startFrame;
        }
        canvas.drawImage(this._image, this._actualFrame * this._activeAnimation.image.width, 0, this._activeAnimation.image.width, this._activeAnimation.image.height, this._config.position.x, this._config.position.y, this._config.drawImage.width, this._config.drawImage.height);
    };
    return Sprite;
}());
exports.Sprite = Sprite;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!***************************!*\
  !*** ./samples/sample.ts ***!
  \***************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var sprite_1 = __webpack_require__(/*! ../src/sprite */ "./src/sprite.ts");
var SampleGame = /** @class */ (function () {
    function SampleGame() {
        this._canvas = document.getElementById('gameCanvas');
        this._ghoul = new sprite_1.Sprite({
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
        this._redHood = new sprite_1.Sprite({
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
        this._tree = new sprite_1.Sprite({
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
    SampleGame.prototype.changeSprite = function (spriteName, animationName) {
        this[spriteName].change(animationName);
    };
    SampleGame.prototype.update = function () {
        this._canvas.getContext('2d').clearRect(0, 0, this._canvas.width, this._canvas.height);
        this._ghoul.update(this._canvas.getContext('2d'));
        this._redHood.update(this._canvas.getContext('2d'));
        this._tree.update(this._canvas.getContext('2d'));
    };
    return SampleGame;
}());
var fps = 60;
window['game'] = new SampleGame();
setInterval(function () {
    window['game'].update();
}, 1000 / fps);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO0FBRWxDLFdBQVcsQ0FBQztJQUNWLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUMxQixDQUFDLEVBQUUsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3ByaXRlei8uL3NyYy9zcHJpdGUudHMiLCJ3ZWJwYWNrOi8vc3ByaXRlei93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zcHJpdGV6Ly4vc2FtcGxlcy9zYW1wbGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQW5pbWF0aW9uQ29uZmlnIH0gZnJvbSAnLi9jb25maWdzL2FuaW1hdGlvbkNvbmZpZyc7XHJcbmltcG9ydCB7IFNwcml0ZUNvbmZpZyB9IGZyb20gJy4vY29uZmlncy9zcHJpdGVDb25maWcnO1xyXG5cclxuY29uc3QgREVGQVVMVF9OQU1FID0gJ05BTUVfTk9UX0NPTkZJR1VSRUQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNwcml0ZSB7XHJcbiAgcHJpdmF0ZSBfY29uZmlnOiBTcHJpdGVDb25maWc7XHJcbiAgcHJpdmF0ZSBfaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBfZnJhbWVDb3VudDogbnVtYmVyO1xyXG4gIHByaXZhdGUgX2FjdGl2ZUFuaW1hdGlvbjogQW5pbWF0aW9uQ29uZmlnO1xyXG4gIHByaXZhdGUgX2FjdHVhbEZyYW1lOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogU3ByaXRlQ29uZmlnKSB7XHJcbiAgICB0aGlzLl9jb25maWcgPSB7IC4uLmNvbmZpZyB9O1xyXG4gICAgdGhpcy5faW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMuX2ZyYW1lQ291bnQgPSAwO1xyXG4gICAgdGhpcy5fYWN0aXZlQW5pbWF0aW9uID0gY29uZmlnLmFuaW1hdGlvbnNbY29uZmlnLmRlZmF1bHRBbmltYXRpb25dO1xyXG4gICAgdGhpcy5fYWN0dWFsRnJhbWUgPSB0aGlzLl9hY3RpdmVBbmltYXRpb24uc3RhcnRGcmFtZTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZUltYWdlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZUltYWdlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5faW1hZ2Uuc3JjID0gdGhpcy5fYWN0aXZlQW5pbWF0aW9uLmltYWdlLnNyYztcclxuICB9XHJcblxyXG4gIGhpZGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9jb25maWcuc2hvdyA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlKGFuaW1hdGlvbk5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLl9jb25maWcuYW5pbWF0aW9uc1thbmltYXRpb25OYW1lXSkge1xyXG4gICAgICBjb25zb2xlLmluZm8oYE5vIGFuaW1hdGlvbiBuYW1lZCBcIiR7YW5pbWF0aW9uTmFtZX1cIiB3YXMgZm91bmQgZm9yIFwiJHt0aGlzLl9jb25maWcubmFtZSB8fCBERUZBVUxUX05BTUV9XCIuYCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9hY3RpdmVBbmltYXRpb24gPSB0aGlzLl9jb25maWcuYW5pbWF0aW9uc1thbmltYXRpb25OYW1lXTtcclxuICAgIHRoaXMudXBkYXRlSW1hZ2UoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZShjYW52YXM6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLl9jb25maWcuc2hvdylcclxuICAgICAgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuX2ZyYW1lQ291bnQrKztcclxuXHJcbiAgICBpZiAodGhpcy5fZnJhbWVDb3VudCA+PSB0aGlzLl9hY3RpdmVBbmltYXRpb24uZnJhbWVzVG9DaGFuZ2VTcHJpdGUpIHtcclxuICAgICAgdGhpcy5fZnJhbWVDb3VudCA9IDA7XHJcblxyXG4gICAgICB0aGlzLl9hY3R1YWxGcmFtZSA9IHRoaXMuX2FjdHVhbEZyYW1lIDwgdGhpcy5fYWN0aXZlQW5pbWF0aW9uLm1heEZyYW1lc1xyXG4gICAgICAgID8gdGhpcy5fYWN0dWFsRnJhbWUgKyAxXHJcbiAgICAgICAgOiB0aGlzLl9hY3RpdmVBbmltYXRpb24uc3RhcnRGcmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBjYW52YXMuZHJhd0ltYWdlKFxyXG4gICAgICB0aGlzLl9pbWFnZSxcclxuICAgICAgdGhpcy5fYWN0dWFsRnJhbWUgKiB0aGlzLl9hY3RpdmVBbmltYXRpb24uaW1hZ2Uud2lkdGgsXHJcbiAgICAgIDAsXHJcbiAgICAgIHRoaXMuX2FjdGl2ZUFuaW1hdGlvbi5pbWFnZS53aWR0aCxcclxuICAgICAgdGhpcy5fYWN0aXZlQW5pbWF0aW9uLmltYWdlLmhlaWdodCxcclxuICAgICAgdGhpcy5fY29uZmlnLnBvc2l0aW9uLngsXHJcbiAgICAgIHRoaXMuX2NvbmZpZy5wb3NpdGlvbi55LFxyXG4gICAgICB0aGlzLl9jb25maWcuZHJhd0ltYWdlLndpZHRoLFxyXG4gICAgICB0aGlzLl9jb25maWcuZHJhd0ltYWdlLmhlaWdodFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7IFNwcml0ZSB9IGZyb20gJy4uL3NyYy9zcHJpdGUnO1xyXG5cclxuY2xhc3MgU2FtcGxlR2FtZSB7XHJcbiAgcHJpdmF0ZSBfY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICBwcml2YXRlIF9naG91bDogU3ByaXRlO1xyXG4gIHByaXZhdGUgX3JlZEhvb2Q6IFNwcml0ZTtcclxuICBwcml2YXRlIF90cmVlOiBTcHJpdGU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5fY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVDYW52YXMnKSBhcyB1bmtub3duIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgdGhpcy5fZ2hvdWwgPSBuZXcgU3ByaXRlKHtcclxuICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgZHJhd0ltYWdlOiB7XHJcbiAgICAgICAgd2lkdGg6IDUwLFxyXG4gICAgICAgIGhlaWdodDogNDBcclxuICAgICAgfSxcclxuICAgICAgcG9zaXRpb246IHtcclxuICAgICAgICB4OiA4MCxcclxuICAgICAgICB5OiA4MFxyXG4gICAgICB9LFxyXG4gICAgICBkZWZhdWx0QW5pbWF0aW9uOiAnc3RhbmRfbGVmdCcsXHJcbiAgICAgIGFuaW1hdGlvbnM6IHtcclxuICAgICAgICAnc3RhbmRfbGVmdCc6IHtcclxuICAgICAgICAgIHN0YXJ0RnJhbWU6IDAsXHJcbiAgICAgICAgICBtYXhGcmFtZXM6IDIsXHJcbiAgICAgICAgICBmcmFtZXNUb0NoYW5nZVNwcml0ZTogMjAsXHJcbiAgICAgICAgICBpbWFnZToge1xyXG4gICAgICAgICAgICBzcmM6ICcuL3NhbXBsZXMvYXNzZXRzL2dob3VsX2xlZnQucG5nJyxcclxuICAgICAgICAgICAgd2lkdGg6IDMxLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDI0XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAnc3RhbmRfcmlnaHQnOiB7XHJcbiAgICAgICAgICBzdGFydEZyYW1lOiAwLFxyXG4gICAgICAgICAgbWF4RnJhbWVzOiAyLFxyXG4gICAgICAgICAgZnJhbWVzVG9DaGFuZ2VTcHJpdGU6IDIwLFxyXG4gICAgICAgICAgaW1hZ2U6IHtcclxuICAgICAgICAgICAgc3JjOiAnLi9zYW1wbGVzL2Fzc2V0cy9naG91bF9yaWdodC5wbmcnLFxyXG4gICAgICAgICAgICB3aWR0aDogMzEsXHJcbiAgICAgICAgICAgIGhlaWdodDogMjRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5fcmVkSG9vZCA9IG5ldyBTcHJpdGUoe1xyXG4gICAgICBzaG93OiB0cnVlLFxyXG4gICAgICBkcmF3SW1hZ2U6IHtcclxuICAgICAgICB3aWR0aDogNDAsXHJcbiAgICAgICAgaGVpZ2h0OiA1MFxyXG4gICAgICB9LFxyXG4gICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgIHg6IDMxMCxcclxuICAgICAgICB5OiAzMTBcclxuICAgICAgfSxcclxuICAgICAgZGVmYXVsdEFuaW1hdGlvbjogJ3N0YW5kX2xlZnQnLFxyXG4gICAgICBhbmltYXRpb25zOiB7XHJcbiAgICAgICAgJ3N0YW5kX2xlZnQnOiB7XHJcbiAgICAgICAgICBzdGFydEZyYW1lOiAwLFxyXG4gICAgICAgICAgbWF4RnJhbWVzOiAwLFxyXG4gICAgICAgICAgZnJhbWVzVG9DaGFuZ2VTcHJpdGU6IDMsXHJcbiAgICAgICAgICBpbWFnZToge1xyXG4gICAgICAgICAgICBzcmM6ICcuL3NhbXBsZXMvYXNzZXRzL3dhbGtpbmcucG5nJyxcclxuICAgICAgICAgICAgd2lkdGg6IDk2LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDEzMlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ3N0YW5kX3JpZ2h0Jzoge1xyXG4gICAgICAgICAgc3RhcnRGcmFtZTogMCxcclxuICAgICAgICAgIG1heEZyYW1lczogMCxcclxuICAgICAgICAgIGZyYW1lc1RvQ2hhbmdlU3ByaXRlOiAzLFxyXG4gICAgICAgICAgaW1hZ2U6IHtcclxuICAgICAgICAgICAgc3JjOiAnLi9zYW1wbGVzL2Fzc2V0cy93YWxraW5nX2ZsaXBwZWQucG5nJyxcclxuICAgICAgICAgICAgd2lkdGg6IDk2LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDEzMlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ3dhbGtfbGVmdCc6IHtcclxuICAgICAgICAgIHN0YXJ0RnJhbWU6IDEsXHJcbiAgICAgICAgICBtYXhGcmFtZXM6IDI0LFxyXG4gICAgICAgICAgZnJhbWVzVG9DaGFuZ2VTcHJpdGU6IDMsXHJcbiAgICAgICAgICBpbWFnZToge1xyXG4gICAgICAgICAgICBzcmM6ICcuL3NhbXBsZXMvYXNzZXRzL3dhbGtpbmcucG5nJyxcclxuICAgICAgICAgICAgd2lkdGg6IDk2LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDEzMlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ3dhbGtfcmlnaHQnOiB7XHJcbiAgICAgICAgICBzdGFydEZyYW1lOiAxLFxyXG4gICAgICAgICAgbWF4RnJhbWVzOiAyNCxcclxuICAgICAgICAgIGZyYW1lc1RvQ2hhbmdlU3ByaXRlOiAzLFxyXG4gICAgICAgICAgaW1hZ2U6IHtcclxuICAgICAgICAgICAgc3JjOiAnLi9zYW1wbGVzL2Fzc2V0cy93YWxraW5nX2ZsaXBwZWQucG5nJyxcclxuICAgICAgICAgICAgd2lkdGg6IDk2LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDEzMlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLl90cmVlID0gbmV3IFNwcml0ZSh7XHJcbiAgICAgIG5hbWU6ICdUcmVlJyxcclxuICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgZHJhd0ltYWdlOiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCxcclxuICAgICAgICBoZWlnaHQ6IDEwMFxyXG4gICAgICB9LFxyXG4gICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgIHg6IDE1MCxcclxuICAgICAgICB5OiAxNTBcclxuICAgICAgfSxcclxuICAgICAgZGVmYXVsdEFuaW1hdGlvbjogJ3N0YXRpYycsXHJcbiAgICAgIGFuaW1hdGlvbnM6IHtcclxuICAgICAgICAnc3RhdGljJzoge1xyXG4gICAgICAgICAgc3RhcnRGcmFtZTogMCxcclxuICAgICAgICAgIG1heEZyYW1lczogMCxcclxuICAgICAgICAgIGZyYW1lc1RvQ2hhbmdlU3ByaXRlOiAyMCxcclxuICAgICAgICAgIGltYWdlOiB7XHJcbiAgICAgICAgICAgIHNyYzogJy4vc2FtcGxlcy9hc3NldHMvdHJlZS5wbmcnLFxyXG4gICAgICAgICAgICB3aWR0aDogNDgsXHJcbiAgICAgICAgICAgIGhlaWdodDogNDhcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlU3ByaXRlKHNwcml0ZU5hbWU6IHN0cmluZywgYW5pbWF0aW9uTmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzW3Nwcml0ZU5hbWVdLmNoYW5nZShhbmltYXRpb25OYW1lKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMuX2NhbnZhcy5nZXRDb250ZXh0KCcyZCcpLmNsZWFyUmVjdChcclxuICAgICAgMCxcclxuICAgICAgMCxcclxuICAgICAgdGhpcy5fY2FudmFzLndpZHRoLFxyXG4gICAgICB0aGlzLl9jYW52YXMuaGVpZ2h0LFxyXG4gICAgKTtcclxuICAgIHRoaXMuX2dob3VsLnVwZGF0ZSh0aGlzLl9jYW52YXMuZ2V0Q29udGV4dCgnMmQnKSk7XHJcbiAgICB0aGlzLl9yZWRIb29kLnVwZGF0ZSh0aGlzLl9jYW52YXMuZ2V0Q29udGV4dCgnMmQnKSk7XHJcbiAgICB0aGlzLl90cmVlLnVwZGF0ZSh0aGlzLl9jYW52YXMuZ2V0Q29udGV4dCgnMmQnKSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBmcHMgPSA2MDtcclxud2luZG93WydnYW1lJ10gPSBuZXcgU2FtcGxlR2FtZSgpO1xyXG5cclxuc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gIHdpbmRvd1snZ2FtZSddLnVwZGF0ZSgpO1xyXG59LCAxMDAwIC8gZnBzKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9