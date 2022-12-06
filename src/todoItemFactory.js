function TodoItem(title, desc, due, prio) {
    this.title = title;
    this.desc = desc;
    this.due = due;
    this.prio = prio;
};

TodoItem.prototype.addToList = function(list) {
    list.push(this);
} 

export {TodoItem};