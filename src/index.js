import { TodoItem } from "./todoItemFactory";
import { TodoList } from "./listFactory";
import { renderList } from "./DOMcontrol";

const myList = new TodoList(`Today's To Do`);

const smokeWeed = new TodoItem(`Smoke Weed`, `Gotta do it everyday`, `Urgent`, `4:20`);
const dohw = new TodoItem(`Do homework`, `Science and math`, `Whenever`, `Tomorrow`);
const cycle = new TodoItem(`Go cycling`, `Gotta cycle at least 20km`, `ASAP`, `Tonight`);

smokeWeed.addToList(myList.list);
dohw.addToList(myList.list);
cycle.addToList(myList.list);

renderList(myList)