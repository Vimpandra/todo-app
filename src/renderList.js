import { TodoList } from "./listFactory";
import { renderListItems } from "./renderListItems";
import { renderAddListItem } from "./renderAddListItem";
import { setLocalStorage } from "./setLocalStorage";

function renderList(list) {

    const content = document.getElementById(`content`);

    const listBody = document.createElement(`div`);
    listBody.setAttribute(`id`, list.title);
    content.appendChild(listBody);
    listBody.classList.add(`listCard`);

    const listTitle = document.createElement(`h2`);
    listTitle.textContent = list.title;
    listTitle.classList.add(`listTitle`);
    listBody.appendChild(listTitle);

    const listExpandBtn = document.createElement(`button`);
    listExpandBtn.classList.add(`listExpandBtn`);
    listExpandBtn.textContent = `-`;
    listBody.appendChild(listExpandBtn);
    listExpandBtn.addEventListener(`click`, () => {
        if (listExpandBtn.textContent === `-`) {
            listExpandBtn.textContent = `+`;
            listContent.classList.toggle(`hidden`);
        } else {
            listExpandBtn.textContent = `-`;
            listContent.classList.toggle(`hidden`);
        }
    });

    const listContent = document.createElement(`div`);
    listContent.classList.add(`listContent`);
    listContent.setAttribute(`id`, `${list.title} content`);
    listBody.appendChild(listContent);

    renderListItems(list);

    const listControlBtns = document.createElement(`div`);
    listControlBtns.classList.add(`listControlBtns`);
    listBody.appendChild(listControlBtns);

    const delListBtn = document.createElement(`button`);
    delListBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>`;
    delListBtn.classList.add(`controlBtn`);
    listControlBtns.appendChild(delListBtn);
    delListBtn.addEventListener(`click`, () => {
        if (confirm(`Are you sure you want to delete ${list.title} and all it's content?`)) {
            listBody.remove();
            setLocalStorage();
        }
    });

    const addItemBtn = document.createElement(`button`);
    addItemBtn.classList.add(`controlBtn`);
    addItemBtn.textContent = `+`;
    listControlBtns.appendChild(addItemBtn);
    addItemBtn.addEventListener(`click`, () => {
        addItemBtn.classList.add(`hidden`);
        delListBtn.classList.add(`hidden`);
        renderAddListItem(listBody, list);
    });
};

export {renderList};