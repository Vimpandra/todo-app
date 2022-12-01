function TodoItem(title, desc, prio, due) {
    this.title = title;
    this.desc = desc;
    this.prio = prio;
    this.due = due;
};

TodoItem.prototype.addToList = function(list) {
    list.push(this);
} 

export {TodoItem};