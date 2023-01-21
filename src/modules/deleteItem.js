import { display, todo } from './display.js';

const remove = (index) => {
  todo.itemRemove(index);
  todo.saveList();
  display();
};

export default remove;