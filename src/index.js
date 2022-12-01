import { TodoItem } from "./todoItemFactory";
import { TodoList } from "./listFactory";

const myList = new TodoList(`Today's To Do`);

const smokeWeed = new TodoItem(`Smoke Weed`, `Gotta do it everyday`, `Urgent`, `4:20`);
const dohw = new TodoItem(`Do homework`, `Science and math`, `Whenever`, `Tomorrow`);

smokeWeed.addToList(myList.list);
dohw.addToList(myList.list);

console.log(myList);

const DOMcontrol = (function() {
    function renderList(list) {
        const content = document.getElementById(`content`);

        const listBody = document.createElement(`div`);
        content.appendChild(listBody);
        listBody.classList.add(`listCard`);

        const listTitle = document.createElement(`h2`);
        listTitle.textContent = list.title;
        listBody.appendChild(listTitle);

        const listContent = document.createElement(`div`);
        listContent.classList.add(`listContent`);
        listBody.appendChild(listContent);

        for (let i = 0; i < list.list.length; i++) {
            const listItem = document.createElement(`div`);
            listItem.classList.add(`listItem`);
            listContent.appendChild(listItem);

            const itemTitle = document.createElement(`h3`);
            itemTitle.textContent = list.list[i].title;
            listItem.appendChild(itemTitle);

            const itemDesc = document.createElement(`p`);
            itemDesc.classList.add(`itemDesc`);
            itemDesc.textContent = list.list[i].desc;
            listItem.appendChild(itemDesc);

            const itemPrio = document.createElement(`p`);
            itemPrio.classList.add(`itemPrio`)
            itemPrio.innerHTML = `Priority: <strong>${list.list[i].prio}</strong>`;
            listItem.appendChild(itemPrio);

            const itemDue = document.createElement(`p`);
            itemDue.classList.add(`itemDue`);
            itemDue.textContent = `Due: ${list.list[i].due}`;
            listItem.appendChild(itemDue);
        };
    };

    renderList(myList);
})();