import { sortTasks } from "./addToSrorage.js";
import { resetList, resetColors } from "./resetList.js";
import { editItem, addItem, deleteItem, clearItems } from "./list.js";
import renderCatalogue from "./addNdDelete.js";
import { checkFunction } from "./checked.js";
import "./style.css";

const unorderedList = document.querySelector(".list");
const plusIcon = document.querySelector(".add-icon");
const addTaskInput = document.getElementById("add-task-input");
const taskInput = document.querySelectorAll("input");
const appBox = document.querySelector(".main-box");

sortTasks();

plusIcon.addEventListener("click", () => {
  const toDo = addTaskInput.value;
  if (toDo.length > 0) {
    addItem(toDo);
    addTaskInput.value = "";
  }
});

addTaskInput.addEventListener("keypress", (event) => {
  resetColors();
  if (event.key === "Enter") {
    const toDo = addTaskInput.value;
    if (toDo.length > 0) {
      addItem(toDo);
      addTaskInput.value = "";
    }
  }
});

addTaskInput.addEventListener("click", () => {
  resetList();
  resetColors();
});

taskInput.forEach((input) => {
  input.addEventListener("click", () => {
    resetList();
    resetColors();
  });
});

unorderedList.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("func") ||
    event.target.classList.contains("task-item")
  ) {
    const item = event.target.parentElement;
    resetList();
    resetColors();
    const id = +item.id.slice(-1);
    editItem(item, id);
  } else if (event.target.classList.contains("fa-trash-can")) {
    const item = event.target.parentElement;
    deleteItem(item);
  } else if (event.target.classList.contains("checkbox")) {
    const item = event.target.parentElement.parentElement;
    const checkbox = event.target;
    checkFunction(item, checkbox);
  }
});

appBox.addEventListener("click", (event) => {
  if (event.target.classList.contains("clear")) {
    const checkboxes = appBox.querySelectorAll(".checkbox");
    clearItems(checkboxes);
  }
});

renderCatalogue();
