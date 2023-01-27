import Task from "./tasks.js";
import { listCatalogue } from "./addToSrorage.js";
import { resetColors, resetList } from "./resetList.js";

const todayList = new Task();

export const addItem = (item) => {
  const todayListBox = document.querySelector(".list");
  const id = listCatalogue.length + 1;
  todayList.createTask(item);
  todayListBox.innerHTML += `<li class="list-item" id="list-${id}">
                    <div class="task-display">
                        <input type="checkbox" name="tasks" class="checkbox">
                        <input type="text" name="tasks-item" value="${item}" class="task-item" id="task-${id}" readonly>
                    </div>
                        <i class="fa-solid fa-trash-can"></i>
                        <i class="fa-solid func fa-ellipsis-vertical"></i>
                </li>`;
};

export const deleteItem = (item) => {
  const todayListBox = document.querySelector(".list");
  const task = item.querySelector('input[type="text"]').value;
  todayList.deleteTask(task);
  todayListBox.removeChild(item);
};

export const editItem = (item, ident) => {
  if (item.classList.contains("task-display")) {
    item = item.parentElement;
    ident = +item.id.slice(-1);
  }
  const func = item.querySelector(".func");
  const del = item.querySelector(".fa-trash-can");
  const input = item.querySelector('input[name="tasks-item"]');
  item.style.backgroundColor = "#fcf299";
  input.style.backgroundColor = "#fcf299";
  func.style.display = "none";
  del.style.display = "block";
  input.removeAttribute("readonly");
  input.focus();
  input.addEventListener("keyup", () => {
    listCatalogue.forEach((task) => {
      if (task.index === ident) {
        const desc = item.querySelector('input[name="tasks-item"]').value;
        todayList.editTask(ident, desc);
      }
    });
  });
  input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      listCatalogue.forEach((task) => {
        if (task.index === ident) {
          const desc = item.querySelector('input[name="tasks-item"]').value;
          todayList.editTask(ident, desc);
          input.setAttribute("readonly", "readonly");
          resetList();
          resetColors();
        }
      });
    }
  });
};

export const clearItems = (checkboxes) => {
  const todayListBox = document.querySelector(".list");
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      const item = checkbox.parentElement.parentElement;
      todayListBox.removeChild(item);
    }
  });
  todayList.clearAll();
};
