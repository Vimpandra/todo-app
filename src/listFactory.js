import { TodoItem } from "./todoItemFactory";

function TodoList(title) {
  this.title = title;
  this.list = [];
}

TodoList.prototype.newItem = function (title, desc, due, prio, done) {
  const item = new TodoItem(title, desc, due, prio, done);
  item.addToList(this.list);
};

export { TodoList };
