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
};

export {renderList};