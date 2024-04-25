function moveItem() {
    const itemList = document.getElementById('itemList');
    const listItems = itemList.querySelectorAll('li');
  
    // Convert NodeList to Array for easier manipulation
    const itemsArray = Array.from(listItems);
  
    // Shuffle the array (change order randomly)
    itemsArray.sort(() => Math.random() - 0.5);
  
    // Clear the existing list
    itemList.innerHTML = '';
  
    // Append shuffled items back to the list
    itemsArray.forEach(item => {
      itemList.appendChild(item);
    });
  }
  