import { setLocalStorage } from "./setLocalStorage";

function renderListItems(list) {
    let listContent = document.getElementById(`${list.title} content`);
    // Loop that renders each item on the list
    for (let i = 0; i < list.list.length; i++) {
        
        const listItem = document.createElement(`div`);
        listItem.classList.add(`listItem`);
        listItem.classList.add(`minimized`);
        if (list.list[i].done) {
            listItem.classList.add(`checked`);
        };
        listContent.appendChild(listItem);
        listItem.setAttribute(`data-index`, i);

        const checkBox = document.createElement(`input`);
        checkBox.setAttribute(`type`, `checkbox`);
        checkBox.classList.add(`itemDone`);
        listItem.appendChild(checkBox);
        if (list.list[i].done) { checkBox.checked = true };
        checkBox.addEventListener(`input`, () => {
            if (checkBox.checked) {
                listItem.classList.add(`checked`);
                list.list[i].done = true;
            } else {
                listItem.classList.remove(`checked`);
                list.list[i].done = false;
            };
        });

        const itemTitle = document.createElement(`h3`);
        itemTitle.classList.add(`itemTitle`);
        itemTitle.textContent = list.list[i].title;
        listItem.appendChild(itemTitle);
        itemTitle.addEventListener(`click`, () => {
            itemExpandBtn.click();
        });

        const itemExpandBtn = document.createElement(`button`);
        itemExpandBtn.textContent = `+`;
        itemExpandBtn.classList.add(`itemExpandBtn`);
        listItem.appendChild(itemExpandBtn);
        itemExpandBtn.addEventListener(`click`, () => {
            if (itemExpandBtn.textContent === `+`) {
                itemExpandBtn.textContent = `-`;
                listItem.classList.toggle(`minimized`);
                itemDesc.classList.toggle(`hidden`);
                itemPrio.classList.toggle(`hidden`);
                itemDue.classList.toggle(`hidden`);
                itemEditBtn.classList.toggle(`hidden`);
                itemDelBtn.classList.toggle(`hidden`);
            } else {
                itemExpandBtn.textContent = `+`;
                listItem.classList.toggle(`minimized`);
                itemDesc.classList.toggle(`hidden`);
                itemPrio.classList.toggle(`hidden`);
                itemDue.classList.toggle(`hidden`);
                itemEditBtn.classList.toggle(`hidden`);
                itemDelBtn.classList.toggle(`hidden`);
            }
        });

        const itemDesc = document.createElement(`p`);
        itemDesc.classList.add(`itemDesc`);
        itemDesc.textContent = list.list[i].desc;
        listItem.appendChild(itemDesc);
        itemDesc.classList.add(`hidden`);

        const itemDue = document.createElement(`p`);
        itemDue.classList.add(`itemDue`);
        itemDue.textContent = `Due: ${list.list[i].due}`;
        listItem.appendChild(itemDue);
        itemDue.classList.add(`hidden`);

        const itemPrio = document.createElement(`p`);
        itemPrio.classList.add(`itemPrio`)
        itemPrio.innerHTML = `Priority: <strong>${list.list[i].prio}</strong>`;
        if (list.list[i].prio === `Urgent`) {
            listItem.classList.add(`prioUrgent`);
        } else if (list.list[i].prio === `ASAP`) {
            listItem.classList.add(`prioAsap`);
        } else if (list.list[i].prio === `Whenever`) {
            listItem.classList.add(`prioWhenever`);
        };
        listItem.appendChild(itemPrio);
        itemPrio.classList.add(`hidden`);

        const itemEditBtn = document.createElement(`div`);
        itemEditBtn.classList.add(`itemEditBtn`);
        itemEditBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>`;
        listItem.appendChild(itemEditBtn);
        itemEditBtn.classList.add(`hidden`);

        // Item Editing Module
        itemEditBtn.addEventListener(`click`, () => {
            itemTitle.classList.add(`hidden`);
            itemDesc.classList.add(`hidden`);
            itemPrio.classList.add(`hidden`);
            itemDue.classList.add(`hidden`);
            itemEditBtn.classList.add(`hidden`);
            itemDelBtn.classList.add(`hidden`);
            itemExpandBtn.classList.add(`hidden`);
            checkBox.classList.add(`hidden`);

            const editWindow = document.createElement(`div`);
            editWindow.classList.add(`editWindow`);
            listItem.appendChild(editWindow);

            const editModeTitle = document.createElement(`h3`);
            editModeTitle.textContent = `Edit Mode`;
            editWindow.appendChild(editModeTitle);

            const editTitleIpt = document.createElement(`input`);
            editTitleIpt.setAttribute(`type`, `text`);
            editTitleIpt.value = list.list[i].title;
            editWindow.appendChild(editTitleIpt);

            const editDescIpt = document.createElement(`input`);
            editDescIpt.setAttribute(`type`, `text`);
            editDescIpt.value = list.list[i].desc;
            editWindow.appendChild(editDescIpt);

            const editDueIpt = document.createElement(`input`);
            editDueIpt.setAttribute(`type`, `text`);
            editDueIpt.value = list.list[i].due;
            editWindow.appendChild(editDueIpt);

            // Edit prio inputs
            const editPrioContainer = document.createElement(`div`);
            editPrioContainer.classList.add(`editPrioContainer`);
            editWindow.appendChild(editPrioContainer);

            // Urgent
            const editUrgCont = document.createElement(`div`);
            editPrioContainer.appendChild(editUrgCont);

            const editPrioUrgent = document.createElement(`input`);
            editPrioUrgent.setAttribute(`type`, `radio`);
            editPrioUrgent.setAttribute(`id`, `editPrioUrgent`);
            editPrioUrgent.setAttribute(`name`, `editPrio`);
            editPrioUrgent.value = `Urgent`;
            editUrgCont.appendChild(editPrioUrgent);
            if (list.list[i].prio === `Urgent`) {
                editPrioUrgent.checked = true;
            };

            const editPrioUrgentLabel = document.createElement(`label`);
            editPrioUrgentLabel.setAttribute(`for`, `editPrioUrgent`);
            editPrioUrgentLabel.textContent = `Urgent`;
            editUrgCont.appendChild(editPrioUrgentLabel);

            // ASAP
            const editAsapCont = document.createElement(`div`);
            editPrioContainer.appendChild(editAsapCont);

            const editPrioAsap = document.createElement(`input`);
            editPrioAsap.setAttribute(`type`, `radio`);
            editPrioAsap.setAttribute(`id`, `editPrioAsap`);
            editPrioAsap.setAttribute(`name`, `editPrio`);
            editPrioAsap.value = `ASAP`;
            editAsapCont.appendChild(editPrioAsap);
            if (list.list[i].prio === `ASAP`) {
                editPrioAsap.checked = true;
            };

            const editPrioAsapLabel = document.createElement(`label`);
            editPrioAsapLabel.setAttribute(`for`, `editPrioAsap`);
            editPrioAsapLabel.textContent = `ASAP`;
            editAsapCont.appendChild(editPrioAsapLabel);

            // Whenever
            const editWheneverCont = document.createElement(`div`);
            editPrioContainer.appendChild(editWheneverCont);

            const editPrioWhenever = document.createElement(`input`);
            editPrioWhenever.setAttribute(`type`, `radio`);
            editPrioWhenever.setAttribute(`id`, `editPrioWhenever`);
            editPrioWhenever.setAttribute(`name`, `editPrio`);
            editPrioWhenever.value = `Whenever`;
            editWheneverCont.appendChild(editPrioWhenever);
            if (list.list[i].prio === `Whenever`) {
                editPrioWhenever.checked = true;
            };

            const editPrioWhenLabel = document.createElement(`label`);
            editPrioWhenLabel.setAttribute(`for`, `editPrioWhenever`);
            editPrioWhenLabel.textContent = `Whenever`;
            editWheneverCont.appendChild(editPrioWhenLabel);



            const exitEditModeBtn = document.createElement(`button`);
            exitEditModeBtn.textContent = `Exit edit mode`;
            exitEditModeBtn.classList.add(`submitBtn`);
            editWindow.appendChild(exitEditModeBtn);
            exitEditModeBtn.addEventListener(`click`, () => {
                if (editTitleIpt.value !== ``) {
                    list.list[i].title = editTitleIpt.value;
                };
                if (editDescIpt.value !== ``) {
                    list.list[i].desc = editDescIpt.value;
                };
                if (editDueIpt.value !== ``) {
                    list.list[i].due = editDueIpt.value;
                };
                if (editPrioUrgent.checked) {
                    list.list[i].prio = editPrioUrgent.value;
                    listItem.classList.add(`prioUrgent`);
                    listItem.classList.remove(`prioAsap`);
                    listItem.classList.remove(`prioWhenever`);
                } else if (editPrioAsap.checked) {
                    list.list[i].prio = editPrioAsap.value;
                    listItem.classList.remove(`prioUrgent`);
                    listItem.classList.add(`prioAsap`);
                    listItem.classList.remove(`prioWhenever`);
                } else if (editPrioWhenever.checked) {
                    list.list[i].prio = editPrioWhenever.value;
                    listItem.classList.remove(`prioUrgent`);
                    listItem.classList.remove(`prioAsap`);
                    listItem.classList.add(`prioWhenever`);
                };

                itemTitle.textContent = list.list[i].title;
                itemDesc.textContent = list.list[i].desc;
                itemDue.textContent = `Due: ${list.list[i].due}`;
                itemPrio.innerHTML = `Priority: <strong>${list.list[i].prio}</strong>`;

                editWindow.remove();
                itemTitle.classList.remove(`hidden`);
                itemDesc.classList.remove(`hidden`);
                itemPrio.classList.remove(`hidden`);
                itemDue.classList.remove(`hidden`);
                itemEditBtn.classList.remove(`hidden`);
                itemDelBtn.classList.remove(`hidden`);
                itemDelBtn.classList.remove(`hidden`);
                itemExpandBtn.classList.remove(`hidden`);
                checkBox.classList.remove(`hidden`);

                setLocalStorage();
            });
        });

        const itemDelBtn = document.createElement(`div`);
        itemDelBtn.classList.add(`itemDelBtn`);
        itemDelBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>`;
        listItem.appendChild(itemDelBtn);
        itemDelBtn.classList.add(`hidden`);
        itemDelBtn.addEventListener(`click`, () => {
            list.list.splice(i, 1);
            listItem.remove();
            setLocalStorage();
        });
    };
}

export {renderListItems}