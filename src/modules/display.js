/*const display = (arry, main) => {
    const view = /*`
      <div class="ic">
        <div class='white'></div>
        <i class="fa-solid fa-check"></i>
      </div>
      <form>
        <input type="text" id="tasks" value= "${arry.desc}" readonly >
      </form>
      <div class="icons">
          <i class="fa-solid fa-ellipsis-vertical" id="more"></i>
          <i class="fa-solid fa-trash" id="trash"></i>
      </div>`;*/
      /*`<li class="todo">
          <div>
              <input type="checkbox" id="checkout">
              <input type="text" id="tasks" value= "${arry.desc}" readonly >
              <i class="fa fa-ellipsis-v"></i>
              <i class="fa fa-trash" id=${arry.index}></i>
          </div>
      </li>`
    const each = document.createElement('ul');
    each.classList.add('allTodes');
    each.innerHTML = view;
    main.appendChild(each);
  };
  export default display;
*/
import { updateLocalStorage, tasks } from './update.js';
function renderTasks() {
  const taskList = document.getElementById("task-list");
// let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <input type="checkbox" class="fas" id="task${index}" ${task.completed ? "checked" : ""}>

        <form id = 'worr'>
          <input value="${task.description}" id='word' readonly>
        </form>

        <button class="delete">
          <i class="fa-solid fa-times" id='times'></i>
          <i class="fa-solid fa-pen" id='pen'></i>
        </button>
      `;
      taskList.appendChild(li);
    });
  }

  export default renderTasks
