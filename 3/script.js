document.addEventListener('DOMContentLoaded', () => {
  const moveButton = document.getElementById('moveButton');
  const itemList = document.getElementById('itemList');

  moveButton.addEventListener('click', moveItem);

  const items = itemList.querySelectorAll('li');

  items.forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragover', dragOver);
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('dragleave', dragLeave);
    item.addEventListener('drop', dragDrop);
    item.addEventListener('dragend', dragEnd);
  });

  let dragItem = null;

  function moveItem() {
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

  function dragStart() {
    dragItem = this;
    setTimeout(() => this.style.display = 'none', 0);
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function dragEnter(e) {
    e.preventDefault();
    this.classList.add('drag-over');
  }

  function dragLeave() {
    this.classList.remove('drag-over');
  }

  function dragDrop() {
    this.classList.remove('drag-over');
    this.parentNode.insertBefore(dragItem, this);
  }

  function dragEnd() {
    this.style.display = 'block';
    dragItem = null;
  }
});
