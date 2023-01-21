import { display, todo } from './display.js';

const dispays = () => {
  if (localStorage.getItem('store')) {
    todo.getsaveList();
    display();
  } else {
    display();
  }
};

export default dispays;