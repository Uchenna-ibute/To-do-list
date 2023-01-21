import './style.css';
import { updateLocalStorage, tasks } from './modules/update.js';
import changeicon from './modules/change.js';
import deleteTask from './modules/deleteTask.js';
import editList from './modules/edit.js';
import renderTasks from './modules/display.js';
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const input = document.querySelector("input");
    if (input.value === "") {return alert("Please enter a task")};
    const task = {
      description: input.value,
      completed: false,
      index: tasks.length + 1
    };

    // add tasks
    tasks.push(task);
    renderTasks();
    input.value = "";
    updateLocalStorage();

    //changeicon
    changeicon()

     //remove task
    deleteTask();


    //edit task

    editList()

})

window.addEventListener('load',()=>{
    const reshow = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(...tasks,...reshow);
    renderTasks();

    //changeicon
    changeicon()

     //remove task
    deleteTask();


    //edit task

    editList()
   })
