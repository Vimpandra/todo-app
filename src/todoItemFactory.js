function TodoItem(title, desc, due, prio) {
    this.title = title;
    this.desc = desc;
    this.due = due;
    this.prio = prio;
    this.done = false;
};

TodoItem.prototype.addToList = function(list) {
    list.push(this);
} 

export {TodoItem};