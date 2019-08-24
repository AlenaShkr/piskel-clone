/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_modal_dialog_toolsRender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/modal-dialog/toolsRender */ \"./src/components/modal-dialog/toolsRender.js\");\n/* harmony import */ var _screens_preview_previewRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens/preview/previewRender */ \"./src/screens/preview/previewRender.js\");\n/* harmony import */ var _components_frames_list_frameRender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/frames-list/frameRender */ \"./src/components/frames-list/frameRender.js\");\n/* harmony import */ var _components_loading_verticalMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/loading/verticalMenu */ \"./src/components/loading/verticalMenu.js\");\n/* harmony import */ var _screens_canvas_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./screens/canvas/index */ \"./src/screens/canvas/index.js\");\n/* harmony import */ var _components_frames_list_frame__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/frames-list/frame */ \"./src/components/frames-list/frame.js\");\n\n\n\n\n\n\n\nwindow.onload = function load() {\n  Object(_components_modal_dialog_toolsRender__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  Object(_screens_preview_previewRender__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  Object(_components_frames_list_frameRender__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  Object(_components_loading_verticalMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  Object(_screens_canvas_index__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  Object(_components_frames_list_frame__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n};\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/components/frames-list/frame.js":
/*!*********************************************!*\
  !*** ./src/components/frames-list/frame.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return frameFunc; });\n/* harmony import */ var _screens_preview_preview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../screens/preview/preview */ \"./src/screens/preview/preview.js\");\n/* harmony import */ var _modal_dialog_fill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modal-dialog/fill */ \"./src/components/modal-dialog/fill.js\");\n\n\nvar stateCanvas = [];\nvar stateFrame = [];\nvar countFrame = 1;\nvar canvas = document.querySelector('.canvas');\nvar ctx = canvas.getContext('2d');\n\nfunction cleanCanvas() {\n  ctx.globalCompositeOperation = 'destination-out';\n  ctx.fillStyle = '#1d1d1d';\n  ctx.moveTo(0, 0);\n  ctx.fillRect(0, 0, canvas.width, canvas.height);\n}\n\nfunction saveJPG() {\n  var imageJPG = canvas.toDataURL('image/jpg', 1);\n  return imageJPG;\n}\n\nfunction saveStateCanvas() {\n  for (var j = 0; j < _modal_dialog_fill__WEBPACK_IMPORTED_MODULE_1__[\"countRef\"]; j += 1) {\n    var tempArray = [];\n\n    for (var i = 0; i < _modal_dialog_fill__WEBPACK_IMPORTED_MODULE_1__[\"countRef\"]; i += 1) {\n      var img = ctx.getImageData(i * _modal_dialog_fill__WEBPACK_IMPORTED_MODULE_1__[\"sizePixelRef\"], j * _modal_dialog_fill__WEBPACK_IMPORTED_MODULE_1__[\"sizePixelRef\"], 1, 1);\n      var dataColor = img.data;\n      var rgba = \"rgba(\".concat(dataColor[0], \",\").concat(dataColor[1], \",\").concat(dataColor[2], \",\").concat(dataColor[3], \")\");\n      tempArray[i] = rgba;\n    }\n\n    stateCanvas.push(tempArray);\n  }\n\n  return stateCanvas;\n}\n\nfunction redrawFrame(numberFrame) {\n  var frame = stateFrame[numberFrame];\n\n  for (var j = 0; j < _modal_dialog_fill__WEBPACK_IMPORTED_MODULE_1__[\"countRef\"]; j += 1) {\n    for (var i = 0; i < _modal_dialog_fill__WEBPACK_IMPORTED_MODULE_1__[\"countRef\"]; i += 1) {\n      ctx.globalCompositeOperation = 'source-over';\n      ctx.fillStyle = frame[j][i];\n      ctx.fillRect(i * _modal_dialog_fill__WEBPACK_IMPORTED_MODULE_1__[\"sizePixelRef\"], j * _modal_dialog_fill__WEBPACK_IMPORTED_MODULE_1__[\"sizePixelRef\"], _modal_dialog_fill__WEBPACK_IMPORTED_MODULE_1__[\"sizePixelRef\"], _modal_dialog_fill__WEBPACK_IMPORTED_MODULE_1__[\"sizePixelRef\"]);\n    }\n  }\n}\n\nfunction changeOnNonActiveState(element) {\n  var frameCurrent = element;\n  frameCurrent.className = 'frame';\n  frameCurrent.querySelector('.delete-frame').style.visibility = 'visible';\n  frameCurrent.querySelector('.duplicate-frame').style.visibility = 'visible';\n  frameCurrent.querySelector('.replace-frame').style.visibility = 'visible';\n}\n\nfunction redrawNumber(number) {\n  var numberFrame = document.querySelectorAll('.number-frame');\n\n  for (var i = 0; i < number; i += 1) {\n    numberFrame[i].textContent = i + 1;\n  }\n}\n\nfunction handleBtnDelete(e) {\n  var removedFrame = e.target.parentNode.parentNode;\n  var position = removedFrame.querySelector('.number-frame').textContent - 1;\n  stateFrame.splice(position, 1);\n  countFrame -= 1;\n  removedFrame.remove();\n  redrawNumber(countFrame);\n}\n\nfunction handleRedrawFrame(e) {\n  var numberFrame = e.target.parentNode.querySelector('.number-frame');\n  var position = numberFrame.textContent - 1;\n  stateFrame.splice(position + 1, 1, saveStateCanvas());\n  var currentFrame = document.querySelector('.frame-current');\n  var numberCurrentFrame = currentFrame.querySelector('.number-frame').textContent;\n  stateFrame.splice(numberCurrentFrame - 1, 1, saveStateCanvas());\n  currentFrame.style.backgroundSize = 'cover';\n  currentFrame.style.backgroundImage = \"url(\".concat(saveJPG(), \")\");\n  changeOnNonActiveState(currentFrame);\n  e.target.parentNode.className = 'frame-current';\n  redrawFrame(position);\n}\n\nfunction handleBtnDuplicate(e) {\n  var copyingFrame = e.target.parentNode.parentNode;\n  var position = copyingFrame.querySelector('.number-frame').textContent - 1;\n  stateFrame.splice(position + 1, 0, stateFrame[position]);\n  var copiedFrame = copyingFrame.cloneNode(true);\n  var btnDeleteFrame = copiedFrame.querySelector('.delete-frame');\n  btnDeleteFrame.addEventListener('click', handleBtnDelete);\n  var btnDuplicateFrame = copiedFrame.querySelector('.duplicate-frame');\n  btnDuplicateFrame.addEventListener('click', handleBtnDuplicate);\n  var frames = copiedFrame.querySelector('.preview-frame');\n  frames.addEventListener('click', handleRedrawFrame);\n  var framePanel = copyingFrame.parentNode;\n  framePanel.insertBefore(copiedFrame, copyingFrame.nextSibling);\n  countFrame += 1;\n  redrawNumber(countFrame);\n}\n\nfunction handlerAddFrame(newFrame) {\n  var frame = window.document.querySelector('.frame-current');\n  changeOnNonActiveState(frame);\n  var addFrame = newFrame.cloneNode(true);\n  stateFrame.push(saveStateCanvas());\n  frame.style.backgroundSize = 'cover';\n  frame.style.backgroundImage = \"url(\".concat(saveJPG(), \")\");\n  countFrame += 1;\n  var framePanel = document.querySelector('.frame-panel');\n  framePanel.appendChild(addFrame);\n  redrawNumber(countFrame);\n  var previewFr = addFrame.querySelector('.preview-frame');\n  previewFr.addEventListener('click', handleRedrawFrame);\n  var btnDeleteFrame = document.querySelector('.delete-frame');\n  btnDeleteFrame.addEventListener('click', handleBtnDelete);\n  var btnDuplicateFrame = document.querySelector('.duplicate-frame');\n  btnDuplicateFrame.addEventListener('click', handleBtnDuplicate);\n  var frames = document.querySelector('.preview-frame');\n  frames.addEventListener('click', handleRedrawFrame);\n}\n\nfunction frameFunc() {\n  var frame = window.document.querySelector('.frame-current');\n  var newFrame = frame.cloneNode(true);\n  var btnAddFrame = document.querySelector('.btn-addframe');\n  btnAddFrame.addEventListener('click', function () {\n    handlerAddFrame(newFrame);\n    cleanCanvas();\n    ctx.globalCompositeOperation = 'source-over';\n    Object(_screens_preview_preview__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  });\n}\n\n//# sourceURL=webpack:///./src/components/frames-list/frame.js?");

/***/ }),

/***/ "./src/components/frames-list/frameRender.js":
/*!***************************************************!*\
  !*** ./src/components/frames-list/frameRender.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return renderFrames; });\nfunction renderFrames() {\n  var frameHtml = \"<button class=\\\"btn-addframe\\\"><div></div>Add frame</button>\\n<div class=\\\"frame-panel\\\">       \\n<div class=\\\"frame-current\\\">\\n    <div class=\\\"btn-frame\\\">\\n            <div class=\\\"number-frame\\\">1</div>\\n            <button class=\\\"delete-frame\\\"></button>\\n    </div>\\n    <div class=\\\"preview-frame\\\"></div>\\n    <div class=\\\"btn-frame\\\">\\n            <button class=\\\"replace-frame\\\"></button>\\n            <button class=\\\"duplicate-frame\\\"></button>\\n    </div>\\n</div>\\n</div>\\n\\n</div>\";\n  var frameBlock = window.document.querySelector('.main-frames');\n  frameBlock.innerHTML = frameHtml;\n}\n\n//# sourceURL=webpack:///./src/components/frames-list/frameRender.js?");

/***/ }),

/***/ "./src/components/loading/verticalMenu.js":
/*!************************************************!*\
  !*** ./src/components/loading/verticalMenu.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return drawVerticalMenu; });\nfunction drawVerticalMenu() {\n  var verticalMenu = \" <div class=\\\"menu-vertical\\\">\\n                          <div class=\\\"btn-save\\\">Save</div>\\n                        </div>\\n                        <div class=\\\"drawing-menu\\\">\\n                        <div class=\\\"drawing-content\\\"></div>\\n                        </div>\\n                        </div>\";\n  var menuBlock = window.document.querySelector('.main-menu-vertical');\n  menuBlock.innerHTML = verticalMenu;\n  var menu = window.document.querySelector('.menu-vertical');\n  var drawingMenu = window.document.querySelector('.drawing-menu');\n  var content = window.document.querySelector('.drawing-content');\n  var btnSave = window.document.querySelector('.btn-save');\n  var isShow = false;\n\n  function show() {\n    menu.style.right = '220px';\n    drawingMenu.style.width = '0px';\n    content.style.display = 'block';\n  }\n\n  function close() {\n    menu.style.right = '0px';\n    drawingMenu.style.width = '0px';\n    content.style.display = 'none';\n  }\n\n  btnSave.addEventListener('click', function () {\n    if (isShow === false) {\n      show();\n      isShow = true;\n    } else {\n      close();\n      isShow = false;\n    }\n  });\n}\n\n//# sourceURL=webpack:///./src/components/loading/verticalMenu.js?");

/***/ }),

/***/ "./src/components/modal-dialog/bucket.js":
/*!***********************************************!*\
  !*** ./src/components/modal-dialog/bucket.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return paintAll; });\n/* harmony import */ var _fill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fill */ \"./src/components/modal-dialog/fill.js\");\n\nvar canvas = window.document.querySelector('.canvas');\nvar ctx = canvas.getContext('2d');\nfunction paintAll() {\n  ctx.fillStyle = Object(_fill__WEBPACK_IMPORTED_MODULE_0__[\"defineColor\"])();\n  ctx.fillRect(0, 0, canvas.clientWidth, canvas.height);\n}\n\n//# sourceURL=webpack:///./src/components/modal-dialog/bucket.js?");

/***/ }),

/***/ "./src/components/modal-dialog/fill.js":
/*!*********************************************!*\
  !*** ./src/components/modal-dialog/fill.js ***!
  \*********************************************/
/*! exports provided: fill, countRef, sizePixelRef, defineColor, defineSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fill\", function() { return fill; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"countRef\", function() { return countRef; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sizePixelRef\", function() { return sizePixelRef; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"defineColor\", function() { return defineColor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"defineSize\", function() { return defineSize; });\n/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ \"./src/components/modal-dialog/global.js\");\n\nvar count = 32;\nvar sizePixel = _global__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].width / count;\nvar formChooseSize = window.document.querySelector('.form-size');\nvar sizeCanvas = window.document.querySelector('.information-size');\n\nfunction defineSize() {\n  formChooseSize.addEventListener('change', function (e) {\n    if (e.target.className === 'size-canvas') {\n      e.target.setAttribute('checked', true);\n      count = e.target.value;\n      sizeCanvas.textContent = \"\".concat(count, \"\\u0445\").concat(count);\n      sizePixel = _global__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].width / count;\n    }\n  });\n}\n\ndefineSize();\nvar currentColor = 'black';\n\nfunction defineColor() {\n  var colorBoxPrimary = window.document.querySelector('.picker-input');\n  var colorPrimary = colorBoxPrimary.value;\n  currentColor = colorPrimary;\n  return currentColor;\n}\n\nfunction fill() {\n  currentColor = defineColor();\n  var x = window.event.layerX;\n  var y = window.event.layerY;\n  _global__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = currentColor;\n  _global__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(Math.floor(x / sizePixel) * sizePixel, Math.floor(y / sizePixel) * sizePixel, sizePixel, sizePixel);\n}\n\nvar countRef = count;\nvar sizePixelRef = sizePixel;\n\n\n//# sourceURL=webpack:///./src/components/modal-dialog/fill.js?");

/***/ }),

/***/ "./src/components/modal-dialog/global.js":
/*!***********************************************!*\
  !*** ./src/components/modal-dialog/global.js ***!
  \***********************************************/
/*! exports provided: canvas, ctx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"canvas\", function() { return canvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ctx\", function() { return ctx; });\nvar canvas = window.document.querySelector('.canvas');\nvar ctx = canvas.getContext('2d');\n\n\n//# sourceURL=webpack:///./src/components/modal-dialog/global.js?");

/***/ }),

/***/ "./src/components/modal-dialog/lightening.js":
/*!***************************************************!*\
  !*** ./src/components/modal-dialog/lightening.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return lighteningAndDithering; });\n/* harmony import */ var _fill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fill */ \"./src/components/modal-dialog/fill.js\");\n/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global */ \"./src/components/modal-dialog/global.js\");\n/* harmony import */ var _toHexUtilit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toHexUtilit */ \"./src/components/modal-dialog/toHexUtilit.js\");\n/* harmony import */ var _picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./picker */ \"./src/components/modal-dialog/picker.js\");\n\n\n\n\nfunction lighteningAndDithering(operator) {\n  var x = window.event.layerX;\n  var y = window.event.layerY;\n  var colourRGB = Object(_picker__WEBPACK_IMPORTED_MODULE_3__[\"defineColor\"])(x, y);\n  var hslColour = Object(_toHexUtilit__WEBPACK_IMPORTED_MODULE_2__[\"rgbToHSl\"])(colourRGB[0], colourRGB[1], colourRGB[2]);\n  var l = hslColour[2];\n\n  if (operator === '+') {\n    l += 5;\n  } else {\n    l -= 5;\n  }\n\n  hslColour.splice(-1, 1, l);\n  var colour = \"hsl(\".concat(hslColour[0], \",\").concat(hslColour[1], \"%,\").concat(hslColour[2], \"%)\");\n  _global__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"].fillStyle = colour;\n  _global__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"].fillRect(Math.floor(x / _fill__WEBPACK_IMPORTED_MODULE_0__[\"sizePixelRef\"]) * _fill__WEBPACK_IMPORTED_MODULE_0__[\"sizePixelRef\"], Math.floor(y / _fill__WEBPACK_IMPORTED_MODULE_0__[\"sizePixelRef\"]) * _fill__WEBPACK_IMPORTED_MODULE_0__[\"sizePixelRef\"], _fill__WEBPACK_IMPORTED_MODULE_0__[\"sizePixelRef\"], _fill__WEBPACK_IMPORTED_MODULE_0__[\"sizePixelRef\"]);\n}\n\n//# sourceURL=webpack:///./src/components/modal-dialog/lightening.js?");

/***/ }),

/***/ "./src/components/modal-dialog/pen.js":
/*!********************************************!*\
  !*** ./src/components/modal-dialog/pen.js ***!
  \********************************************/
/*! exports provided: startDraw, draw, finishDraw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startDraw\", function() { return startDraw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"draw\", function() { return draw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"finishDraw\", function() { return finishDraw; });\n/* harmony import */ var _fill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fill */ \"./src/components/modal-dialog/fill.js\");\n/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global */ \"./src/components/modal-dialog/global.js\");\n\n\nvar isDraw = false;\n\nfunction startDraw(event, color) {\n  isDraw = true;\n  _global__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"].beginPath();\n  _global__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"].moveTo(event.layerX, event.layerY);\n  Object(_fill__WEBPACK_IMPORTED_MODULE_0__[\"fill\"])(color);\n}\n\nfunction draw(event, color) {\n  if (isDraw) {\n    _global__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"].lineTo(event.layerX, event.layerY);\n    Object(_fill__WEBPACK_IMPORTED_MODULE_0__[\"fill\"])(color);\n  }\n}\n\nfunction finishDraw() {\n  isDraw = false;\n  _global__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"].closePath();\n}\n\n\n\n//# sourceURL=webpack:///./src/components/modal-dialog/pen.js?");

/***/ }),

/***/ "./src/components/modal-dialog/picker.js":
/*!***********************************************!*\
  !*** ./src/components/modal-dialog/picker.js ***!
  \***********************************************/
/*! exports provided: pick, defineColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pick\", function() { return pick; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"defineColor\", function() { return defineColor; });\n/* harmony import */ var _toHexUtilit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toHexUtilit */ \"./src/components/modal-dialog/toHexUtilit.js\");\n\nvar canvas = window.document.querySelector('.canvas');\nvar ctx = canvas.getContext('2d');\n\nfunction defineColor(coordX, coordY) {\n  var pixel = ctx.getImageData(coordX, coordY, 1, 1);\n  var dataColor = pixel.data;\n  return dataColor;\n}\n\nfunction pick() {\n  var x = window.event.layerX;\n  var y = window.event.layerY;\n  var colour = defineColor(x, y);\n  var r = colour[0];\n  var g = colour[1];\n  var b = colour[2];\n  return Object(_toHexUtilit__WEBPACK_IMPORTED_MODULE_0__[\"rgbToHex\"])(r, g, b);\n}\n\n\n\n//# sourceURL=webpack:///./src/components/modal-dialog/picker.js?");

/***/ }),

/***/ "./src/components/modal-dialog/stroke.js":
/*!***********************************************!*\
  !*** ./src/components/modal-dialog/stroke.js ***!
  \***********************************************/
/*! exports provided: startStrokeDraw, finishStrokeDraw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startStrokeDraw\", function() { return startStrokeDraw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"finishStrokeDraw\", function() { return finishStrokeDraw; });\n/* harmony import */ var _fill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fill */ \"./src/components/modal-dialog/fill.js\");\n/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global */ \"./src/components/modal-dialog/global.js\");\n\n\n\nfunction startStrokeDraw(event) {\n  _global__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"].beginPath();\n  _global__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"].fillStyle = 'green';\n  _global__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"].moveTo(event.layerX, event.layerY);\n}\n\nfunction finishStrokeDraw(event) {\n  _global__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"].lineTo(event.layerX, event.layerY);\n  _global__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"].closePath();\n  var colour = Object(_fill__WEBPACK_IMPORTED_MODULE_0__[\"defineColor\"])();\n  _global__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"].lineCap = 'square';\n  _global__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"].strokeStyle = colour;\n  _global__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"].lineWidth = _fill__WEBPACK_IMPORTED_MODULE_0__[\"sizePixelRef\"];\n  _global__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"].stroke();\n}\n\n\n\n//# sourceURL=webpack:///./src/components/modal-dialog/stroke.js?");

/***/ }),

/***/ "./src/components/modal-dialog/toHexUtilit.js":
/*!****************************************************!*\
  !*** ./src/components/modal-dialog/toHexUtilit.js ***!
  \****************************************************/
/*! exports provided: componentToHex, rgbToHex, rgbToHSl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"componentToHex\", function() { return componentToHex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rgbToHex\", function() { return rgbToHex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rgbToHSl\", function() { return rgbToHSl; });\nfunction componentToHex(component) {\n  var hex = component.toString(16);\n  return hex.length === 1 ? \"0\".concat(hex) : hex;\n}\n\nfunction rgbToHex(r, g, b) {\n  return \"#\".concat(componentToHex(r) + componentToHex(g) + componentToHex(b));\n}\n\nfunction rgbToHSl(value1, value2, value3) {\n  var r = value1;\n  var g = value2;\n  var b = value3;\n  r /= 255;\n  g /= 255;\n  b /= 255;\n  var max = Math.max(r, g, b);\n  var min = Math.min(r, g, b);\n  var h = 0;\n  var s = 0;\n  var l = (max + min) / 2;\n\n  if (max !== min) {\n    if (l < 0.5) {\n      s = (max - min) / (max + min);\n    } else {\n      s = (max - min) / (0.2 - max - min);\n    }\n\n    if (r === max) {\n      h = (g - b) / (max - min);\n    } else if (g === max) {\n      h = 2 + (b - r) / (max - min);\n    } else {\n      h = 4 + (r - g) / (max - min);\n    }\n  }\n\n  h *= 60;\n\n  if (h < 0) {\n    h += 360;\n  }\n\n  return [h, s * 100, l * 100];\n}\n\n\n\n//# sourceURL=webpack:///./src/components/modal-dialog/toHexUtilit.js?");

/***/ }),

/***/ "./src/components/modal-dialog/toolsRender.js":
/*!****************************************************!*\
  !*** ./src/components/modal-dialog/toolsRender.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return renderTools; });\nfunction renderTools() {\n  var toolsHtml = \"\\n    <div class=\\\"size\\\">\\n    <div><div data-size=\\\"1px\\\" active></div></div>\\n    <div><div data-size=\\\"4px\\\"></div></div>\\n    <div><div data-size=\\\"8px\\\"></div></div>\\n    <div><div data-size=\\\"16px\\\"></div></div>\\n    </div>\\n    <div class=\\\"buttons\\\">\\n    <div class=\\\"button-pen\\\"></div>\\n    <div class=\\\"button-paintall\\\"></div>\\n    <div class=\\\"button-eraser\\\"></div>\\n    <div class=\\\"button-stroke\\\"></div>\\n    <div class=\\\"button-lightening\\\"></div>\\n    <div class=\\\"button-dithering\\\"></div>\\n    <div class=\\\"button-picker\\\"></div>\\n    </div>\\n    <div class=\\\"picker\\\">\\n    <div>\\n    <p class=\\\"picker-label\\\">Primary color</p>\\n    <input type=\\\"color\\\" class=\\\"picker-input\\\" value=\\\"#000000\\\">\\n    </div>\\n    <div>\\n    <p class=\\\"picker-label\\\">Secondary color</p>\\n    <input type=\\\"color\\\" class=\\\"picker-input\\\"\\n           value=\\\"#3d3d3d\\\">\\n    </div>\\n    </div>\\n    <div class=\\\"picker-box\\\"></div>\";\n  var tools = window.document.querySelector('.main-tools');\n  tools.innerHTML = toolsHtml;\n}\n\n//# sourceURL=webpack:///./src/components/modal-dialog/toolsRender.js?");

/***/ }),

/***/ "./src/screens/canvas/index.js":
/*!*************************************!*\
  !*** ./src/screens/canvas/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return init; });\n/* harmony import */ var _components_modal_dialog_pen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/modal-dialog/pen */ \"./src/components/modal-dialog/pen.js\");\n/* harmony import */ var _components_modal_dialog_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/modal-dialog/picker */ \"./src/components/modal-dialog/picker.js\");\n/* harmony import */ var _components_modal_dialog_bucket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/modal-dialog/bucket */ \"./src/components/modal-dialog/bucket.js\");\n/* harmony import */ var _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/modal-dialog/global */ \"./src/components/modal-dialog/global.js\");\n/* harmony import */ var _components_modal_dialog_stroke__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/modal-dialog/stroke */ \"./src/components/modal-dialog/stroke.js\");\n/* harmony import */ var _components_modal_dialog_lightening__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/modal-dialog/lightening */ \"./src/components/modal-dialog/lightening.js\");\n\n\n\n\n\n\nvar currentTool = '';\nvar currentCoordinateCanvas = window.document.querySelector('.information-coordinate');\nvar sizeCanvas = window.document.querySelector('.information-size');\n\nfunction defineColor() {\n  var colorBox = window.document.querySelector('.picker-box');\n  var color = Object(_components_modal_dialog_picker__WEBPACK_IMPORTED_MODULE_1__[\"pick\"])();\n  colorBox.style.backgroundColor = color;\n}\n\nfunction setPrimaryColor(color) {\n  var colorBoxPrimary = window.document.querySelector('.picker-input');\n  colorBoxPrimary.value = color;\n}\n\nfunction setSecondaryColor(color) {\n  var colorBoxPrimary = window.document.querySelectorAll('.picker-input');\n  colorBoxPrimary[1].value = color;\n}\n\nfunction defineCoordinate(count) {\n  var x = window.event.layerX;\n  var y = window.event.layerY;\n  var pix = _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].width / count;\n  var coordinateXDefineCount = Math.floor(x / pix);\n  var coordinateYDefineCount = Math.floor(y / pix);\n  return \"\".concat(coordinateXDefineCount, \":\").concat(coordinateYDefineCount);\n}\n\nfunction handleSetNullCoordinate() {\n  currentCoordinateCanvas.textContent = '00:00';\n}\n\nfunction handleLightening() {\n  Object(_components_modal_dialog_lightening__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('+');\n}\n\nfunction handleDithering() {\n  Object(_components_modal_dialog_lightening__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('-');\n}\n\nfunction init() {\n  var ctx = _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].getContext('2d');\n  var eventTool = window.document.querySelector('.buttons');\n  _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].addEventListener('mousemove', function () {\n    var count = parseInt(sizeCanvas.textContent, 10);\n    var coordinates = defineCoordinate(count);\n    currentCoordinateCanvas.textContent = coordinates;\n  });\n  _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].addEventListener('mouseleave', handleSetNullCoordinate);\n\n  function defineTool(e) {\n    if (e.target.parentElement.className === 'buttons') {\n      if (currentTool === '') {\n        currentTool = e.target.className;\n        e.target.style.backgroundColor = 'aqua';\n      } else {\n        window.document.querySelector(\".\".concat(currentTool)).style.backgroundColor = '#2d2d2d';\n        currentTool = e.target.className;\n        e.target.style.backgroundColor = 'aqua';\n      }\n\n      if (currentTool === 'button-pen') {\n        ctx.globalCompositeOperation = 'source-over';\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('mousemove', defineColor);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('click', setPrimaryColor);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('click', _components_modal_dialog_bucket__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('mousedown', _components_modal_dialog_stroke__WEBPACK_IMPORTED_MODULE_4__[\"startStrokeDraw\"]);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('mouseup', _components_modal_dialog_stroke__WEBPACK_IMPORTED_MODULE_4__[\"finishStrokeDraw\"]);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('click', handleLightening);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('click', handleDithering);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].addEventListener('mousedown', _components_modal_dialog_pen__WEBPACK_IMPORTED_MODULE_0__[\"startDraw\"]);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].addEventListener('mousemove', _components_modal_dialog_pen__WEBPACK_IMPORTED_MODULE_0__[\"draw\"]);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].addEventListener('mouseup', _components_modal_dialog_pen__WEBPACK_IMPORTED_MODULE_0__[\"finishDraw\"]);\n      }\n\n      if (currentTool === 'button-eraser') {\n        ctx.globalCompositeOperation = 'destination-out';\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('mousemove', defineColor);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('click', setPrimaryColor);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('click', _components_modal_dialog_bucket__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('mousedown', _components_modal_dialog_stroke__WEBPACK_IMPORTED_MODULE_4__[\"startStrokeDraw\"]);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('mouseup', _components_modal_dialog_stroke__WEBPACK_IMPORTED_MODULE_4__[\"finishStrokeDraw\"]);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('click', handleLightening);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('click', handleDithering);\n      }\n\n      if (currentTool === 'button-picker') {\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('mousedown', _components_modal_dialog_pen__WEBPACK_IMPORTED_MODULE_0__[\"startDraw\"]);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('mousemove', _components_modal_dialog_pen__WEBPACK_IMPORTED_MODULE_0__[\"draw\"]);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('mouseup', _components_modal_dialog_pen__WEBPACK_IMPORTED_MODULE_0__[\"finishDraw\"]);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('click', _components_modal_dialog_bucket__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('mousedown', _components_modal_dialog_stroke__WEBPACK_IMPORTED_MODULE_4__[\"startStrokeDraw\"]);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('mouseup', _components_modal_dialog_stroke__WEBPACK_IMPORTED_MODULE_4__[\"finishStrokeDraw\"]);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('click', handleLightening);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('click', handleDithering);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].addEventListener('mousemove', defineColor);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].addEventListener('click', function () {\n          var color = Object(_components_modal_dialog_picker__WEBPACK_IMPORTED_MODULE_1__[\"pick\"])();\n          setPrimaryColor(color);\n        });\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].addEventListener('contextmenu', function (ev) {\n          ev.preventDefault();\n          var color = Object(_components_modal_dialog_picker__WEBPACK_IMPORTED_MODULE_1__[\"pick\"])();\n          setSecondaryColor(color);\n        });\n      }\n\n      if (currentTool === 'button-paintall') {\n        ctx.globalCompositeOperation = 'source-over';\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('mousedown', _components_modal_dialog_pen__WEBPACK_IMPORTED_MODULE_0__[\"startDraw\"]);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('mousemove', _components_modal_dialog_pen__WEBPACK_IMPORTED_MODULE_0__[\"draw\"]);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('mouseup', _components_modal_dialog_pen__WEBPACK_IMPORTED_MODULE_0__[\"finishDraw\"]);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('mousemove', defineColor);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('click', setPrimaryColor);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('mousedown', _components_modal_dialog_stroke__WEBPACK_IMPORTED_MODULE_4__[\"startStrokeDraw\"]);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('mouseup', _components_modal_dialog_stroke__WEBPACK_IMPORTED_MODULE_4__[\"finishStrokeDraw\"]);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('click', handleLightening);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('click', handleDithering);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].addEventListener('click', _components_modal_dialog_bucket__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n      }\n\n      if (currentTool === 'button-stroke') {\n        ctx.globalCompositeOperation = 'source-over';\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('mousedown', _components_modal_dialog_pen__WEBPACK_IMPORTED_MODULE_0__[\"startDraw\"]);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('mousemove', _components_modal_dialog_pen__WEBPACK_IMPORTED_MODULE_0__[\"draw\"]);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('mouseup', _components_modal_dialog_pen__WEBPACK_IMPORTED_MODULE_0__[\"finishDraw\"]);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('mousemove', defineColor);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('click', setPrimaryColor);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('click', _components_modal_dialog_bucket__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('click', handleLightening);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('click', handleDithering);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].addEventListener('mousedown', _components_modal_dialog_stroke__WEBPACK_IMPORTED_MODULE_4__[\"startStrokeDraw\"]);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].addEventListener('mouseup', _components_modal_dialog_stroke__WEBPACK_IMPORTED_MODULE_4__[\"finishStrokeDraw\"]);\n      }\n\n      if (currentTool === 'button-lightening') {\n        ctx.globalCompositeOperation = 'source-over';\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('mousedown', _components_modal_dialog_pen__WEBPACK_IMPORTED_MODULE_0__[\"startDraw\"]);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('mousemove', _components_modal_dialog_pen__WEBPACK_IMPORTED_MODULE_0__[\"draw\"]);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('mouseup', _components_modal_dialog_pen__WEBPACK_IMPORTED_MODULE_0__[\"finishDraw\"]);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('mousemove', defineColor);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('click', setPrimaryColor);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('click', _components_modal_dialog_bucket__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('mousedown', _components_modal_dialog_stroke__WEBPACK_IMPORTED_MODULE_4__[\"startStrokeDraw\"]);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('mouseup', _components_modal_dialog_stroke__WEBPACK_IMPORTED_MODULE_4__[\"finishStrokeDraw\"]);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('click', handleDithering);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].addEventListener('click', handleLightening);\n      }\n\n      if (currentTool === 'button-dithering') {\n        ctx.globalCompositeOperation = 'source-over';\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('mousedown', _components_modal_dialog_pen__WEBPACK_IMPORTED_MODULE_0__[\"startDraw\"]);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('mousemove', _components_modal_dialog_pen__WEBPACK_IMPORTED_MODULE_0__[\"draw\"]);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('mouseup', _components_modal_dialog_pen__WEBPACK_IMPORTED_MODULE_0__[\"finishDraw\"]);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('mousemove', defineColor);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('click', setPrimaryColor);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('click', _components_modal_dialog_bucket__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('mousedown', _components_modal_dialog_stroke__WEBPACK_IMPORTED_MODULE_4__[\"startStrokeDraw\"]);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('mouseup', _components_modal_dialog_stroke__WEBPACK_IMPORTED_MODULE_4__[\"finishStrokeDraw\"]);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].removeEventListener('click', handleLightening);\n        _components_modal_dialog_global__WEBPACK_IMPORTED_MODULE_3__[\"canvas\"].addEventListener('click', handleDithering);\n      }\n    }\n  }\n\n  eventTool.addEventListener('click', defineTool);\n}\n\n//# sourceURL=webpack:///./src/screens/canvas/index.js?");

/***/ }),

/***/ "./src/screens/preview/preview.js":
/*!****************************************!*\
  !*** ./src/screens/preview/preview.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return preview; });\nfunction handleClickFPS() {\n  var saveFrame = document.querySelectorAll('.frame');\n  var screenPreview = document.querySelector('.preview-animation');\n  var fps = document.querySelector('.fps').value;\n  var countFrame = saveFrame.length;\n  var i = 0;\n\n  var step = function stepInt() {\n    if (i < countFrame) {\n      screenPreview.style.backgroundSize = 'contain';\n      screenPreview.style.backgroundRepeat = 'no-repeat';\n      screenPreview.style.backgroundPositionX = '50%';\n      screenPreview.style.backgroundImage = saveFrame[i].style.backgroundImage;\n      i += 1;\n    }\n  };\n\n  setInterval(step, 1000 / fps);\n}\n\nfunction handleFullScreen(element) {\n  element.target.parentNode.webkitRequestFullscreen();\n}\n\nfunction preview() {\n  var countFPS = document.querySelector('.fps');\n  countFPS.addEventListener('input', handleClickFPS);\n  var screenPreview = document.querySelector('.preview-animation');\n  screenPreview.addEventListener('dblclick', handleFullScreen);\n}\n\n//# sourceURL=webpack:///./src/screens/preview/preview.js?");

/***/ }),

/***/ "./src/screens/preview/previewRender.js":
/*!**********************************************!*\
  !*** ./src/screens/preview/previewRender.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return renderPreview; });\nfunction renderPreview() {\n  var previewHtml = \"<div class=\\\"preview\\\">\\n                      <div class=\\\"preview-animation\\\"></div>\\n                      <div class=\\\"fps-panel\\\">\\n                          <div class=\\\"value-fps\\\">0fps</div>\\n                          <input class=\\\"fps\\\" type=\\\"range\\\" min=\\\"0\\\" max=\\\"20\\\" step=\\\"1\\\" value=\\\"0\\\">\\n                      </div>\\n                      </div>\";\n  var preview = window.document.querySelector('.main-preview');\n  preview.innerHTML = previewHtml;\n  window.document.querySelector('.fps').addEventListener('input', function () {\n    var valueFps = window.document.querySelector('.fps').value;\n    var fps = window.document.querySelector('.value-fps');\n    fps.innerHTML = \"\".concat(valueFps, \" FPS\");\n  });\n}\n\n//# sourceURL=webpack:///./src/screens/preview/previewRender.js?");

/***/ })

/******/ });