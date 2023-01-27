/**
 * @jest-environment jsdom
 */
const Task = require("../tasks.js").default;
const { listCatalogue } = require("../addToSrorage.js");
const { addItem, deleteItem } = require("../list.js");

const taskList = new Task();

// Test for adding Todo
describe("Test for Adding Tasks", () => {
  it("Add task, array object is not null", () => {
    taskList.createTask("Morning task 1");
    const SIZE = listCatalogue.length;
    expect(SIZE).not.toBeNull();
  });

  it("Add task, complete flag is set to false by default on Add", () => {
    taskList.createTask("Morning task 2");
    const SIZE = listCatalogue.length;
    expect(listCatalogue[SIZE - 1].complete).toBeFalsy();
  });

  it("Add task, new task index is the length of the array", () => {
    taskList.createTask("Morning task 3");
    const SIZE = listCatalogue.length;
    expect(listCatalogue[SIZE - 1].index).toBe(SIZE);
  });

  it("Add task, new task added to the DOM", () => {
    document.body.innerHTML = '<div><ul class="list"></ul></div>';
    addItem("Morning task 4");
    const list = document.querySelectorAll(".list li");
    expect(list).toHaveLength(1);
  });

  it("Add task, new task in the DOM has a value of todo description", () => {
    document.body.innerHTML = '<div><ul class="list"></ul></div>';
    addItem("Morning task 5");
    const list = document.querySelectorAll(".list li");
    expect(list[list.length - 1].querySelector(".task-item").value).toBe(
      "Morning task 5"
    );
  });

  it("Add Task, check if localStorage is updated after add", () => {
    const savedTodosBefore = JSON.parse(localStorage.getItem("listCatalogue"));
    taskList.createTask("Morning task 6");
    const savedTodosAfter = JSON.parse(localStorage.getItem("listCatalogue"));
    expect(savedTodosAfter.length).toBe(savedTodosBefore.length + 1);
  });
});

// Test for removing ToDO
describe("Test for Removing Tasks", () => {
  it("Remove Task, removes todo and array size reduces", () => {
    const SIZE = listCatalogue.length;
    taskList.deleteTask("Morning task 6");
    const NEW_SIZE = listCatalogue.length;
    expect(NEW_SIZE).toBe(SIZE - 1);
  });

  it("Remove Task, multiple add and after remove array is reindexed", () => {
    const SIZE = listCatalogue.length;
    listCatalogue.splice(0, SIZE);
    taskList.createTask("Morning task 7");
    taskList.createTask("Morning task 8");
    taskList.createTask("Morning task 9");
    taskList.createTask("Morning task 10");

    taskList.deleteTask("Morning task 7");
    taskList.deleteTask("Morning task 9");
    expect(listCatalogue[0].index).toBe(1);
  });

  it("Remove Task, DOM has a one less todo, and updated accordingly", () => {
    document.body.innerHTML = '<div><ul class="list"></ul></div>';
    addItem("Morning task 9");
    addItem("Morning task 10");
    addItem("Morning task 11");
    addItem("Morning task 12");
    const SIZE = listCatalogue.length;
    const task10 = document.querySelector(`#list-${SIZE - 1}`);
    deleteItem(task10);
    const list = document.querySelectorAll(".list li");
    expect(list).toHaveLength(3);
  });

  it("Remove Task, check if localStorage is updated after remove", () => {
    const savedTodosBefore = JSON.parse(localStorage.getItem("listCatalogue"));
    taskList.deleteTask("Morning task 12");
    const savedTodosAfter = JSON.parse(localStorage.getItem("listCatalogue"));
    expect(savedTodosAfter.length).toBe(savedTodosBefore.length - 1);
  });
});
