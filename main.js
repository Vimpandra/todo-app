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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todoItemFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItemFactory */ \"./src/todoItemFactory.js\");\n/* harmony import */ var _listFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listFactory */ \"./src/listFactory.js\");\n/* harmony import */ var _renderList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderList */ \"./src/renderList.js\");\n/* harmony import */ var _renderNewList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderNewList */ \"./src/renderNewList.js\");\n\n\n\n\n\n(0,_renderNewList__WEBPACK_IMPORTED_MODULE_3__.renderNewList)();\n\nconst myList = new _listFactory__WEBPACK_IMPORTED_MODULE_1__.TodoList(`Today's To Do`);\n\nmyList.newItem(`Smoke Weed`, `Gotta do it`, `Everyday`, `Urgent`);\nmyList.newItem(`Do homework`, `Science and math`, `Tomorrow`, `Whenever`);\nmyList.newItem(`Go cycling`, `Gotta cycle at least 20km`, `Tonight`, `ASAP`);\n\n(0,_renderList__WEBPACK_IMPORTED_MODULE_2__.renderList)(myList);\n\n\n\n//# sourceURL=webpack://todo-app/./src/index.js?");

/***/ }),

/***/ "./src/listFactory.js":
/*!****************************!*\
  !*** ./src/listFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TodoList\": () => (/* binding */ TodoList)\n/* harmony export */ });\n/* harmony import */ var _todoItemFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItemFactory */ \"./src/todoItemFactory.js\");\n\n\nfunction TodoList(title) {\n    this.title = title;\n    this.list = [];\n};\n\nTodoList.prototype.newItem = function(title, desc, due, prio) {\n    let item = new _todoItemFactory__WEBPACK_IMPORTED_MODULE_0__.TodoItem(title, desc, due, prio);\n    item.addToList(this.list);\n};\n\n\n\n//# sourceURL=webpack://todo-app/./src/listFactory.js?");

/***/ }),

/***/ "./src/renderList.js":
/*!***************************!*\
  !*** ./src/renderList.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderList\": () => (/* binding */ renderList)\n/* harmony export */ });\n/* harmony import */ var _listFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listFactory */ \"./src/listFactory.js\");\n\n\nfunction renderList(list) {\n    const content = document.getElementById(`content`);\n\n    const listBody = document.createElement(`div`);\n    listBody.setAttribute(`id`, list.title);\n    content.appendChild(listBody);\n    listBody.classList.add(`listCard`);\n\n    const listTitle = document.createElement(`h2`);\n    listTitle.textContent = list.title;\n    listBody.appendChild(listTitle);\n\n    const listExpandBtn = document.createElement(`button`);\n    listExpandBtn.classList.add(`listExpandBtn`);\n    listExpandBtn.textContent = `-`;\n    listBody.appendChild(listExpandBtn);\n    listExpandBtn.addEventListener(`click`, () => {\n        if (listExpandBtn.textContent === `-`) {\n            listExpandBtn.textContent = `+`;\n            listContent.classList.toggle(`hidden`);\n        } else {\n            listExpandBtn.textContent = `-`;\n            listContent.classList.toggle(`hidden`);\n        }\n    });\n\n    const listContent = document.createElement(`div`);\n    listContent.classList.add(`listContent`);\n    listBody.appendChild(listContent);\n\n    for (let i = 0; i < list.list.length; i++) {\n        const listItem = document.createElement(`div`);\n        listItem.classList.add(`listItem`);\n        listItem.classList.add(`minimized`);\n        if (list.list[i].done) {\n            listItem.classList.add(`checked`);\n        };\n        listContent.appendChild(listItem);\n        listItem.setAttribute(`data-index`, i);\n\n        const checkBox = document.createElement(`input`);\n        checkBox.setAttribute(`type`, `checkbox`);\n        listItem.appendChild(checkBox);\n        if (list.list[i].done) { checkBox.checked = true };\n        checkBox.addEventListener(`input`, () => {\n            if (checkBox.checked) {\n                listItem.classList.add(`checked`);\n                list.list[i].done = true;\n            } else {\n                listItem.classList.remove(`checked`);\n                list.list[i].done = false;\n            };\n        });\n\n        const itemTitle = document.createElement(`h3`);\n        itemTitle.textContent = list.list[i].title;\n        listItem.appendChild(itemTitle);\n        itemTitle.addEventListener(`click`, () => {\n            itemExpandBtn.click();\n        });\n\n        const itemExpandBtn = document.createElement(`button`);\n        itemExpandBtn.textContent = `+`;\n        itemExpandBtn.classList.add(`itemExpandBtn`);\n        listItem.appendChild(itemExpandBtn);\n        itemExpandBtn.addEventListener(`click`, () => {\n            if (itemExpandBtn.textContent === `+`) {\n                itemExpandBtn.textContent = `-`;\n                listItem.classList.toggle(`minimized`);\n                itemDesc.classList.toggle(`hidden`);\n                itemPrio.classList.toggle(`hidden`);\n                itemDue.classList.toggle(`hidden`);\n                itemEditBtn.classList.toggle(`hidden`);\n                itemDelBtn.classList.toggle(`hidden`);\n            } else {\n                itemExpandBtn.textContent = `+`;\n                listItem.classList.toggle(`minimized`);\n                itemDesc.classList.toggle(`hidden`);\n                itemPrio.classList.toggle(`hidden`);\n                itemDue.classList.toggle(`hidden`);\n                itemEditBtn.classList.toggle(`hidden`);\n                itemDelBtn.classList.toggle(`hidden`);\n            }\n        });\n\n        const itemDesc = document.createElement(`p`);\n        itemDesc.classList.add(`itemDesc`);\n        itemDesc.textContent = list.list[i].desc;\n        listItem.appendChild(itemDesc);\n        itemDesc.classList.add(`hidden`);\n\n        const itemPrio = document.createElement(`p`);\n        itemPrio.classList.add(`itemPrio`)\n        itemPrio.innerHTML = `Priority: <strong>${list.list[i].prio}</strong>`;\n        listItem.appendChild(itemPrio);\n        itemPrio.classList.add(`hidden`);\n\n        const itemDue = document.createElement(`p`);\n        itemDue.classList.add(`itemDue`);\n        itemDue.textContent = `Due: ${list.list[i].due}`;\n        listItem.appendChild(itemDue);\n        itemDue.classList.add(`hidden`);\n\n        const itemEditBtn = document.createElement(`div`);\n        itemEditBtn.classList.add(`itemEditBtn`);\n        itemEditBtn.innerHTML = `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-edit\"><path d=\"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\"></path><path d=\"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z\"></path></svg>`;\n        listItem.appendChild(itemEditBtn);\n        itemEditBtn.classList.add(`hidden`);\n\n        const itemDelBtn = document.createElement(`div`);\n        itemDelBtn.classList.add(`itemDelBtn`);\n        itemDelBtn.innerHTML = `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-trash-2\"><polyline points=\"3 6 5 6 21 6\"></polyline><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"></path><line x1=\"10\" y1=\"11\" x2=\"10\" y2=\"17\"></line><line x1=\"14\" y1=\"11\" x2=\"14\" y2=\"17\"></line></svg>`;\n        listItem.appendChild(itemDelBtn);\n        itemDelBtn.classList.add(`hidden`);\n        itemDelBtn.addEventListener(`click`, () => {\n            list.list.splice(i, 1);\n            content.textContent = null;\n            renderList(list);\n        });\n    };\n\n    const listControlBtns = document.createElement(`div`);\n    listControlBtns.classList.add(`listControlBtns`);\n    listBody.appendChild(listControlBtns);\n\n    const delListBtn = document.createElement(`button`);\n    delListBtn.innerHTML = `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-trash-2\"><polyline points=\"3 6 5 6 21 6\"></polyline><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"></path><line x1=\"10\" y1=\"11\" x2=\"10\" y2=\"17\"></line><line x1=\"14\" y1=\"11\" x2=\"14\" y2=\"17\"></line></svg>`;\n    delListBtn.classList.add(`controlBtn`);\n    listControlBtns.appendChild(delListBtn);\n    delListBtn.addEventListener(`click`, () => {\n        if (confirm(`Are you sure you want to delete ${list.title} and all it's content?`)) {\n            listBody.remove();\n        }\n    });\n\n    const addItemBtn = document.createElement(`button`);\n    addItemBtn.classList.add(`controlBtn`);\n    addItemBtn.textContent = `+`;\n    listControlBtns.appendChild(addItemBtn);\n    addItemBtn.addEventListener(`click`, () => {\n        addItemBtn.classList.add(`hidden`);\n        delListBtn.classList.add(`hidden`);\n        renderAddListItem(listBody, list);\n    });\n};\n\n\nfunction renderAddListItem(container, list) {\n    const newItemWindow = document.createElement(`div`);\n    newItemWindow.classList.add(`newItemWindow`);\n    newItemWindow.setAttribute(`id`, `newItemWindow`);\n    container.appendChild(newItemWindow);\n\n    const newItemTitle = document.createElement(`h4`);\n    newItemTitle.textContent = `Add a new item to this list`;\n    newItemWindow.appendChild(newItemTitle);\n\n    // Input title\n    const iptContainerTitle = document.createElement(`div`);\n    iptContainerTitle.classList.add(`iptContainer`);\n    newItemWindow.appendChild(iptContainerTitle);\n\n    const iptTitle = document.createElement(`input`);\n    iptTitle.setAttribute(`type`, `text`);\n    iptTitle.setAttribute(`name`, `title`);\n    iptTitle.setAttribute(`id`, `iptTitle`);\n    iptContainerTitle.appendChild(iptTitle);\n    iptTitle.addEventListener(`input`, () => {\n        checkFill(iptTitle);\n    });\n\n    const iptTitleLabel = document.createElement(`label`);\n    iptTitleLabel.setAttribute(`for`, `title`);\n    iptTitleLabel.textContent = `Title`;\n    iptContainerTitle.appendChild(iptTitleLabel);\n\n    // Input description\n    const iptContainerDesc = document.createElement(`div`);\n    iptContainerDesc.classList.add(`iptContainer`);\n    newItemWindow.appendChild(iptContainerDesc);\n\n    const iptDesc = document.createElement(`input`);\n    iptDesc.setAttribute(`type`, `text`);\n    iptDesc.setAttribute(`name`, `desc`);\n    iptDesc.setAttribute(`id`, `iptDesc`);\n    iptContainerDesc.appendChild(iptDesc);\n    iptDesc.addEventListener(`input`, () => {\n        checkFill(iptDesc);\n    });\n\n    const iptDescLabel = document.createElement(`label`);\n    iptDescLabel.setAttribute(`for`, `desc`);\n    iptDescLabel.textContent = `Description`;\n    iptContainerDesc.appendChild(iptDescLabel);\n\n    // Input due\n    const iptContainerDue = document.createElement(`div`);\n    iptContainerDue.classList.add(`iptContainer`);\n    newItemWindow.appendChild(iptContainerDue);\n\n    const iptDue = document.createElement(`input`);\n    iptDue.setAttribute(`type`, `text`);\n    iptDue.setAttribute(`name`, `due`);\n    iptDue.setAttribute(`id`, `iptDue`);\n    iptContainerDue.appendChild(iptDue);\n    iptDue.addEventListener(`input`, () => {\n        checkFill(iptDue);\n    });\n\n    const iptDueLabel = document.createElement(`label`);\n    iptDueLabel.setAttribute(`for`, `due`);\n    iptDueLabel.textContent = `Due time`;\n    iptContainerDue.appendChild(iptDueLabel);\n\n    // Input priority\n    const iptContainerPrio = document.createElement(`div`);\n    iptContainerPrio.classList.add(`radioContainer`);\n    newItemWindow.appendChild(iptContainerPrio);\n\n    const prioTitle = document.createElement(`h4`);\n    prioTitle.textContent = `Priority`;\n    iptContainerPrio.appendChild(prioTitle);\n    \n    // -- Urgent\n    const urgentContainer = document.createElement(`div`);\n    iptContainerPrio.appendChild(urgentContainer);\n\n    const iptPrioUrgent = document.createElement(`input`);\n    iptPrioUrgent.setAttribute(`type`, `radio`);\n    iptPrioUrgent.setAttribute(`name`, `prio`);\n    iptPrioUrgent.setAttribute(`id`, `iptPrioUrgent`);\n    iptPrioUrgent.value = `Urgent`;\n    urgentContainer.appendChild(iptPrioUrgent);\n\n    const prioUrgentLabel = document.createElement(`label`);\n    prioUrgentLabel.setAttribute(`for`, `iptPrioUrgent`);\n    prioUrgentLabel.textContent = `Urgent`;\n    urgentContainer.appendChild(prioUrgentLabel);\n\n    // -- ASAP\n    const asapContainer = document.createElement(`div`);\n    iptContainerPrio.appendChild(asapContainer);\n\n    const iptPrioAsap = document.createElement(`input`);\n    iptPrioAsap.setAttribute(`type`, `radio`);\n    iptPrioAsap.setAttribute(`name`, `prio`);\n    iptPrioAsap.setAttribute(`id`, `iptPrioAsap`);\n    iptPrioAsap.value = `ASAP`;\n    asapContainer.appendChild(iptPrioAsap);\n\n    const prioAsapLabel = document.createElement(`label`);\n    prioAsapLabel.setAttribute(`for`, `iptPrioAsap`);\n    prioAsapLabel.textContent = `ASAP`;\n    asapContainer.appendChild(prioAsapLabel);\n\n    // -- Whenever\n    const wheneverContainer = document.createElement(`div`);\n    iptContainerPrio.appendChild(wheneverContainer);\n\n    const iptPrioWhenever = document.createElement(`input`);\n    iptPrioWhenever.setAttribute(`type`, `radio`);\n    iptPrioWhenever.setAttribute(`name`, `prio`);\n    iptPrioWhenever.setAttribute(`id`, `iptPrioWhenever`);\n    iptPrioWhenever.value = `Whenever`;\n    wheneverContainer.appendChild(iptPrioWhenever);\n\n    const prioWheneverLabel = document.createElement(`label`);\n    prioWheneverLabel.setAttribute(`for`, `iptPrioWhenever`);\n    prioWheneverLabel.textContent = `Whenever`;\n    wheneverContainer.appendChild(prioWheneverLabel);\n\n    // Submit Button\n    const submitBtn = document.createElement(`button`);\n    submitBtn.setAttribute(`id`, `submitNewItemBtn`);\n    submitBtn.textContent = `Add Item to List`;\n    submitBtn.classList.add(`submitBtn`);\n    newItemWindow.appendChild(submitBtn);\n\n    function checkPrio() {\n        if (iptPrioUrgent.checked) {\n            return iptPrioUrgent.value;\n        } else if (iptPrioAsap.checked) {\n            return iptPrioAsap.value;\n        } else if (iptPrioWhenever.checked) {\n            return iptPrioWhenever.value;\n        }\n    };\n\n    submitBtn.addEventListener(`click`, () => {\n        if (iptTitle.value == ``) return\n        else {\n            list.newItem(iptTitle.value, iptDesc.value, iptDue.value, checkPrio());\n            const listBody = document.getElementById(list.title);\n            listBody.remove();\n            renderList(list);\n        }\n    });\n}\n\nfunction checkFill(ipt) {\n    if (ipt.value.length == 0) {\n        ipt.classList.remove(`filled`);\n    } else {\n        ipt.classList.add(`filled`);\n    }\n};\n\n\n\n//# sourceURL=webpack://todo-app/./src/renderList.js?");

/***/ }),

/***/ "./src/renderNewList.js":
/*!******************************!*\
  !*** ./src/renderNewList.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderNewList\": () => (/* binding */ renderNewList)\n/* harmony export */ });\n/* harmony import */ var _renderList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderList */ \"./src/renderList.js\");\n/* harmony import */ var _listFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listFactory */ \"./src/listFactory.js\");\n\n\n\nfunction renderNewList() {\n    const newListBtn = document.getElementById(`newListBtn`);\n    newListBtn.addEventListener(`click`, () => {\n        const content = document.getElementById(`content`);\n        if (content.classList.contains(`windowOpen`)) return;\n        content.classList.add(`windowOpen`);    \n        \n        const newListWindow = document.createElement(`div`);\n        newListWindow.classList.add(`newListWindow`);\n        content.appendChild(newListWindow);\n\n        const promptTitle = document.createElement(`h2`);\n        promptTitle.textContent = `What will your new list be called?`;\n        newListWindow.appendChild(promptTitle);\n\n        const iptTitle = document.createElement(`input`);\n        iptTitle.setAttribute(`type`, `text`);\n        iptTitle.placeholder = `My Todo List`;\n        newListWindow.appendChild(iptTitle);\n\n        const submitBtn = document.createElement(`button`);\n        submitBtn.textContent = `Create new list`;\n        newListWindow.appendChild(submitBtn);\n        submitBtn.addEventListener(`click`, () => {\n            content.classList.remove(`windowOpen`);\n            const newList = new _listFactory__WEBPACK_IMPORTED_MODULE_1__.TodoList(iptTitle.value);\n            (0,_renderList__WEBPACK_IMPORTED_MODULE_0__.renderList)(newList);\n            newListWindow.remove();\n        });\n    });\n};\n\n\n\n//# sourceURL=webpack://todo-app/./src/renderNewList.js?");

/***/ }),

/***/ "./src/todoItemFactory.js":
/*!********************************!*\
  !*** ./src/todoItemFactory.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TodoItem\": () => (/* binding */ TodoItem)\n/* harmony export */ });\nfunction TodoItem(title, desc, due, prio) {\n    this.title = title;\n    this.desc = desc;\n    this.due = due;\n    this.prio = prio;\n    this.done = false;\n};\n\nTodoItem.prototype.addToList = function(list) {\n    list.push(this);\n} \n\n\n\n//# sourceURL=webpack://todo-app/./src/todoItemFactory.js?");

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