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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return frameFunc; });\n/* harmony import */ var _screens_preview_preview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../screens/preview/preview */ \"./src/screens/preview/preview.js\");\n/* harmony import */ var _modal_dialog_fill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modal-dialog/fill */ \"./src/components/modal-dialog/fill.js\");\n\n\nvar stateCanvas = [];\nvar stateFrame = [];\nvar countFrame = 1;\nvar canvas = document.querySelector('.canvas');\nvar ctx = canvas.getContext('2d');\n\nfunction cleanCanvas() {\n  ctx.globalCompositeOperation = 'destination-out';\n  ctx.fillStyle = '#1d1d1d';\n  ctx.moveTo(0, 0);\n  ctx.fillRect(0, 0, canvas.width, canvas.height);\n}\n\nfunction saveJPG() {\n  var imageJPG = canvas.toDataURL('image/jpg', 1);\n  return imageJPG;\n}\n\nfunction saveStateCanvas() {\n  for (var j = 0; j < _modal_dialog_fill__WEBPACK_IMPORTED_MODULE_1__[\"countRef\"]; j += 1) {\n    var tempArray = [];\n\n    for (var i = 0; i < _modal_dialog_fill__WEBPACK_IMPORTED_MODULE_1__[\"countRef\"]; i += 1) {\n      var img = ctx.getImageData(i * _modal_dialog_fill__WEBPACK_IMPORTED_MODULE_1__[\"sizePixelRef\"], j * _modal_dialog_fill__WEBPACK_IMPORTED_MODULE_1__[\"sizePixelRef\"], _modal_dialog_fill__WEBPACK_IMPORTED_MODULE_1__[\"sizePixelRef\"], _modal_dialog_fill__WEBPACK_IMPORTED_MODULE_1__[\"sizePixelRef\"]);\n      var dataColor = img.data;\n      var rgba = \"rgba(\".concat(dataColor[0], \",\").concat(dataColor[1], \",\").concat(dataColor[2], \",\").concat(dataColor[3], \")\");\n      tempArray[i] = rgba;\n    }\n\n    stateCanvas.push(tempArray);\n  }\n\n  return stateCanvas;\n}\n\nfunction redrawFrame(numberFrame) {\n  var frame = stateFrame[numberFrame];\n\n  for (var j = 0; j < _modal_dialog_fill__WEBPACK_IMPORTED_MODULE_1__[\"countRef\"]; j += 1) {\n    for (var i = 0; i < _modal_dialog_fill__WEBPACK_IMPORTED_MODULE_1__[\"countRef\"]; i += 1) {\n      ctx.globalCompositeOperation = 'source-over';\n      ctx.fillStyle = frame[j][i];\n      ctx.fillRect(i * _modal_dialog_fill__WEBPACK_IMPORTED_MODULE_1__[\"sizePixelRef\"], j * _modal_dialog_fill__WEBPACK_IMPORTED_MODULE_1__[\"sizePixelRef\"], _modal_dialog_fill__WEBPACK_IMPORTED_MODULE_1__[\"sizePixelRef\"], _modal_dialog_fill__WEBPACK_IMPORTED_MODULE_1__[\"sizePixelRef\"]);\n    }\n  }\n}\n\nfunction changeOnNonActiveState(element) {\n  var frameCurrent = element;\n  frameCurrent.className = 'frame';\n  frameCurrent.querySelector('.delete-frame').style.visibility = 'visible';\n  frameCurrent.querySelector('.duplicate-frame').style.visibility = 'visible';\n  frameCurrent.querySelector('.replace-frame').style.visibility = 'visible';\n}\n\nfunction redrawNumber(number) {\n  var numberFrame = document.querySelectorAll('.number-frame');\n\n  for (var i = 0; i < number; i += 1) {\n    numberFrame[i].textContent = i + 1;\n  }\n}\n\nfunction handlerBtnDelete(e) {\n  var removedFrame = e.target.parentNode.parentNode;\n  var position = removedFrame.querySelector('.number-frame').textContent - 1;\n  stateFrame.splice(position, 1);\n  countFrame -= 1;\n  removedFrame.remove();\n  redrawNumber(countFrame);\n}\n\nfunction handlerRedrawFrame(e) {\n  var numberFrame = e.target.parentNode.querySelector('.number-frame');\n  var position = numberFrame.textContent - 1;\n  stateFrame.splice(position + 1, 1, saveStateCanvas());\n  var currentFrame = document.querySelector('.frame-current');\n  var numberCurrentFrame = currentFrame.querySelector('.number-frame').textContent;\n  stateFrame.splice(numberCurrentFrame - 1, 1, saveStateCanvas());\n  currentFrame.style.backgroundSize = 'cover';\n  currentFrame.style.backgroundImage = \"url(\".concat(saveJPG(), \")\");\n  changeOnNonActiveState(currentFrame);\n  e.target.parentNode.className = 'frame-current';\n  redrawFrame(position);\n}\n\nfunction handlerBtnDuplicate(e) {\n  var copyingFrame = e.target.parentNode.parentNode;\n  var position = copyingFrame.querySelector('.number-frame').textContent - 1;\n  stateFrame.splice(position + 1, 0, stateFrame[position]);\n  var copiedFrame = copyingFrame.cloneNode(true);\n  var btnDeleteFrame = copiedFrame.querySelector('.delete-frame');\n  btnDeleteFrame.addEventListener('click', handlerBtnDelete);\n  var btnDuplicateFrame = copiedFrame.querySelector('.duplicate-frame');\n  btnDuplicateFrame.addEventListener('click', handlerBtnDuplicate);\n  var frames = copiedFrame.querySelector('.preview-frame');\n  frames.addEventListener('click', handlerRedrawFrame);\n  var framePanel = copyingFrame.parentNode;\n  framePanel.insertBefore(copiedFrame, copyingFrame.nextSibling);\n  countFrame += 1;\n  redrawNumber(countFrame);\n}\n\nfunction handlerAddFrame(newFrame) {\n  var frame = window.document.querySelector('.frame-current');\n  changeOnNonActiveState(frame);\n  var addFrame = newFrame.cloneNode(true);\n  stateFrame.push(saveStateCanvas());\n  frame.style.backgroundSize = 'cover';\n  frame.style.backgroundImage = \"url(\".concat(saveJPG(), \")\");\n  countFrame += 1;\n  var framePanel = document.querySelector('.frame-panel');\n  framePanel.appendChild(addFrame);\n  redrawNumber(countFrame);\n  var previewFr = addFrame.querySelector('.preview-frame');\n  previewFr.addEventListener('click', handlerRedrawFrame);\n  var btnDeleteFrame = document.querySelector('.delete-frame');\n  btnDeleteFrame.addEventListener('click', handlerBtnDelete);\n  var btnDuplicateFrame = document.querySelector('.duplicate-frame');\n  btnDuplicateFrame.addEventListener('click', handlerBtnDuplicate);\n  var frames = document.querySelector('.preview-frame');\n  frames.addEventListener('click', handlerRedrawFrame);\n}\n\nfunction frameFunc() {\n  var frame = window.document.querySelector('.frame-current');\n  var newFrame = frame.cloneNode(true);\n  var btnAddFrame = document.querySelector('.btn-addframe');\n  btnAddFrame.addEventListener('click', function () {\n    handlerAddFrame(newFrame);\n    cleanCanvas();\n    ctx.globalCompositeOperation = 'source-over';\n    Object(_screens_preview_preview__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  });\n}\n\n//# sourceURL=webpack:///./src/components/frames-list/frame.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return paintAll; });\nvar canvas = window.document.querySelector('.canvas');\nvar ctx = canvas.getContext('2d');\nfunction paintAll() {\n  ctx.fillStyle = 'black';\n  ctx.fillRect(0, 0, canvas.clientWidth, canvas.height);\n}\n\n//# sourceURL=webpack:///./src/components/modal-dialog/bucket.js?");

/***/ }),

/***/ "./src/components/modal-dialog/fill.js":
/*!*********************************************!*\
  !*** ./src/components/modal-dialog/fill.js ***!
  \*********************************************/
/*! exports provided: fill, countRef, sizePixelRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fill\", function() { return fill; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"countRef\", function() { return countRef; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sizePixelRef\", function() { return sizePixelRef; });\nvar canvas = window.document.querySelector('.canvas');\nvar ctx = canvas.getContext('2d');\nvar count = 32;\nvar sizePixel = canvas.width / count;\nvar formChooseSize = window.document.querySelector('.form-size');\n\nfunction defineSize() {\n  formChooseSize.addEventListener('change', function (e) {\n    if (e.target.className === 'size-canvas') {\n      e.target.setAttribute('checked', true);\n      count = e.target.value;\n      sizePixel = canvas.width / count;\n    }\n  });\n}\n\ndefineSize();\nvar currentColor = 'black';\n\nfunction fill(color) {\n  var x = window.event.layerX;\n  var y = window.event.layerY;\n  ctx.fillStyle = currentColor || color;\n  ctx.fillRect(Math.floor(x / sizePixel) * sizePixel, Math.floor(y / sizePixel) * sizePixel, sizePixel, sizePixel);\n}\n\nvar countRef = count;\nvar sizePixelRef = sizePixel;\n\n\n//# sourceURL=webpack:///./src/components/modal-dialog/fill.js?");

/***/ }),

/***/ "./src/components/modal-dialog/pen.js":
/*!********************************************!*\
  !*** ./src/components/modal-dialog/pen.js ***!
  \********************************************/
/*! exports provided: startDraw, draw, finishDraw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startDraw\", function() { return startDraw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"draw\", function() { return draw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"finishDraw\", function() { return finishDraw; });\n/* harmony import */ var _fill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fill */ \"./src/components/modal-dialog/fill.js\");\n\nvar canvas = window.document.querySelector('.canvas');\nvar ctx = canvas.getContext('2d');\nvar isDraw = false;\n\nfunction startDraw(event, color) {\n  isDraw = true;\n  ctx.beginPath();\n  ctx.moveTo(event.layerX, event.layerY);\n  Object(_fill__WEBPACK_IMPORTED_MODULE_0__[\"fill\"])(color);\n}\n\nfunction draw(event, color) {\n  if (isDraw) {\n    ctx.lineTo(event.layerX, event.layerY);\n    Object(_fill__WEBPACK_IMPORTED_MODULE_0__[\"fill\"])(color);\n  }\n}\n\nfunction finishDraw() {\n  isDraw = false;\n  ctx.closePath();\n}\n\n\n\n//# sourceURL=webpack:///./src/components/modal-dialog/pen.js?");

/***/ }),

/***/ "./src/components/modal-dialog/picker.js":
/*!***********************************************!*\
  !*** ./src/components/modal-dialog/picker.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return pick; });\nvar canvas = window.document.querySelector('.canvas');\nvar ctx = canvas.getContext('2d');\nfunction pick() {\n  var x = window.event.layerX;\n  var y = window.event.layerY;\n  var pixel = ctx.getImageData(x, y, 1, 1);\n  var dataColor = pixel.data;\n  var rgba = \"rgba(\".concat(dataColor[0], \",\").concat(dataColor[1], \",\").concat(dataColor[2], \",\").concat(dataColor[3], \")\");\n  var colorBox = window.document.querySelector('.picker-box');\n  colorBox.style.backgroundColor = rgba;\n  return rgba;\n}\n\n//# sourceURL=webpack:///./src/components/modal-dialog/picker.js?");

/***/ }),

/***/ "./src/components/modal-dialog/toolsRender.js":
/*!****************************************************!*\
  !*** ./src/components/modal-dialog/toolsRender.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return renderTools; });\nfunction renderTools() {\n  var toolsHtml = \"\\n    <div class=\\\"size\\\">\\n    <div><div data-size=\\\"1px\\\" active></div></div>\\n    <div><div data-size=\\\"4px\\\"></div></div>\\n    <div><div data-size=\\\"8px\\\"></div></div>\\n    <div><div data-size=\\\"16px\\\"></div></div>\\n    </div>\\n    <div class=\\\"buttons\\\">\\n    <div class=\\\"button-pen\\\"></div>\\n    <div class=\\\"button-mirrorpen\\\"></div>\\n    <div class=\\\"button-bucket\\\"></div>\\n    <div class=\\\"button-paintall\\\"></div>\\n    <div class=\\\"button-eraser\\\"></div>\\n    <div class=\\\"button-stroke\\\"></div>\\n    <div class=\\\"button-rectangle\\\"></div>\\n    <div class=\\\"button-circle\\\"></div>\\n    <div class=\\\"button-moove\\\"></div>\\n    <div class=\\\"button-shape\\\"></div>\\n    <div class=\\\"button-lightening\\\"></div>\\n    <div class=\\\"button-dithering\\\"></div>\\n    <div class=\\\"button-picker\\\"></div>\\n    </div>\\n    <div class=\\\"picker-box\\\"></div>\";\n  var tools = window.document.querySelector('.main-tools');\n  tools.innerHTML = toolsHtml;\n}\n\n//# sourceURL=webpack:///./src/components/modal-dialog/toolsRender.js?");

/***/ }),

/***/ "./src/screens/canvas/index.js":
/*!*************************************!*\
  !*** ./src/screens/canvas/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return init; });\n/* harmony import */ var _components_modal_dialog_pen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/modal-dialog/pen */ \"./src/components/modal-dialog/pen.js\");\n/* harmony import */ var _components_modal_dialog_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/modal-dialog/picker */ \"./src/components/modal-dialog/picker.js\");\n/* harmony import */ var _components_modal_dialog_bucket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/modal-dialog/bucket */ \"./src/components/modal-dialog/bucket.js\");\n\n\n\nvar currentTool = '';\nfunction init() {\n  var canvas = window.document.querySelector('.canvas');\n  var ctx = canvas.getContext('2d');\n  var eventTool = window.document.querySelector('.buttons');\n\n  function defineTool(e) {\n    if (e.target.parentElement.className === 'buttons') {\n      if (currentTool === '') {\n        currentTool = e.target.className;\n        e.target.style.backgroundColor = 'aqua';\n      } else {\n        window.document.querySelector(\".\".concat(currentTool)).style.backgroundColor = '#2d2d2d';\n        currentTool = e.target.className;\n        e.target.style.backgroundColor = 'aqua';\n      }\n\n      if (currentTool === 'button-pen') {\n        ctx.globalCompositeOperation = 'source-over';\n        canvas.removeEventListener('click', _components_modal_dialog_picker__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n        canvas.removeEventListener('click', _components_modal_dialog_bucket__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n        canvas.addEventListener('mousedown', _components_modal_dialog_pen__WEBPACK_IMPORTED_MODULE_0__[\"startDraw\"]);\n        canvas.addEventListener('mousemove', _components_modal_dialog_pen__WEBPACK_IMPORTED_MODULE_0__[\"draw\"]);\n        canvas.addEventListener('mouseup', _components_modal_dialog_pen__WEBPACK_IMPORTED_MODULE_0__[\"finishDraw\"]);\n      }\n\n      if (currentTool === 'button-eraser') {\n        ctx.globalCompositeOperation = 'destination-out';\n        canvas.removeEventListener('click', _components_modal_dialog_picker__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n        canvas.removeEventListener('click', _components_modal_dialog_bucket__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n      }\n\n      if (currentTool === 'button-picker') {\n        canvas.removeEventListener('mousedown', _components_modal_dialog_pen__WEBPACK_IMPORTED_MODULE_0__[\"startDraw\"]);\n        canvas.removeEventListener('mousemove', _components_modal_dialog_pen__WEBPACK_IMPORTED_MODULE_0__[\"draw\"]);\n        canvas.removeEventListener('mouseup', _components_modal_dialog_pen__WEBPACK_IMPORTED_MODULE_0__[\"finishDraw\"]);\n        canvas.removeEventListener('click', _components_modal_dialog_bucket__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n        canvas.addEventListener('click', _components_modal_dialog_picker__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n      }\n\n      if (currentTool === 'button-paintall') {\n        canvas.removeEventListener('mousedown', _components_modal_dialog_pen__WEBPACK_IMPORTED_MODULE_0__[\"startDraw\"]);\n        canvas.removeEventListener('mousemove', _components_modal_dialog_pen__WEBPACK_IMPORTED_MODULE_0__[\"draw\"]);\n        canvas.removeEventListener('mouseup', _components_modal_dialog_pen__WEBPACK_IMPORTED_MODULE_0__[\"finishDraw\"]);\n        canvas.removeEventListener('click', _components_modal_dialog_picker__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n        canvas.addEventListener('click', _components_modal_dialog_bucket__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n      }\n    }\n  }\n\n  eventTool.addEventListener('click', defineTool);\n}\n\n//# sourceURL=webpack:///./src/screens/canvas/index.js?");

/***/ }),

/***/ "./src/screens/preview/preview.js":
/*!****************************************!*\
  !*** ./src/screens/preview/preview.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return preview; });\nfunction handlerClickFPS() {\n  var saveFrame = document.querySelectorAll('.frame');\n  var screenPreview = document.querySelector('.preview-animation');\n  var fps = document.querySelector('.fps').value;\n  var countFrame = saveFrame.length;\n  var i = 0;\n\n  var step = function stepInt() {\n    if (i < countFrame) {\n      screenPreview.style.backgroundSize = 'cover';\n      screenPreview.style.backgroundImage = saveFrame[i].style.backgroundImage;\n      i += 1;\n    }\n  };\n\n  setInterval(step, 1000 / fps);\n}\n\nfunction handlerFullScreen(element) {\n  element.target.parentNode.webkitRequestFullscreen();\n}\n\nfunction preview() {\n  var countFPS = document.querySelector('.fps');\n  countFPS.addEventListener('input', handlerClickFPS);\n  var screenPreview = document.querySelector('.preview-animation');\n  screenPreview.addEventListener('dblclick', handlerFullScreen);\n}\n\n//# sourceURL=webpack:///./src/screens/preview/preview.js?");

/***/ }),

/***/ "./src/screens/preview/previewRender.js":
/*!**********************************************!*\
  !*** ./src/screens/preview/previewRender.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return renderPreview; });\nfunction renderPreview() {\n  var previewHtml = \"<div class=\\\"preview\\\">\\n                      <div class=\\\"preview-animation\\\"></div>\\n                      <div class=\\\"fps-panel\\\">\\n                          <div class=\\\"value-fps\\\">0fps</div>\\n                          <input class=\\\"fps\\\" type=\\\"range\\\" min=\\\"0\\\" max=\\\"20\\\" step=\\\"1\\\" value=\\\"0\\\">\\n                      </div>\\n                      </div>\";\n  var preview = window.document.querySelector('.main-preview');\n  preview.innerHTML = previewHtml;\n  window.document.querySelector('.fps').addEventListener('input', function () {\n    var valueFps = window.document.querySelector('.fps').value;\n    window.console.log(valueFps);\n    var fps = window.document.querySelector('.value-fps');\n    fps.innerHTML = \"\".concat(valueFps, \" FPS\");\n  });\n}\n\n//# sourceURL=webpack:///./src/screens/preview/previewRender.js?");

/***/ })

/******/ });