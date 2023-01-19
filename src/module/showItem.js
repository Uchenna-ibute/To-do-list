const display = (array) => {
    const view = `
      <div class="item">
        <div class='goes'></div>
        <i class="fa-solid fa-check"></i>
      </div>

      <input type="text" id="tasks" value= "${array.description}" readonly >
      <div class="icons">
          <i class="fa-solid fa-ellipsis-vertical" id="more"></i>
          <i class="fa-solid fa-trash" id="trash"></i>
      </div>`;

    const item = document.createElement('div');
    item.classList.add('each');
    item.innerHTML = view;
    const list =document.querySelector('.list')
    list.appendChild(item)
  };
  export default display;