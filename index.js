  const leftContainer = document.querySelector(".left-container");
  const rightContainer = document.querySelector(".right-container");
  const images = document.querySelectorAll(".image");
  const icons = document.querySelectorAll(".material-icons");
  const texts = document.querySelectorAll(".text");
  const message = document.querySelector(".message");
  

const dragStart = (e) => {
    e.target.classList.add("dragged-item");
    console.log("DragStart");
  };
  
  const dragEnd = (e) => {
    e.target.classList.remove("dragged-item");
    console.log("DragEnd");
  };
  
  const dragOver = (e) => {
    e.preventDefault();
    console.log("DragOver");
  };
  
  const dragEnter = (e) => {
    console.log("DragEnter");
  };
  
  const dragLeave = () => {
    console.log("DragLeave");
  };
  const showMessage = () => {
    message.innerHTML = `<h5>Items dropped successfully!</h5>`;
    console.log(message);
  };
  
  const drop=(e) => {
    e.preventDefault();
    console.log("Drop");
    const draggedItem = document.querySelector(".dragged-item");
    if (draggedItem) {
      rightContainer.appendChild(draggedItem);
      showMessage();
    }
    
  };
  
  
  
  const reset = () => {
    leftContainer.innerHTML = `
      <img class="image" src="image.png" alt="Image 1" draggable="true" />
      <img class="image" src="image.png" alt="Image 2" draggable="true" />
      
      <i class="material-icons" draggable="true">cloud</i>
      <i class="material-icons" draggable="true">computer</i>
      
      <span class="text" draggable="true" draggable="true">hello</span>
      <span class="text" draggable="true" draggable="true">World</span>
    `;
    rightContainer.innerHTML='Drop items here'
    
  };
  
  
  
  const handleDraggableItem = (item) => {
    item.addEventListener("dragstart", dragStart);
    item.addEventListener("dragend", dragEnd);
  };
  
  leftContainer.addEventListener("dragover", dragOver);
  rightContainer.addEventListener("dragover", dragOver);
  rightContainer.addEventListener("dragenter", dragEnter);
  rightContainer.addEventListener("dragleave", dragLeave);
  rightContainer.addEventListener("drop", drop);
  
  
  
  images.forEach((image) => {
    handleDraggableItem(image);
  });
  
  icons.forEach((icon) => {
    handleDraggableItem(icon);
  });
  
  texts.forEach((text) => {
    handleDraggableItem(text);
  });

