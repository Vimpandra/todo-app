/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todoItemFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItemFactory */ \"./src/todoItemFactory.js\");\n/* harmony import */ var _listFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listFactory */ \"./src/listFactory.js\");\n\n\n\nconst myList = new _listFactory__WEBPACK_IMPORTED_MODULE_1__.TodoList(`Today's To Do`);\n\nconst smokeWeed = new _todoItemFactory__WEBPACK_IMPORTED_MODULE_0__.TodoItem(`Smoke Weed`, `Gotta do it everyday`, `Urgent`, `4:20`);\nconst dohw = new _todoItemFactory__WEBPACK_IMPORTED_MODULE_0__.TodoItem(`Do homework`, `Science and math`, `Whenever`, `Tomorrow`);\n\nsmokeWeed.addToList(myList.list);\ndohw.addToList(myList.list);\n\nconsole.log(myList);\n\nconst DOMcontrol = (function() {\n    function renderList(list) {\n        const content = document.getElementById(`content`);\n\n        const listBody = document.createElement(`div`);\n        content.appendChild(listBody);\n        listBody.classList.add(`listCard`);\n\n        const listTitle = document.createElement(`h2`);\n        listTitle.textContent = list.title;\n        listBody.appendChild(listTitle);\n\n        const listContent = document.createElement(`div`);\n        listContent.classList.add(`listContent`);\n        listBody.appendChild(listContent);\n\n        for (let i = 0; i < list.list.length; i++) {\n            const listItem = document.createElement(`div`);\n            listItem.classList.add(`listItem`);\n            listContent.appendChild(listItem);\n\n            const itemTitle = document.createElement(`h3`);\n            itemTitle.textContent = list.list[i].title;\n            listItem.appendChild(itemTitle);\n\n            const itemDesc = document.createElement(`p`);\n            itemDesc.classList.add(`itemDesc`);\n            itemDesc.textContent = list.list[i].desc;\n            listItem.appendChild(itemDesc);\n\n            const itemPrio = document.createElement(`p`);\n            itemPrio.classList.add(`itemPrio`)\n            itemPrio.innerHTML = `Priority: <strong>${list.list[i].prio}</strong>`;\n            listItem.appendChild(itemPrio);\n\n            const itemDue = document.createElement(`p`);\n            itemDue.classList.add(`itemDue`);\n            itemDue.textContent = `Due: ${list.list[i].due}`;\n            listItem.appendChild(itemDue);\n        }\n\n    };\n\n    renderList(myList);\n})();\n\n//# sourceURL=webpack://todo-app/./src/index.js?");

/***/ }),

/***/ "./src/listFactory.js":
/*!****************************!*\
  !*** ./src/listFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TodoList\": () => (/* binding */ TodoList)\n/* harmony export */ });\nfunction TodoList(title) {\n    this.title = title;\n    this.list = [];\n};\n\n\n\n//# sourceURL=webpack://todo-app/./src/listFactory.js?");

/***/ }),

/***/ "./src/todoItemFactory.js":
/*!********************************!*\
  !*** ./src/todoItemFactory.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TodoItem\": () => (/* binding */ TodoItem)\n/* harmony export */ });\nfunction TodoItem(title, desc, prio, due) {\n    this.title = title;\n    this.desc = desc;\n    this.prio = prio;\n    this.due = due;\n};\n\nTodoItem.prototype.addToList = function(list) {\n    list.push(this);\n} \n\n\n\n//# sourceURL=webpack://todo-app/./src/todoItemFactory.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;