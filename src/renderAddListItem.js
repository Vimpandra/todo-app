import { renderListItems } from "./renderListItems";
import { setLocalStorage } from "./setLocalStorage";

function renderAddListItem(container, list) {
  const newItemWindow = document.createElement("div");
  newItemWindow.classList.add("newItemWindow");
  newItemWindow.setAttribute("id", "newItemWindow");
  container.appendChild(newItemWindow);

  const newItemTitle = document.createElement("h4");
  newItemTitle.textContent = "Add a new item to this list";
  newItemWindow.appendChild(newItemTitle);

  // Input title
  const iptContainerTitle = document.createElement("div");
  iptContainerTitle.classList.add("iptContainer");
  newItemWindow.appendChild(iptContainerTitle);

  const iptTitle = document.createElement("input");
  iptTitle.setAttribute("type", "text");
  iptTitle.setAttribute("name", "title");
  iptTitle.setAttribute("id", "iptTitle");
  iptContainerTitle.appendChild(iptTitle);
  iptTitle.addEventListener("input", () => {
    checkFill(iptTitle);
  });

  const iptTitleLabel = document.createElement("label");
  iptTitleLabel.setAttribute("for", "title");
  iptTitleLabel.textContent = "Title";
  iptContainerTitle.appendChild(iptTitleLabel);

  // Input description
  const iptContainerDesc = document.createElement("div");
  iptContainerDesc.classList.add("iptContainer");
  newItemWindow.appendChild(iptContainerDesc);

  const iptDesc = document.createElement("input");
  iptDesc.setAttribute("type", "text");
  iptDesc.setAttribute("name", "desc");
  iptDesc.setAttribute("id", "iptDesc");
  iptContainerDesc.appendChild(iptDesc);
  iptDesc.addEventListener("input", () => {
    checkFill(iptDesc);
  });

  const iptDescLabel = document.createElement("label");
  iptDescLabel.setAttribute("for", "desc");
  iptDescLabel.textContent = "Description";
  iptContainerDesc.appendChild(iptDescLabel);

  // Input due
  const iptContainerDue = document.createElement("div");
  iptContainerDue.classList.add("iptContainer");
  newItemWindow.appendChild(iptContainerDue);

  const iptDue = document.createElement("input");
  iptDue.setAttribute("type", "text");
  iptDue.setAttribute("name", "due");
  iptDue.setAttribute("id", "iptDue");
  iptContainerDue.appendChild(iptDue);
  iptDue.addEventListener("input", () => {
    checkFill(iptDue);
  });

  const iptDueLabel = document.createElement("label");
  iptDueLabel.setAttribute("for", "due");
  iptDueLabel.textContent = "Due time";
  iptContainerDue.appendChild(iptDueLabel);

  // Input priority
  const iptContainerPrio = document.createElement("div");
  iptContainerPrio.classList.add("radioContainer");
  newItemWindow.appendChild(iptContainerPrio);

  const prioTitle = document.createElement("h4");
  prioTitle.textContent = "Priority";
  iptContainerPrio.appendChild(prioTitle);

  // -- Urgent
  const urgentContainer = document.createElement("div");
  iptContainerPrio.appendChild(urgentContainer);

  const iptPrioUrgent = document.createElement("input");
  iptPrioUrgent.setAttribute("type", "radio");
  iptPrioUrgent.setAttribute("name", "prio");
  iptPrioUrgent.setAttribute("id", "iptPrioUrgent");
  iptPrioUrgent.value = "Urgent";
  urgentContainer.appendChild(iptPrioUrgent);

  const prioUrgentLabel = document.createElement("label");
  prioUrgentLabel.setAttribute("for", "iptPrioUrgent");
  prioUrgentLabel.textContent = "Urgent";
  urgentContainer.appendChild(prioUrgentLabel);

  // -- ASAP
  const asapContainer = document.createElement("div");
  iptContainerPrio.appendChild(asapContainer);

  const iptPrioAsap = document.createElement("input");
  iptPrioAsap.setAttribute("type", "radio");
  iptPrioAsap.setAttribute("name", "prio");
  iptPrioAsap.setAttribute("id", "iptPrioAsap");
  iptPrioAsap.value = "ASAP";
  asapContainer.appendChild(iptPrioAsap);

  const prioAsapLabel = document.createElement("label");
  prioAsapLabel.setAttribute("for", "iptPrioAsap");
  prioAsapLabel.textContent = "ASAP";
  asapContainer.appendChild(prioAsapLabel);

  // -- Whenever
  const wheneverContainer = document.createElement("div");
  iptContainerPrio.appendChild(wheneverContainer);

  const iptPrioWhenever = document.createElement("input");
  iptPrioWhenever.setAttribute("type", "radio");
  iptPrioWhenever.setAttribute("name", "prio");
  iptPrioWhenever.checked = true;
  iptPrioWhenever.setAttribute("id", "iptPrioWhenever");
  iptPrioWhenever.value = "Whenever";
  wheneverContainer.appendChild(iptPrioWhenever);

  const prioWheneverLabel = document.createElement("label");
  prioWheneverLabel.setAttribute("for", "iptPrioWhenever");
  prioWheneverLabel.textContent = "Whenever";
  wheneverContainer.appendChild(prioWheneverLabel);

  // Submit Button
  const submitBtn = document.createElement("button");
  submitBtn.setAttribute("id", "submitNewItemBtn");
  submitBtn.textContent = "Add Item to List";
  submitBtn.classList.add("submitBtn");
  newItemWindow.appendChild(submitBtn);

  function checkPrio() {
    if (iptPrioUrgent.checked) {
      return iptPrioUrgent.value;
    } else if (iptPrioAsap.checked) {
      return iptPrioAsap.value;
    } else if (iptPrioWhenever.checked) {
      return iptPrioWhenever.value;
    }
  }

  function checkFill(ipt) {
    if (ipt.value.length === 0) {
      ipt.classList.remove("filled");
    } else {
      ipt.classList.add("filled");
    }
  }

  submitBtn.addEventListener("click", () => {
    const addItemBtn = document.getElementById(`${list.title} addItemBtn`);
    const delListBtn = document.getElementById(`${list.title} delListBtn`);
    if (iptTitle.value === "") {
      newItemWindow.remove();
      addItemBtn.classList.remove("hidden");
      delListBtn.classList.remove("hidden");
    } else {
      list.newItem(
        iptTitle.value,
        iptDesc.value,
        iptDue.value,
        checkPrio(),
        false
      );
      renderListItems(list);
      newItemWindow.remove();
      addItemBtn.classList.remove("hidden");
      delListBtn.classList.remove("hidden");

      setLocalStorage();
    }
  });
}

export { renderAddListItem };
