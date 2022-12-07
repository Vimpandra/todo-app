import { TodoItem } from "./todoItemFactory";
import { TodoList } from "./listFactory";
import { renderList } from "./renderList";
import { renderNewList } from "./renderNewList";

renderNewList();

const myList = new TodoList(`Today's To Do`);

myList.newItem(`Smoke Weed`, `Gotta do it`, `Everyday`, `Urgent`);
myList.newItem(`Do homework`, `Science and math`, `Tomorrow`, `Whenever`);
myList.newItem(`Go cycling`, `Gotta cycle at least 20km`, `Tonight`, `ASAP`);

renderList(myList);

