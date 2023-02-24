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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todoItemFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItemFactory */ \"./src/todoItemFactory.js\");\n/* harmony import */ var _listFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listFactory */ \"./src/listFactory.js\");\n/* harmony import */ var _renderList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderList */ \"./src/renderList.js\");\n/* harmony import */ var _renderNewList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderNewList */ \"./src/renderNewList.js\");\n/* harmony import */ var _setLocalStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setLocalStorage */ \"./src/setLocalStorage.js\");\n/* harmony import */ var _loadLocalStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loadLocalStorage */ \"./src/loadLocalStorage.js\");\n\n\n\n\n\n\n\n(0,_renderNewList__WEBPACK_IMPORTED_MODULE_3__.renderNewList)();\n\nif (localStorage.length > 0) {\n    (0,_loadLocalStorage__WEBPACK_IMPORTED_MODULE_5__.loadLocalStorage)();\n} else {\n    const myList = new _listFactory__WEBPACK_IMPORTED_MODULE_1__.TodoList(`Sample List`);\n\n    myList.newItem(`Sample list item`, `Gotta do it`, `Everyday`, `Urgent`);\n    myList.newItem(`Do homework`, `Science and math`, `Tomorrow`, `Whenever`);\n    myList.newItem(`Go cycling`, `Gotta cycle at least 20km`, `Tonight`, `ASAP`);\n    \n    (0,_renderList__WEBPACK_IMPORTED_MODULE_2__.renderList)(myList);\n    \n    (0,_setLocalStorage__WEBPACK_IMPORTED_MODULE_4__.setLocalStorage)();\n}\n\n\n//# sourceURL=webpack://todo-app/./src/index.js?");

/***/ }),

/***/ "./src/listFactory.js":
/*!****************************!*\
  !*** ./src/listFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TodoList\": () => (/* binding */ TodoList)\n/* harmony export */ });\n/* harmony import */ var _todoItemFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItemFactory */ \"./src/todoItemFactory.js\");\n\n\nfunction TodoList(title) {\n    this.title = title;\n    this.list = [];\n};\n\nTodoList.prototype.newItem = function(title, desc, due, prio, done) {\n    let item = new _todoItemFactory__WEBPACK_IMPORTED_MODULE_0__.TodoItem(title, desc, due, prio, done);\n    item.addToList(this.list);\n};\n\n\n\n//# sourceURL=webpack://todo-app/./src/listFactory.js?");

/***/ }),

/***/ "./src/loadLocalStorage.js":
/*!*********************************!*\
  !*** ./src/loadLocalStorage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadLocalStorage\": () => (/* binding */ loadLocalStorage)\n/* harmony export */ });\n/* harmony import */ var _listFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listFactory */ \"./src/listFactory.js\");\n/* harmony import */ var _renderList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderList */ \"./src/renderList.js\");\n\n\n\nfunction loadLocalStorage() {\n    let numberOfLists = localStorage.getItem(`numberOfLists`);\n\n    for (let i = 0; i < numberOfLists; i++) {\n        let myList = new _listFactory__WEBPACK_IMPORTED_MODULE_0__.TodoList(localStorage.getItem(`list${i}Title`));\n        \n        for (let e = 0; e < localStorage.getItem(`list${i}Length`); e++) {\n            if (localStorage.getItem(`list${i}Item${e}Done`) === `true`) {\n                myList.newItem(\n                    localStorage.getItem(`list${i}Item${e}Title`),\n                    localStorage.getItem(`list${i}Item${e}Desc`),\n                    localStorage.getItem(`list${i}Item${e}Due`),\n                    localStorage.getItem(`list${i}Item${e}Prio`),\n                    true                    \n                )\n            } else {\n                myList.newItem(\n                    localStorage.getItem(`list${i}Item${e}Title`),\n                    localStorage.getItem(`list${i}Item${e}Desc`),\n                    localStorage.getItem(`list${i}Item${e}Due`),\n                    localStorage.getItem(`list${i}Item${e}Prio`),\n                    false\n                )\n            }\n        }\n        (0,_renderList__WEBPACK_IMPORTED_MODULE_1__.renderList)(myList);\n    }\n};\n\n\n\n//# sourceURL=webpack://todo-app/./src/loadLocalStorage.js?");

/***/ }),

/***/ "./src/renderAddListItem.js":
/*!**********************************!*\
  !*** ./src/renderAddListItem.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderAddListItem\": () => (/* binding */ renderAddListItem)\n/* harmony export */ });\n/* harmony import */ var _renderListItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderListItems */ \"./src/renderListItems.js\");\n/* harmony import */ var _setLocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setLocalStorage */ \"./src/setLocalStorage.js\");\n\n\n\nfunction renderAddListItem(container, list) {\n    const newItemWindow = document.createElement(`div`);\n    newItemWindow.classList.add(`newItemWindow`);\n    newItemWindow.setAttribute(`id`, `newItemWindow`);\n    container.appendChild(newItemWindow);\n\n    const newItemTitle = document.createElement(`h4`);\n    newItemTitle.textContent = `Add a new item to this list`;\n    newItemWindow.appendChild(newItemTitle);\n\n    // Input title\n    const iptContainerTitle = document.createElement(`div`);\n    iptContainerTitle.classList.add(`iptContainer`);\n    newItemWindow.appendChild(iptContainerTitle);\n\n    const iptTitle = document.createElement(`input`);\n    iptTitle.setAttribute(`type`, `text`);\n    iptTitle.setAttribute(`name`, `title`);\n    iptTitle.setAttribute(`id`, `iptTitle`);\n    iptContainerTitle.appendChild(iptTitle);\n    iptTitle.addEventListener(`input`, () => {\n        checkFill(iptTitle);\n    });\n\n    const iptTitleLabel = document.createElement(`label`);\n    iptTitleLabel.setAttribute(`for`, `title`);\n    iptTitleLabel.textContent = `Title`;\n    iptContainerTitle.appendChild(iptTitleLabel);\n\n    // Input description\n    const iptContainerDesc = document.createElement(`div`);\n    iptContainerDesc.classList.add(`iptContainer`);\n    newItemWindow.appendChild(iptContainerDesc);\n\n    const iptDesc = document.createElement(`input`);\n    iptDesc.setAttribute(`type`, `text`);\n    iptDesc.setAttribute(`name`, `desc`);\n    iptDesc.setAttribute(`id`, `iptDesc`);\n    iptContainerDesc.appendChild(iptDesc);\n    iptDesc.addEventListener(`input`, () => {\n        checkFill(iptDesc);\n    });\n\n    const iptDescLabel = document.createElement(`label`);\n    iptDescLabel.setAttribute(`for`, `desc`);\n    iptDescLabel.textContent = `Description`;\n    iptContainerDesc.appendChild(iptDescLabel);\n\n    // Input due\n    const iptContainerDue = document.createElement(`div`);\n    iptContainerDue.classList.add(`iptContainer`);\n    newItemWindow.appendChild(iptContainerDue);\n\n    const iptDue = document.createElement(`input`);\n    iptDue.setAttribute(`type`, `text`);\n    iptDue.setAttribute(`name`, `due`);\n    iptDue.setAttribute(`id`, `iptDue`);\n    iptContainerDue.appendChild(iptDue);\n    iptDue.addEventListener(`input`, () => {\n        checkFill(iptDue);\n    });\n\n    const iptDueLabel = document.createElement(`label`);\n    iptDueLabel.setAttribute(`for`, `due`);\n    iptDueLabel.textContent = `Due time`;\n    iptContainerDue.appendChild(iptDueLabel);\n\n    // Input priority\n    const iptContainerPrio = document.createElement(`div`);\n    iptContainerPrio.classList.add(`radioContainer`);\n    newItemWindow.appendChild(iptContainerPrio);\n\n    const prioTitle = document.createElement(`h4`);\n    prioTitle.textContent = `Priority`;\n    iptContainerPrio.appendChild(prioTitle);\n    \n    // -- Urgent\n    const urgentContainer = document.createElement(`div`);\n    iptContainerPrio.appendChild(urgentContainer);\n\n    const iptPrioUrgent = document.createElement(`input`);\n    iptPrioUrgent.setAttribute(`type`, `radio`);\n    iptPrioUrgent.setAttribute(`name`, `prio`);\n    iptPrioUrgent.setAttribute(`id`, `iptPrioUrgent`);\n    iptPrioUrgent.value = `Urgent`;\n    urgentContainer.appendChild(iptPrioUrgent);\n\n    const prioUrgentLabel = document.createElement(`label`);\n    prioUrgentLabel.setAttribute(`for`, `iptPrioUrgent`);\n    prioUrgentLabel.textContent = `Urgent`;\n    urgentContainer.appendChild(prioUrgentLabel);\n\n    // -- ASAP\n    const asapContainer = document.createElement(`div`);\n    iptContainerPrio.appendChild(asapContainer);\n\n    const iptPrioAsap = document.createElement(`input`);\n    iptPrioAsap.setAttribute(`type`, `radio`);\n    iptPrioAsap.setAttribute(`name`, `prio`);\n    iptPrioAsap.setAttribute(`id`, `iptPrioAsap`);\n    iptPrioAsap.value = `ASAP`;\n    asapContainer.appendChild(iptPrioAsap);\n\n    const prioAsapLabel = document.createElement(`label`);\n    prioAsapLabel.setAttribute(`for`, `iptPrioAsap`);\n    prioAsapLabel.textContent = `ASAP`;\n    asapContainer.appendChild(prioAsapLabel);\n\n    // -- Whenever\n    const wheneverContainer = document.createElement(`div`);\n    iptContainerPrio.appendChild(wheneverContainer);\n\n    const iptPrioWhenever = document.createElement(`input`);\n    iptPrioWhenever.setAttribute(`type`, `radio`);\n    iptPrioWhenever.setAttribute(`name`, `prio`);\n    iptPrioWhenever.checked = true;\n    iptPrioWhenever.setAttribute(`id`, `iptPrioWhenever`);\n    iptPrioWhenever.value = `Whenever`;\n    wheneverContainer.appendChild(iptPrioWhenever);\n\n    const prioWheneverLabel = document.createElement(`label`);\n    prioWheneverLabel.setAttribute(`for`, `iptPrioWhenever`);\n    prioWheneverLabel.textContent = `Whenever`;\n    wheneverContainer.appendChild(prioWheneverLabel);\n\n    // Submit Button\n    const submitBtn = document.createElement(`button`);\n    submitBtn.setAttribute(`id`, `submitNewItemBtn`);\n    submitBtn.textContent = `Add Item to List`;\n    submitBtn.classList.add(`submitBtn`);\n    newItemWindow.appendChild(submitBtn);\n\n    function checkPrio() {\n        if (iptPrioUrgent.checked) {\n            return iptPrioUrgent.value;\n        } else if (iptPrioAsap.checked) {\n            return iptPrioAsap.value;\n        } else if (iptPrioWhenever.checked) {\n            return iptPrioWhenever.value;\n        }\n    };\n\n    function checkFill(ipt) {\n        if (ipt.value.length == 0) {\n            ipt.classList.remove(`filled`);\n        } else {\n            ipt.classList.add(`filled`);\n        }\n    };\n\n    submitBtn.addEventListener(`click`, () => {\n        let addItemBtn = document.getElementById(`${list.title} addItemBtn`);\n        let delListBtn = document.getElementById(`${list.title} delListBtn`);\n        if (iptTitle.value == ``) {\n            newItemWindow.remove();\n            addItemBtn.classList.remove(`hidden`);\n            delListBtn.classList.remove(`hidden`);\n        } else {\n            list.newItem(iptTitle.value, iptDesc.value, iptDue.value, checkPrio(), false);\n            (0,_renderListItems__WEBPACK_IMPORTED_MODULE_0__.renderListItems)(list);\n            newItemWindow.remove();        \n            addItemBtn.classList.remove(`hidden`);\n            delListBtn.classList.remove(`hidden`);\n\n            (0,_setLocalStorage__WEBPACK_IMPORTED_MODULE_1__.setLocalStorage)();\n        }\n    });\n};\n\n\n\n//# sourceURL=webpack://todo-app/./src/renderAddListItem.js?");

/***/ }),

/***/ "./src/renderList.js":
/*!***************************!*\
  !*** ./src/renderList.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderList\": () => (/* binding */ renderList)\n/* harmony export */ });\n/* harmony import */ var _renderListItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderListItems */ \"./src/renderListItems.js\");\n/* harmony import */ var _renderAddListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderAddListItem */ \"./src/renderAddListItem.js\");\n\n\n\nfunction renderList(list) {\n\n    const content = document.getElementById(`content`);\n\n    const listBody = document.createElement(`div`);\n    listBody.setAttribute(`id`, list.title);\n    content.appendChild(listBody);\n    listBody.classList.add(`listCard`);\n\n    const listTitle = document.createElement(`h2`);\n    listTitle.textContent = list.title;\n    listTitle.classList.add(`listTitle`);\n    listBody.appendChild(listTitle);\n\n    const listExpandBtn = document.createElement(`button`);\n    listExpandBtn.classList.add(`listExpandBtn`);\n    listExpandBtn.textContent = `-`;\n    listBody.appendChild(listExpandBtn);\n    listExpandBtn.addEventListener(`click`, () => {\n        if (listExpandBtn.textContent === `-`) {\n            listExpandBtn.textContent = `+`;\n            listContent.classList.toggle(`hidden`);\n        } else {\n            listExpandBtn.textContent = `-`;\n            listContent.classList.toggle(`hidden`);\n        }\n    });\n\n    const listContent = document.createElement(`div`);\n    listContent.classList.add(`listContent`);\n    listContent.setAttribute(`id`, `${list.title} content`);\n    listBody.appendChild(listContent);\n\n    (0,_renderListItems__WEBPACK_IMPORTED_MODULE_0__.renderListItems)(list);\n\n    const listControlBtns = document.createElement(`div`);\n    listControlBtns.classList.add(`listControlBtns`);\n    listBody.appendChild(listControlBtns);\n\n    const delListBtn = document.createElement(`button`);\n    delListBtn.innerHTML = `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-trash-2\"><polyline points=\"3 6 5 6 21 6\"></polyline><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"></path><line x1=\"10\" y1=\"11\" x2=\"10\" y2=\"17\"></line><line x1=\"14\" y1=\"11\" x2=\"14\" y2=\"17\"></line></svg>`;\n    delListBtn.classList.add(`controlBtn`);\n    delListBtn.setAttribute(`id`, `${list.title} delListBtn`);\n    listControlBtns.appendChild(delListBtn);\n    delListBtn.addEventListener(`click`, () => {\n        if (confirm(`Are you sure you want to delete ${list.title} and all it's content?`)) {\n            listBody.remove();\n            setLocalStorage();\n        }\n    });\n\n    const addItemBtn = document.createElement(`button`);\n    addItemBtn.classList.add(`controlBtn`);\n    addItemBtn.setAttribute(`id`, `${list.title} addItemBtn`);\n    addItemBtn.textContent = `+`;\n    listControlBtns.appendChild(addItemBtn);\n    addItemBtn.addEventListener(`click`, () => {\n        addItemBtn.classList.add(`hidden`);\n        delListBtn.classList.add(`hidden`);\n        (0,_renderAddListItem__WEBPACK_IMPORTED_MODULE_1__.renderAddListItem)(listBody, list);\n    });\n};\n\n\n\n//# sourceURL=webpack://todo-app/./src/renderList.js?");

/***/ }),

/***/ "./src/renderListItems.js":
/*!********************************!*\
  !*** ./src/renderListItems.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderListItems\": () => (/* binding */ renderListItems)\n/* harmony export */ });\n/* harmony import */ var _setLocalStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setLocalStorage */ \"./src/setLocalStorage.js\");\n\n\nfunction renderListItems(list) {\n    let listContent = document.getElementById(`${list.title} content`);\n    listContent.textContent = null;\n    // Loop that renders each item on the list\n    for (let i = 0; i < list.list.length; i++) {\n        \n        const listItem = document.createElement(`div`);\n        listItem.classList.add(`listItem`);\n        listItem.classList.add(`minimized`);\n        if (list.list[i].done) {\n            listItem.classList.add(`checked`);\n        };\n        listContent.appendChild(listItem);\n        listItem.setAttribute(`data-index`, i);\n\n        const checkBox = document.createElement(`input`);\n        checkBox.setAttribute(`type`, `checkbox`);\n        checkBox.classList.add(`itemDone`);\n        listItem.appendChild(checkBox);\n        if (list.list[i].done) { checkBox.checked = true };\n        checkBox.addEventListener(`input`, () => {\n            if (checkBox.checked) {\n                listItem.classList.add(`checked`);\n                list.list[i].done = true;\n                (0,_setLocalStorage__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)();\n            } else {\n                listItem.classList.remove(`checked`);\n                list.list[i].done = false;\n                (0,_setLocalStorage__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)();\n            };\n        });\n\n        const itemTitle = document.createElement(`h3`);\n        itemTitle.classList.add(`itemTitle`);\n        itemTitle.textContent = list.list[i].title;\n        listItem.appendChild(itemTitle);\n        itemTitle.addEventListener(`click`, () => {\n            itemExpandBtn.click();\n        });\n\n        const itemExpandBtn = document.createElement(`button`);\n        itemExpandBtn.textContent = `+`;\n        itemExpandBtn.classList.add(`itemExpandBtn`);\n        listItem.appendChild(itemExpandBtn);\n        itemExpandBtn.addEventListener(`click`, () => {\n            if (itemExpandBtn.textContent === `+`) {\n                itemExpandBtn.textContent = `-`;\n                listItem.classList.toggle(`minimized`);\n                itemDesc.classList.toggle(`hidden`);\n                itemPrio.classList.toggle(`hidden`);\n                itemDue.classList.toggle(`hidden`);\n                itemEditBtn.classList.toggle(`hidden`);\n                itemDelBtn.classList.toggle(`hidden`);\n            } else {\n                itemExpandBtn.textContent = `+`;\n                listItem.classList.toggle(`minimized`);\n                itemDesc.classList.toggle(`hidden`);\n                itemPrio.classList.toggle(`hidden`);\n                itemDue.classList.toggle(`hidden`);\n                itemEditBtn.classList.toggle(`hidden`);\n                itemDelBtn.classList.toggle(`hidden`);\n            }\n        });\n\n        const itemDesc = document.createElement(`p`);\n        itemDesc.classList.add(`itemDesc`);\n        itemDesc.textContent = list.list[i].desc;\n        listItem.appendChild(itemDesc);\n        itemDesc.classList.add(`hidden`);\n\n        const itemDue = document.createElement(`p`);\n        itemDue.classList.add(`itemDue`);\n        itemDue.textContent = `Due: ${list.list[i].due}`;\n        listItem.appendChild(itemDue);\n        itemDue.classList.add(`hidden`);\n\n        const itemPrio = document.createElement(`p`);\n        itemPrio.classList.add(`itemPrio`)\n        itemPrio.innerHTML = `Priority: <strong>${list.list[i].prio}</strong>`;\n        if (list.list[i].prio === `Urgent`) {\n            listItem.classList.add(`prioUrgent`);\n        } else if (list.list[i].prio === `ASAP`) {\n            listItem.classList.add(`prioAsap`);\n        } else if (list.list[i].prio === `Whenever`) {\n            listItem.classList.add(`prioWhenever`);\n        };\n        listItem.appendChild(itemPrio);\n        itemPrio.classList.add(`hidden`);\n\n        const itemEditBtn = document.createElement(`div`);\n        itemEditBtn.classList.add(`itemEditBtn`);\n        itemEditBtn.innerHTML = `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-edit\"><path d=\"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\"></path><path d=\"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z\"></path></svg>`;\n        listItem.appendChild(itemEditBtn);\n        itemEditBtn.classList.add(`hidden`);\n\n        // Item Editing Module\n        itemEditBtn.addEventListener(`click`, () => {\n            itemTitle.classList.add(`hidden`);\n            itemDesc.classList.add(`hidden`);\n            itemPrio.classList.add(`hidden`);\n            itemDue.classList.add(`hidden`);\n            itemEditBtn.classList.add(`hidden`);\n            itemDelBtn.classList.add(`hidden`);\n            itemExpandBtn.classList.add(`hidden`);\n            checkBox.classList.add(`hidden`);\n\n            const editWindow = document.createElement(`div`);\n            editWindow.classList.add(`editWindow`);\n            listItem.appendChild(editWindow);\n\n            const editModeTitle = document.createElement(`h3`);\n            editModeTitle.textContent = `Edit Mode`;\n            editWindow.appendChild(editModeTitle);\n\n            const editTitleIpt = document.createElement(`input`);\n            editTitleIpt.setAttribute(`type`, `text`);\n            editTitleIpt.value = list.list[i].title;\n            editWindow.appendChild(editTitleIpt);\n\n            const editDescIpt = document.createElement(`input`);\n            editDescIpt.setAttribute(`type`, `text`);\n            editDescIpt.value = list.list[i].desc;\n            editWindow.appendChild(editDescIpt);\n\n            const editDueIpt = document.createElement(`input`);\n            editDueIpt.setAttribute(`type`, `text`);\n            editDueIpt.value = list.list[i].due;\n            editWindow.appendChild(editDueIpt);\n\n            // Edit prio inputs\n            const editPrioContainer = document.createElement(`div`);\n            editPrioContainer.classList.add(`editPrioContainer`);\n            editWindow.appendChild(editPrioContainer);\n\n            // Urgent\n            const editUrgCont = document.createElement(`div`);\n            editPrioContainer.appendChild(editUrgCont);\n\n            const editPrioUrgent = document.createElement(`input`);\n            editPrioUrgent.setAttribute(`type`, `radio`);\n            editPrioUrgent.setAttribute(`id`, `editPrioUrgent`);\n            editPrioUrgent.setAttribute(`name`, `editPrio`);\n            editPrioUrgent.value = `Urgent`;\n            editUrgCont.appendChild(editPrioUrgent);\n            if (list.list[i].prio === `Urgent`) {\n                editPrioUrgent.checked = true;\n            };\n\n            const editPrioUrgentLabel = document.createElement(`label`);\n            editPrioUrgentLabel.setAttribute(`for`, `editPrioUrgent`);\n            editPrioUrgentLabel.textContent = `Urgent`;\n            editUrgCont.appendChild(editPrioUrgentLabel);\n\n            // ASAP\n            const editAsapCont = document.createElement(`div`);\n            editPrioContainer.appendChild(editAsapCont);\n\n            const editPrioAsap = document.createElement(`input`);\n            editPrioAsap.setAttribute(`type`, `radio`);\n            editPrioAsap.setAttribute(`id`, `editPrioAsap`);\n            editPrioAsap.setAttribute(`name`, `editPrio`);\n            editPrioAsap.value = `ASAP`;\n            editAsapCont.appendChild(editPrioAsap);\n            if (list.list[i].prio === `ASAP`) {\n                editPrioAsap.checked = true;\n            };\n\n            const editPrioAsapLabel = document.createElement(`label`);\n            editPrioAsapLabel.setAttribute(`for`, `editPrioAsap`);\n            editPrioAsapLabel.textContent = `ASAP`;\n            editAsapCont.appendChild(editPrioAsapLabel);\n\n            // Whenever\n            const editWheneverCont = document.createElement(`div`);\n            editPrioContainer.appendChild(editWheneverCont);\n\n            const editPrioWhenever = document.createElement(`input`);\n            editPrioWhenever.setAttribute(`type`, `radio`);\n            editPrioWhenever.setAttribute(`id`, `editPrioWhenever`);\n            editPrioWhenever.setAttribute(`name`, `editPrio`);\n            editPrioWhenever.value = `Whenever`;\n            editWheneverCont.appendChild(editPrioWhenever);\n            if (list.list[i].prio === `Whenever`) {\n                editPrioWhenever.checked = true;\n            };\n\n            const editPrioWhenLabel = document.createElement(`label`);\n            editPrioWhenLabel.setAttribute(`for`, `editPrioWhenever`);\n            editPrioWhenLabel.textContent = `Whenever`;\n            editWheneverCont.appendChild(editPrioWhenLabel);\n\n\n\n            const exitEditModeBtn = document.createElement(`button`);\n            exitEditModeBtn.textContent = `Exit edit mode`;\n            exitEditModeBtn.classList.add(`submitBtn`);\n            editWindow.appendChild(exitEditModeBtn);\n            exitEditModeBtn.addEventListener(`click`, () => {\n                if (editTitleIpt.value !== ``) {\n                    list.list[i].title = editTitleIpt.value;\n                };\n                if (editDescIpt.value !== ``) {\n                    list.list[i].desc = editDescIpt.value;\n                };\n                if (editDueIpt.value !== ``) {\n                    list.list[i].due = editDueIpt.value;\n                };\n                if (editPrioUrgent.checked) {\n                    list.list[i].prio = editPrioUrgent.value;\n                    listItem.classList.add(`prioUrgent`);\n                    listItem.classList.remove(`prioAsap`);\n                    listItem.classList.remove(`prioWhenever`);\n                } else if (editPrioAsap.checked) {\n                    list.list[i].prio = editPrioAsap.value;\n                    listItem.classList.remove(`prioUrgent`);\n                    listItem.classList.add(`prioAsap`);\n                    listItem.classList.remove(`prioWhenever`);\n                } else if (editPrioWhenever.checked) {\n                    list.list[i].prio = editPrioWhenever.value;\n                    listItem.classList.remove(`prioUrgent`);\n                    listItem.classList.remove(`prioAsap`);\n                    listItem.classList.add(`prioWhenever`);\n                };\n\n                itemTitle.textContent = list.list[i].title;\n                itemDesc.textContent = list.list[i].desc;\n                itemDue.textContent = `Due: ${list.list[i].due}`;\n                itemPrio.innerHTML = `Priority: <strong>${list.list[i].prio}</strong>`;\n\n                editWindow.remove();\n                itemTitle.classList.remove(`hidden`);\n                itemDesc.classList.remove(`hidden`);\n                itemPrio.classList.remove(`hidden`);\n                itemDue.classList.remove(`hidden`);\n                itemEditBtn.classList.remove(`hidden`);\n                itemDelBtn.classList.remove(`hidden`);\n                itemDelBtn.classList.remove(`hidden`);\n                itemExpandBtn.classList.remove(`hidden`);\n                checkBox.classList.remove(`hidden`);\n\n                (0,_setLocalStorage__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)();\n            });\n        });\n\n        const itemDelBtn = document.createElement(`div`);\n        itemDelBtn.classList.add(`itemDelBtn`);\n        itemDelBtn.innerHTML = `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-trash-2\"><polyline points=\"3 6 5 6 21 6\"></polyline><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"></path><line x1=\"10\" y1=\"11\" x2=\"10\" y2=\"17\"></line><line x1=\"14\" y1=\"11\" x2=\"14\" y2=\"17\"></line></svg>`;\n        listItem.appendChild(itemDelBtn);\n        itemDelBtn.classList.add(`hidden`);\n        itemDelBtn.addEventListener(`click`, () => {\n            list.list.splice(i, 1);\n            listItem.remove();\n            (0,_setLocalStorage__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)();\n        });\n    };\n}\n\n\n\n//# sourceURL=webpack://todo-app/./src/renderListItems.js?");

/***/ }),

/***/ "./src/renderNewList.js":
/*!******************************!*\
  !*** ./src/renderNewList.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderNewList\": () => (/* binding */ renderNewList)\n/* harmony export */ });\n/* harmony import */ var _renderList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderList */ \"./src/renderList.js\");\n/* harmony import */ var _listFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listFactory */ \"./src/listFactory.js\");\n/* harmony import */ var _setLocalStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setLocalStorage */ \"./src/setLocalStorage.js\");\n\n\n\n\nfunction renderNewList() {\n    const newListBtn = document.getElementById(`newListBtn`);\n    newListBtn.addEventListener(`click`, () => {\n        const content = document.getElementById(`content`);\n        if (content.classList.contains(`windowOpen`)) return;\n        content.classList.add(`windowOpen`);    \n        \n        const newListWindow = document.createElement(`div`);\n        newListWindow.classList.add(`newListWindow`);\n        content.appendChild(newListWindow);\n\n        const promptTitle = document.createElement(`h2`);\n        promptTitle.textContent = `What will your new list be called?`;\n        newListWindow.appendChild(promptTitle);\n\n        const iptTitle = document.createElement(`input`);\n        iptTitle.setAttribute(`type`, `text`);\n        iptTitle.placeholder = `My Todo List`;\n        newListWindow.appendChild(iptTitle);\n\n        const submitBtn = document.createElement(`button`);\n        submitBtn.textContent = `Create new list`;\n        newListWindow.appendChild(submitBtn);\n        submitBtn.addEventListener(`click`, () => {\n            content.classList.remove(`windowOpen`);\n            const newList = new _listFactory__WEBPACK_IMPORTED_MODULE_1__.TodoList(iptTitle.value);\n            (0,_renderList__WEBPACK_IMPORTED_MODULE_0__.renderList)(newList);\n            newListWindow.remove();\n            (0,_setLocalStorage__WEBPACK_IMPORTED_MODULE_2__.setLocalStorage)();\n        });\n    });\n};\n\n\n\n//# sourceURL=webpack://todo-app/./src/renderNewList.js?");

/***/ }),

/***/ "./src/setLocalStorage.js":
/*!********************************!*\
  !*** ./src/setLocalStorage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setLocalStorage\": () => (/* binding */ setLocalStorage)\n/* harmony export */ });\nfunction setLocalStorage() {\n    localStorage.clear();\n\n    const listCards = document.getElementsByClassName(`listCard`);\n    let listTitle = document.getElementsByClassName(`listTitle`);\n\n    localStorage.setItem(`numberOfLists`, listCards.length);\n    \n    for (let i = 0; i < listCards.length; i++) {\n        localStorage.setItem(`list${i}Title`, listTitle[i].textContent);\n\n        let listItems = listCards[i].children[2].children;\n        localStorage.setItem(`list${i}Length`, listItems.length);\n        \n        for (let e = 0; e < listItems.length; e++) {\n            localStorage.setItem(`list${i}Item${e}Title`, listItems[e].getElementsByClassName(`itemTitle`)[0].textContent);\n            localStorage.setItem(`list${i}Item${e}Desc`, listItems[e].getElementsByClassName(`itemDesc`)[0].textContent);\n            localStorage.setItem(`list${i}Item${e}Due`, listItems[e].getElementsByClassName(`itemDue`)[0].textContent.slice(5));\n            localStorage.setItem(`list${i}Item${e}Prio`, listItems[e].getElementsByClassName(`itemPrio`)[0].textContent.slice(10));\n            \n            if (listItems[e].getElementsByClassName(`itemDone`)[0].checked) {\n                localStorage.setItem(`list${i}Item${e}Done`, `true`);\n            } else {\n                localStorage.setItem(`list${i}Item${e}Done`, `false`);\n            }\n        } \n    }\n};\n\n\n\n//# sourceURL=webpack://todo-app/./src/setLocalStorage.js?");

/***/ }),

/***/ "./src/todoItemFactory.js":
/*!********************************!*\
  !*** ./src/todoItemFactory.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TodoItem\": () => (/* binding */ TodoItem)\n/* harmony export */ });\nfunction TodoItem(title, desc, due, prio, done) {\n    this.title = title;\n    this.desc = desc;\n    this.due = due;\n    this.prio = prio;\n    this.done = done;\n};\n\nTodoItem.prototype.addToList = function(list) {\n    list.push(this);\n} \n\n\n\n//# sourceURL=webpack://todo-app/./src/todoItemFactory.js?");

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