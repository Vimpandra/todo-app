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

/***/ "./src/DOMcontrol.js":
/*!***************************!*\
  !*** ./src/DOMcontrol.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderList\": () => (/* binding */ renderList)\n/* harmony export */ });\nfunction renderList(list) {\n    const content = document.getElementById(`content`);\n\n    const listBody = document.createElement(`div`);\n    content.appendChild(listBody);\n    listBody.classList.add(`listCard`);\n\n    const listTitle = document.createElement(`h2`);\n    listTitle.textContent = list.title;\n    listBody.appendChild(listTitle);\n\n    const listExpandBtn = document.createElement(`button`);\n    listExpandBtn.classList.add(`listExpandBtn`);\n    listExpandBtn.textContent = `-`;\n    listBody.appendChild(listExpandBtn);\n\n    const listContent = document.createElement(`div`);\n    listContent.classList.add(`listContent`);\n    listBody.appendChild(listContent);\n\n    for (let i = 0; i < list.list.length; i++) {\n        const listItem = document.createElement(`div`);\n        listItem.classList.add(`listItem`);\n        listContent.appendChild(listItem);\n\n        const checkBox = document.createElement(`input`);\n        checkBox.setAttribute(`type`, `checkbox`);\n        listItem.appendChild(checkBox);\n\n        const itemTitle = document.createElement(`h3`);\n        itemTitle.textContent = list.list[i].title;\n        listItem.appendChild(itemTitle);\n\n        const itemExpandBtn = document.createElement(`button`);\n        itemExpandBtn.textContent = `-`;\n        itemExpandBtn.classList.add(`itemExpandBtn`);\n        listItem.appendChild(itemExpandBtn);\n\n        const itemDesc = document.createElement(`p`);\n        itemDesc.classList.add(`itemDesc`);\n        itemDesc.textContent = list.list[i].desc;\n        listItem.appendChild(itemDesc);\n\n        const itemPrio = document.createElement(`p`);\n        itemPrio.classList.add(`itemPrio`)\n        itemPrio.innerHTML = `Priority: <strong>${list.list[i].prio}</strong>`;\n        listItem.appendChild(itemPrio);\n\n        const itemDue = document.createElement(`p`);\n        itemDue.classList.add(`itemDue`);\n        itemDue.textContent = `Due: ${list.list[i].due}`;\n        listItem.appendChild(itemDue);\n\n        const itemEditBtn = document.createElement(`div`);\n        itemEditBtn.classList.add(`itemEditBtn`);\n        itemEditBtn.innerHTML = `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-edit\"><path d=\"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\"></path><path d=\"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z\"></path></svg>`;\n        listItem.appendChild(itemEditBtn);\n\n        const itemDelBtn = document.createElement(`div`);\n        itemDelBtn.classList.add(`itemDelBtn`);\n        itemDelBtn.innerHTML = `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-trash-2\"><polyline points=\"3 6 5 6 21 6\"></polyline><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"></path><line x1=\"10\" y1=\"11\" x2=\"10\" y2=\"17\"></line><line x1=\"14\" y1=\"11\" x2=\"14\" y2=\"17\"></line></svg>`;\n        listItem.appendChild(itemDelBtn);\n    };\n\n    const addItemBtn = document.createElement(`button`);\n    addItemBtn.classList.add(`addItemBtn`);\n    addItemBtn.textContent = `+`;\n    listBody.appendChild(addItemBtn);\n};\n\n\n\n//# sourceURL=webpack://todo-app/./src/DOMcontrol.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todoItemFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItemFactory */ \"./src/todoItemFactory.js\");\n/* harmony import */ var _listFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listFactory */ \"./src/listFactory.js\");\n/* harmony import */ var _DOMcontrol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMcontrol */ \"./src/DOMcontrol.js\");\n\n\n\n\nconst myList = new _listFactory__WEBPACK_IMPORTED_MODULE_1__.TodoList(`Today's To Do`);\n\nconst smokeWeed = new _todoItemFactory__WEBPACK_IMPORTED_MODULE_0__.TodoItem(`Smoke Weed`, `Gotta do it everyday`, `Urgent`, `4:20`);\nconst dohw = new _todoItemFactory__WEBPACK_IMPORTED_MODULE_0__.TodoItem(`Do homework`, `Science and math`, `Whenever`, `Tomorrow`);\nconst cycle = new _todoItemFactory__WEBPACK_IMPORTED_MODULE_0__.TodoItem(`Go cycling`, `Gotta cycle at least 20km`, `ASAP`, `Tonight`);\n\nsmokeWeed.addToList(myList.list);\ndohw.addToList(myList.list);\ncycle.addToList(myList.list);\n\n(0,_DOMcontrol__WEBPACK_IMPORTED_MODULE_2__.renderList)(myList)\n\n//# sourceURL=webpack://todo-app/./src/index.js?");

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