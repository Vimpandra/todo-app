import { TodoList } from './listFactory'
import { renderList } from './renderList'

function loadLocalStorage () {
  const numberOfLists = localStorage.getItem('numberOfLists')

  for (let i = 0; i < numberOfLists; i++) {
    const myList = new TodoList(localStorage.getItem(`list${i}Title`))

    for (let e = 0; e < localStorage.getItem(`list${i}Length`); e++) {
      if (localStorage.getItem(`list${i}Item${e}Done`) === 'true') {
        myList.newItem(
          localStorage.getItem(`list${i}Item${e}Title`),
          localStorage.getItem(`list${i}Item${e}Desc`),
          localStorage.getItem(`list${i}Item${e}Due`),
          localStorage.getItem(`list${i}Item${e}Prio`),
          true
        )
      } else {
        myList.newItem(
          localStorage.getItem(`list${i}Item${e}Title`),
          localStorage.getItem(`list${i}Item${e}Desc`),
          localStorage.getItem(`list${i}Item${e}Due`),
          localStorage.getItem(`list${i}Item${e}Prio`),
          false
        )
      }
    }
    renderList(myList)
  }
};

export { loadLocalStorage }
