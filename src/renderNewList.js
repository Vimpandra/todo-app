import { renderList } from "./renderList";
import { TodoList } from "./listFactory";
import { setLocalStorage } from "./setLocalStorage";

function renderNewList() {
    const newListBtn = document.getElementById(`newListBtn`);
    newListBtn.addEventListener(`click`, () => {
        const content = document.getElementById(`content`);
        if (content.classList.contains(`windowOpen`)) return;
        content.classList.add(`windowOpen`);    
        
        const newListWindow = document.createElement(`div`);
        newListWindow.classList.add(`newListWindow`);
        content.appendChild(newListWindow);

        const promptTitle = document.createElement(`h2`);
        promptTitle.textContent = `What will your new list be called?`;
        newListWindow.appendChild(promptTitle);

        const iptTitle = document.createElement(`input`);
        iptTitle.setAttribute(`type`, `text`);
        iptTitle.placeholder = `My Todo List`;
        newListWindow.appendChild(iptTitle);

        const submitBtn = document.createElement(`button`);
        submitBtn.textContent = `Create new list`;
        newListWindow.appendChild(submitBtn);
        submitBtn.addEventListener(`click`, () => {
            content.classList.remove(`windowOpen`);
            const newList = new TodoList(iptTitle.value);
            renderList(newList);
            newListWindow.remove();
            setLocalStorage();
        });
    });
};

export { renderNewList };