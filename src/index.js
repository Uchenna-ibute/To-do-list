import './style.css';
import dispays from './modules/task';
import remove from './modules/deleteItem';
import { display, todo } from './modules/display';

const clearbtn = document.getElementById('clear');
clearbtn.addEventListener('click',() => {
    todo.clearCompleted();
    display();
});
const form = document.querySelector('form');
form.addEventListener('submit', () => {
    const lists = document.querySelector('.form');
    const item = lists.value;
    if (item !== '') {
      todo.addList(description);
      display();
      lists.value = '';
    }
});

document.addEventListener('click', (e) => {
  if (e.target.className === 'fa fa-trash') {
    remove(e.target.id);
  }
});
dispays();