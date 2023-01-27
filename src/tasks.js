import { listCatalogue, sortTasks, updateTask } from './addToSrorage.js';

class Task {
  constructor(description) {
    this.description = description;
    this.complete = false;
    this.index = null;
  }

  createTask = (
    description,
    index = listCatalogue.length + 1,
    complete = this.complete,
  ) => {
    listCatalogue.push({ index, complete, description });
    updateTask();
  };

  deleteTask = (task) => {
    const filterList = listCatalogue.filter(
      (listItem) => task === listItem.description,
    );
    const filterTask = listCatalogue.indexOf(filterList[0]);
    if (filterTask !== -1) {
      listCatalogue.splice(filterTask, 1);
      updateTask();
      sortTasks();
    }
  };

  editTask = (id, description) => {
    listCatalogue[id - 1].description = description;
    updateTask();
  };

  clearAll = () => {
    const newlist = listCatalogue.filter(({ complete }) => complete);
    newlist.forEach(({ description: task }) => this.deleteTask(task));
  };
}

export default Task;
