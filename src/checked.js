import { listCatalogue, updateTask } from './addToSrorage.js';

export const checkedFormat = (item, task) => {
  task.style.fontStyle = 'italic';
  task.style.color = '#b0b0b0';
  task.style.textDecoration = 'line-through';
  item.querySelector('.fa-trash-can').style.display = 'block';
  item.querySelector('.func').style.display = 'none';
};

export const uncheckedFormat = (item, task) => {
  task.style.fontStyle = 'normal';
  task.style.color = '#000';
  task.style.textDecoration = 'none';
  item.querySelector('.fa-trash-can').style.display = 'none';
  item.querySelector('.func').style.display = 'block';
};

export const checkFunction = (item, checkbox) => {
  const task = item.querySelector('.task-item');
  const { value } = item.querySelector('input[name="tasks-item"]');
  if (checkbox.checked) {
    checkedFormat(item, task);
    listCatalogue.forEach((listItem) => {
      if (listItem.description === value) {
        listItem.complete = true;
      }
    });
    updateTask();
  } else {
    uncheckedFormat(item, task);
    listCatalogue.forEach((listItem) => {
      if (listItem.description === value) {
        listItem.complete = false;
      }
    });
    updateTask();
  }
};
