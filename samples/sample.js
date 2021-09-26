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
                x: 210,
                y: 210
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
        this._cedar = new sprite_1.Sprite({
            name: 'Cedar',
            show: true,
            drawImage: {
                width: 50,
                height: 300
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
                        src: './samples/assets/cedar.png',
                        width: 32,
                        height: 150
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
        this._cedar.update(this._canvas.getContext('2d'));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO0FBRWxDLFdBQVcsQ0FBQztJQUNWLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUMxQixDQUFDLEVBQUUsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3ByaXRlei8uL3NyYy9zcHJpdGUudHMiLCJ3ZWJwYWNrOi8vc3ByaXRlei93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zcHJpdGV6Ly4vc2FtcGxlcy9zYW1wbGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQW5pbWF0aW9uQ29uZmlnIH0gZnJvbSAnLi9hbmltYXRpb25Db25maWcnO1xyXG5pbXBvcnQgeyBTcHJpdGVDb25maWcgfSBmcm9tICcuL3Nwcml0ZUNvbmZpZyc7XHJcblxyXG5jb25zdCBERUZBVUxUX05BTUUgPSAnTkFNRV9OT1RfQ09ORklHVVJFRCc7XHJcblxyXG5leHBvcnQgY2xhc3MgU3ByaXRlIHtcclxuICBwcml2YXRlIF9jb25maWc6IFNwcml0ZUNvbmZpZztcclxuICBwcml2YXRlIF9pbWFnZTogSFRNTEltYWdlRWxlbWVudDtcclxuICBwcml2YXRlIF9mcmFtZUNvdW50OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfYWN0aXZlQW5pbWF0aW9uOiBBbmltYXRpb25Db25maWc7XHJcbiAgcHJpdmF0ZSBfYWN0dWFsRnJhbWU6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoY29uZmlnOiBTcHJpdGVDb25maWcpIHtcclxuICAgIHRoaXMuX2NvbmZpZyA9IHsgLi4uY29uZmlnIH07XHJcbiAgICB0aGlzLl9pbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5fZnJhbWVDb3VudCA9IDA7XHJcbiAgICB0aGlzLl9hY3RpdmVBbmltYXRpb24gPSBjb25maWcuYW5pbWF0aW9uc1tjb25maWcuZGVmYXVsdEFuaW1hdGlvbl07XHJcbiAgICB0aGlzLl9hY3R1YWxGcmFtZSA9IHRoaXMuX2FjdGl2ZUFuaW1hdGlvbi5zdGFydEZyYW1lO1xyXG5cclxuICAgIHRoaXMudXBkYXRlSW1hZ2UoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlSW1hZ2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9pbWFnZS5zcmMgPSB0aGlzLl9hY3RpdmVBbmltYXRpb24uaW1hZ2Uuc3JjO1xyXG4gIH1cclxuXHJcbiAgaGlkZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2NvbmZpZy5zaG93ID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2UoYW5pbWF0aW9uTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5hbmltYXRpb25zW2FuaW1hdGlvbk5hbWVdKSB7XHJcbiAgICAgIGNvbnNvbGUuaW5mbyhgTm8gYW5pbWF0aW9uIG5hbWVkIFwiJHthbmltYXRpb25OYW1lfVwiIHdhcyBmb3VuZCBmb3IgXCIke3RoaXMuX2NvbmZpZy5uYW1lIHx8IERFRkFVTFRfTkFNRX1cIi5gKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2FjdGl2ZUFuaW1hdGlvbiA9IHRoaXMuX2NvbmZpZy5hbmltYXRpb25zW2FuaW1hdGlvbk5hbWVdO1xyXG4gICAgdGhpcy51cGRhdGVJbWFnZSgpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKGNhbnZhczogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5zaG93KVxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgdGhpcy5fZnJhbWVDb3VudCsrO1xyXG5cclxuICAgIGlmICh0aGlzLl9mcmFtZUNvdW50ID49IHRoaXMuX2FjdGl2ZUFuaW1hdGlvbi5mcmFtZXNUb0NoYW5nZVNwcml0ZSkge1xyXG4gICAgICB0aGlzLl9mcmFtZUNvdW50ID0gMDtcclxuXHJcbiAgICAgIHRoaXMuX2FjdHVhbEZyYW1lID0gdGhpcy5fYWN0dWFsRnJhbWUgPCB0aGlzLl9hY3RpdmVBbmltYXRpb24ubWF4RnJhbWVzXHJcbiAgICAgICAgPyB0aGlzLl9hY3R1YWxGcmFtZSArIDFcclxuICAgICAgICA6IHRoaXMuX2FjdGl2ZUFuaW1hdGlvbi5zdGFydEZyYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbnZhcy5kcmF3SW1hZ2UoXHJcbiAgICAgIHRoaXMuX2ltYWdlLFxyXG4gICAgICB0aGlzLl9hY3R1YWxGcmFtZSAqIHRoaXMuX2FjdGl2ZUFuaW1hdGlvbi5pbWFnZS53aWR0aCxcclxuICAgICAgMCxcclxuICAgICAgdGhpcy5fYWN0aXZlQW5pbWF0aW9uLmltYWdlLndpZHRoLFxyXG4gICAgICB0aGlzLl9hY3RpdmVBbmltYXRpb24uaW1hZ2UuaGVpZ2h0LFxyXG4gICAgICB0aGlzLl9jb25maWcucG9zaXRpb24ueCxcclxuICAgICAgdGhpcy5fY29uZmlnLnBvc2l0aW9uLnksXHJcbiAgICAgIHRoaXMuX2NvbmZpZy5kcmF3SW1hZ2Uud2lkdGgsXHJcbiAgICAgIHRoaXMuX2NvbmZpZy5kcmF3SW1hZ2UuaGVpZ2h0XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSAnLi4vc3JjL3Nwcml0ZSc7XHJcblxyXG5jbGFzcyBTYW1wbGVHYW1lIHtcclxuICBwcml2YXRlIF9jYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gIHByaXZhdGUgX2dob3VsOiBTcHJpdGU7XHJcbiAgcHJpdmF0ZSBfcmVkSG9vZDogU3ByaXRlO1xyXG4gIHByaXZhdGUgX2NlZGFyOiBTcHJpdGU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5fY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVDYW52YXMnKSBhcyB1bmtub3duIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgdGhpcy5fZ2hvdWwgPSBuZXcgU3ByaXRlKHtcclxuICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgZHJhd0ltYWdlOiB7XHJcbiAgICAgICAgd2lkdGg6IDUwLFxyXG4gICAgICAgIGhlaWdodDogNDBcclxuICAgICAgfSxcclxuICAgICAgcG9zaXRpb246IHtcclxuICAgICAgICB4OiA4MCxcclxuICAgICAgICB5OiA4MFxyXG4gICAgICB9LFxyXG4gICAgICBkZWZhdWx0QW5pbWF0aW9uOiAnc3RhbmRfbGVmdCcsXHJcbiAgICAgIGFuaW1hdGlvbnM6IHtcclxuICAgICAgICAnc3RhbmRfbGVmdCc6IHtcclxuICAgICAgICAgIHN0YXJ0RnJhbWU6IDAsXHJcbiAgICAgICAgICBtYXhGcmFtZXM6IDIsXHJcbiAgICAgICAgICBmcmFtZXNUb0NoYW5nZVNwcml0ZTogMjAsXHJcbiAgICAgICAgICBpbWFnZToge1xyXG4gICAgICAgICAgICBzcmM6ICcuL3NhbXBsZXMvYXNzZXRzL2dob3VsX2xlZnQucG5nJyxcclxuICAgICAgICAgICAgd2lkdGg6IDMxLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDI0XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAnc3RhbmRfcmlnaHQnOiB7XHJcbiAgICAgICAgICBzdGFydEZyYW1lOiAwLFxyXG4gICAgICAgICAgbWF4RnJhbWVzOiAyLFxyXG4gICAgICAgICAgZnJhbWVzVG9DaGFuZ2VTcHJpdGU6IDIwLFxyXG4gICAgICAgICAgaW1hZ2U6IHtcclxuICAgICAgICAgICAgc3JjOiAnLi9zYW1wbGVzL2Fzc2V0cy9naG91bF9yaWdodC5wbmcnLFxyXG4gICAgICAgICAgICB3aWR0aDogMzEsXHJcbiAgICAgICAgICAgIGhlaWdodDogMjRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5fcmVkSG9vZCA9IG5ldyBTcHJpdGUoe1xyXG4gICAgICBzaG93OiB0cnVlLFxyXG4gICAgICBkcmF3SW1hZ2U6IHtcclxuICAgICAgICB3aWR0aDogNDAsXHJcbiAgICAgICAgaGVpZ2h0OiA1MFxyXG4gICAgICB9LFxyXG4gICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgIHg6IDIxMCxcclxuICAgICAgICB5OiAyMTBcclxuICAgICAgfSxcclxuICAgICAgZGVmYXVsdEFuaW1hdGlvbjogJ3N0YW5kX2xlZnQnLFxyXG4gICAgICBhbmltYXRpb25zOiB7XHJcbiAgICAgICAgJ3N0YW5kX2xlZnQnOiB7XHJcbiAgICAgICAgICBzdGFydEZyYW1lOiAwLFxyXG4gICAgICAgICAgbWF4RnJhbWVzOiAwLFxyXG4gICAgICAgICAgZnJhbWVzVG9DaGFuZ2VTcHJpdGU6IDMsXHJcbiAgICAgICAgICBpbWFnZToge1xyXG4gICAgICAgICAgICBzcmM6ICcuL3NhbXBsZXMvYXNzZXRzL3dhbGtpbmcucG5nJyxcclxuICAgICAgICAgICAgd2lkdGg6IDk2LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDEzMlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ3N0YW5kX3JpZ2h0Jzoge1xyXG4gICAgICAgICAgc3RhcnRGcmFtZTogMCxcclxuICAgICAgICAgIG1heEZyYW1lczogMCxcclxuICAgICAgICAgIGZyYW1lc1RvQ2hhbmdlU3ByaXRlOiAzLFxyXG4gICAgICAgICAgaW1hZ2U6IHtcclxuICAgICAgICAgICAgc3JjOiAnLi9zYW1wbGVzL2Fzc2V0cy93YWxraW5nX2ZsaXBwZWQucG5nJyxcclxuICAgICAgICAgICAgd2lkdGg6IDk2LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDEzMlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ3dhbGtfbGVmdCc6IHtcclxuICAgICAgICAgIHN0YXJ0RnJhbWU6IDEsXHJcbiAgICAgICAgICBtYXhGcmFtZXM6IDI0LFxyXG4gICAgICAgICAgZnJhbWVzVG9DaGFuZ2VTcHJpdGU6IDMsXHJcbiAgICAgICAgICBpbWFnZToge1xyXG4gICAgICAgICAgICBzcmM6ICcuL3NhbXBsZXMvYXNzZXRzL3dhbGtpbmcucG5nJyxcclxuICAgICAgICAgICAgd2lkdGg6IDk2LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDEzMlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ3dhbGtfcmlnaHQnOiB7XHJcbiAgICAgICAgICBzdGFydEZyYW1lOiAxLFxyXG4gICAgICAgICAgbWF4RnJhbWVzOiAyNCxcclxuICAgICAgICAgIGZyYW1lc1RvQ2hhbmdlU3ByaXRlOiAzLFxyXG4gICAgICAgICAgaW1hZ2U6IHtcclxuICAgICAgICAgICAgc3JjOiAnLi9zYW1wbGVzL2Fzc2V0cy93YWxraW5nX2ZsaXBwZWQucG5nJyxcclxuICAgICAgICAgICAgd2lkdGg6IDk2LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDEzMlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9jZWRhciA9IG5ldyBTcHJpdGUoe1xyXG4gICAgICBuYW1lOiAnQ2VkYXInLFxyXG4gICAgICBzaG93OiB0cnVlLFxyXG4gICAgICBkcmF3SW1hZ2U6IHtcclxuICAgICAgICB3aWR0aDogNTAsXHJcbiAgICAgICAgaGVpZ2h0OiAzMDBcclxuICAgICAgfSxcclxuICAgICAgcG9zaXRpb246IHtcclxuICAgICAgICB4OiAxNTAsXHJcbiAgICAgICAgeTogMTUwXHJcbiAgICAgIH0sXHJcbiAgICAgIGRlZmF1bHRBbmltYXRpb246ICdzdGF0aWMnLFxyXG4gICAgICBhbmltYXRpb25zOiB7XHJcbiAgICAgICAgJ3N0YXRpYyc6IHtcclxuICAgICAgICAgIHN0YXJ0RnJhbWU6IDAsXHJcbiAgICAgICAgICBtYXhGcmFtZXM6IDAsXHJcbiAgICAgICAgICBmcmFtZXNUb0NoYW5nZVNwcml0ZTogMjAsXHJcbiAgICAgICAgICBpbWFnZToge1xyXG4gICAgICAgICAgICBzcmM6ICcuL3NhbXBsZXMvYXNzZXRzL2NlZGFyLnBuZycsXHJcbiAgICAgICAgICAgIHdpZHRoOiAzMixcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNTBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlU3ByaXRlKHNwcml0ZU5hbWU6IHN0cmluZywgYW5pbWF0aW9uTmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzW3Nwcml0ZU5hbWVdLmNoYW5nZShhbmltYXRpb25OYW1lKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMuX2NhbnZhcy5nZXRDb250ZXh0KCcyZCcpLmNsZWFyUmVjdChcclxuICAgICAgMCxcclxuICAgICAgMCxcclxuICAgICAgdGhpcy5fY2FudmFzLndpZHRoLFxyXG4gICAgICB0aGlzLl9jYW52YXMuaGVpZ2h0LFxyXG4gICAgKTtcclxuICAgIHRoaXMuX2dob3VsLnVwZGF0ZSh0aGlzLl9jYW52YXMuZ2V0Q29udGV4dCgnMmQnKSk7XHJcbiAgICB0aGlzLl9yZWRIb29kLnVwZGF0ZSh0aGlzLl9jYW52YXMuZ2V0Q29udGV4dCgnMmQnKSk7XHJcbiAgICB0aGlzLl9jZWRhci51cGRhdGUodGhpcy5fY2FudmFzLmdldENvbnRleHQoJzJkJykpO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZnBzID0gNjA7XHJcbndpbmRvd1snZ2FtZSddID0gbmV3IFNhbXBsZUdhbWUoKTtcclxuXHJcbnNldEludGVydmFsKCgpID0+IHtcclxuICB3aW5kb3dbJ2dhbWUnXS51cGRhdGUoKTtcclxufSwgMTAwMCAvIGZwcyk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==