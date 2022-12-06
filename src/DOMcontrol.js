import { TodoList } from "./listFactory";

function renderList(list) {
    const content = document.getElementById(`content`);

    const listBody = document.createElement(`div`);
    content.appendChild(listBody);
    listBody.classList.add(`listCard`);

    const listTitle = document.createElement(`h2`);
    listTitle.textContent = list.title;
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
    listBody.appendChild(listContent);

    for (let i = 0; i < list.list.length; i++) {
        const listItem = document.createElement(`div`);
        listItem.classList.add(`listItem`);
        listItem.classList.add(`minimized`);
        listContent.appendChild(listItem);

        const checkBox = document.createElement(`input`);
        checkBox.setAttribute(`type`, `checkbox`);
        listItem.appendChild(checkBox);

        const itemTitle = document.createElement(`h3`);
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

        const itemPrio = document.createElement(`p`);
        itemPrio.classList.add(`itemPrio`)
        itemPrio.innerHTML = `Priority: <strong>${list.list[i].prio}</strong>`;
        listItem.appendChild(itemPrio);
        itemPrio.classList.add(`hidden`);

        const itemDue = document.createElement(`p`);
        itemDue.classList.add(`itemDue`);
        itemDue.textContent = `Due: ${list.list[i].due}`;
        listItem.appendChild(itemDue);
        itemDue.classList.add(`hidden`);

        const itemEditBtn = document.createElement(`div`);
        itemEditBtn.classList.add(`itemEditBtn`);
        itemEditBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>`;
        listItem.appendChild(itemEditBtn);
        itemEditBtn.classList.add(`hidden`);

        const itemDelBtn = document.createElement(`div`);
        itemDelBtn.classList.add(`itemDelBtn`);
        itemDelBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>`;
        listItem.appendChild(itemDelBtn);
        itemDelBtn.classList.add(`hidden`);
    };

    const addItemBtn = document.createElement(`button`);
    addItemBtn.classList.add(`addItemBtn`);
    addItemBtn.textContent = `+`;
    listBody.appendChild(addItemBtn);
    addItemBtn.addEventListener(`click`, () => {
        addItemBtn.classList.add(`hidden`);
        renderAddListItem(listBody, list);
    });
};


function renderAddListItem(container, list) {
    const newItemWindow = document.createElement(`div`);
    newItemWindow.classList.add(`newItemWindow`);
    newItemWindow.setAttribute(`id`, `newItemWindow`);
    container.appendChild(newItemWindow);

    const newItemTitle = document.createElement(`h4`);
    newItemTitle.textContent = `Add a new item to this list`;
    newItemWindow.appendChild(newItemTitle);

    // Input title
    const iptContainerTitle = document.createElement(`div`);
    iptContainerTitle.classList.add(`iptContainer`);
    newItemWindow.appendChild(iptContainerTitle);

    const iptTitle = document.createElement(`input`);
    iptTitle.setAttribute(`type`, `text`);
    iptTitle.setAttribute(`name`, `title`);
    iptTitle.setAttribute(`id`, `iptTitle`);
    iptContainerTitle.appendChild(iptTitle);
    iptTitle.addEventListener(`input`, () => {
        checkFill(iptTitle);
    });

    const iptTitleLabel = document.createElement(`label`);
    iptTitleLabel.setAttribute(`for`, `title`);
    iptTitleLabel.textContent = `Title`;
    iptContainerTitle.appendChild(iptTitleLabel);

    // Input description
    const iptContainerDesc = document.createElement(`div`);
    iptContainerDesc.classList.add(`iptContainer`);
    newItemWindow.appendChild(iptContainerDesc);

    const iptDesc = document.createElement(`input`);
    iptDesc.setAttribute(`type`, `text`);
    iptDesc.setAttribute(`name`, `desc`);
    iptDesc.setAttribute(`id`, `iptDesc`);
    iptContainerDesc.appendChild(iptDesc);
    iptDesc.addEventListener(`input`, () => {
        checkFill(iptDesc);
    });

    const iptDescLabel = document.createElement(`label`);
    iptDescLabel.setAttribute(`for`, `desc`);
    iptDescLabel.textContent = `Description`;
    iptContainerDesc.appendChild(iptDescLabel);

    // Input due
    const iptContainerDue = document.createElement(`div`);
    iptContainerDue.classList.add(`iptContainer`);
    newItemWindow.appendChild(iptContainerDue);

    const iptDue = document.createElement(`input`);
    iptDue.setAttribute(`type`, `text`);
    iptDue.setAttribute(`name`, `due`);
    iptDue.setAttribute(`id`, `iptDue`);
    iptContainerDue.appendChild(iptDue);
    iptDue.addEventListener(`input`, () => {
        checkFill(iptDue);
    });

    const iptDueLabel = document.createElement(`label`);
    iptDueLabel.setAttribute(`for`, `due`);
    iptDueLabel.textContent = `Due time`;
    iptContainerDue.appendChild(iptDueLabel);

    // Input priority
    const iptContainerPrio = document.createElement(`div`);
    iptContainerPrio.classList.add(`radioContainer`);
    newItemWindow.appendChild(iptContainerPrio);

    const prioTitle = document.createElement(`h4`);
    prioTitle.textContent = `Priority`;
    iptContainerPrio.appendChild(prioTitle);
    
    // -- Urgent
    const urgentContainer = document.createElement(`div`);
    iptContainerPrio.appendChild(urgentContainer);

    const iptPrioUrgent = document.createElement(`input`);
    iptPrioUrgent.setAttribute(`type`, `radio`);
    iptPrioUrgent.setAttribute(`name`, `prio`);
    iptPrioUrgent.setAttribute(`id`, `iptPrioUrgent`);
    iptPrioUrgent.value = `Urgent`;
    urgentContainer.appendChild(iptPrioUrgent);

    const prioUrgentLabel = document.createElement(`label`);
    prioUrgentLabel.setAttribute(`for`, `iptPrioUrgent`);
    prioUrgentLabel.textContent = `Urgent`;
    urgentContainer.appendChild(prioUrgentLabel);

    // -- ASAP
    const asapContainer = document.createElement(`div`);
    iptContainerPrio.appendChild(asapContainer);

    const iptPrioAsap = document.createElement(`input`);
    iptPrioAsap.setAttribute(`type`, `radio`);
    iptPrioAsap.setAttribute(`name`, `prio`);
    iptPrioAsap.setAttribute(`id`, `iptPrioAsap`);
    iptPrioAsap.value = `ASAP`;
    asapContainer.appendChild(iptPrioAsap);

    const prioAsapLabel = document.createElement(`label`);
    prioAsapLabel.setAttribute(`for`, `iptPrioAsap`);
    prioAsapLabel.textContent = `ASAP`;
    asapContainer.appendChild(prioAsapLabel);

    // -- Whenever
    const wheneverContainer = document.createElement(`div`);
    iptContainerPrio.appendChild(wheneverContainer);

    const iptPrioWhenever = document.createElement(`input`);
    iptPrioWhenever.setAttribute(`type`, `radio`);
    iptPrioWhenever.setAttribute(`name`, `prio`);
    iptPrioWhenever.setAttribute(`id`, `iptPrioWhenever`);
    iptPrioWhenever.value = `Whenever`;
    wheneverContainer.appendChild(iptPrioWhenever);

    const prioWheneverLabel = document.createElement(`label`);
    prioWheneverLabel.setAttribute(`for`, `iptPrioWhenever`);
    prioWheneverLabel.textContent = `Whenever`;
    wheneverContainer.appendChild(prioWheneverLabel);

    // Submit Button
    const submitBtn = document.createElement(`button`);
    submitBtn.setAttribute(`id`, `submitNewItemBtn`);
    submitBtn.textContent = `Add Item to List`;
    submitBtn.classList.add(`submitBtn`);
    newItemWindow.appendChild(submitBtn);

    function checkPrio() {
        if (iptPrioUrgent.checked) {
            return iptPrioUrgent.value;
        } else if (iptPrioAsap.checked) {
            return iptPrioAsap.value;
        } else if (iptPrioWhenever.checked) {
            return iptPrioWhenever.value;
        }
    };

    submitBtn.addEventListener(`click`, () => {
        if (iptTitle.value == ``) return
        else {
            list.newItem(iptTitle.value, iptDesc.value, iptDue.value, checkPrio());
            content.textContent = null;
            renderList(list);
        }
    });
}

function checkFill(ipt) {
    if (ipt.value.length == 0) {
        ipt.classList.remove(`filled`);
    } else {
        ipt.classList.add(`filled`);
    }
};

export {renderList};