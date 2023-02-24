function setLocalStorage() {
    localStorage.clear();

    const listCards = document.getElementsByClassName(`listCard`);
    let listTitle = document.getElementsByClassName(`listTitle`);

    localStorage.setItem(`numberOfLists`, listCards.length);
    
    for (let i = 0; i < listCards.length; i++) {
        localStorage.setItem(`list${i}Title`, listTitle[i].textContent);

        let listItems = listCards[i].children[2].children;
        localStorage.setItem(`list${i}Length`, listItems.length);
        
        for (let e = 0; e < listItems.length; e++) {
            localStorage.setItem(`list${i}Item${e}Title`, listItems[e].getElementsByClassName(`itemTitle`)[0].textContent);
            localStorage.setItem(`list${i}Item${e}Desc`, listItems[e].getElementsByClassName(`itemDesc`)[0].textContent);
            localStorage.setItem(`list${i}Item${e}Due`, listItems[e].getElementsByClassName(`itemDue`)[0].textContent.slice(5));
            localStorage.setItem(`list${i}Item${e}Prio`, listItems[e].getElementsByClassName(`itemPrio`)[0].textContent.slice(10));
            
            if (listItems[e].getElementsByClassName(`itemDone`)[0].checked) {
                localStorage.setItem(`item${e}Done`, true);
            } else {
                localStorage.setItem(`item${e}Done`, false);
            }
        } 
    }
};

export {setLocalStorage};