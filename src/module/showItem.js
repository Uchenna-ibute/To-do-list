const display = (array,list) => {
  const view = `
    <div class="item" data-completed ='${array.completed}'>
        <div class='goes'></div>
        <i class="fa-solid fa-check" id='checked'></i>
      </div>
      <form id=worr>
         <input type="text" id="tasks" value= "${array.description}" readonly >
      </form>
      <div class="icons">
          <i class="fa-solid fa-ellipsis-vertical" id="more"></i>
          <i class="fa-solid fa-trash" id="trash"></i>
      </div>`;

  const item = document.createElement('div');
  item.classList.add('each');
  item.innerHTML = view;
  list.appendChild(item);
};
export default display;