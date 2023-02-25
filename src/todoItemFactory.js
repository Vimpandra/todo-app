function TodoItem(title, desc, due, prio, done) {
  this.title = title;
  this.desc = desc;
  this.due = due;
  this.prio = prio;
  this.done = done;
}

TodoItem.prototype.addToList = function (list) {
  list.push(this);
};

export { TodoItem };
