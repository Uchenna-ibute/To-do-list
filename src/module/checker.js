import updateLocalStorage from './localstorage.js';

const checker = (te, bo, to) => {
// check
  bo.forEach((e, n) => {
    e.addEventListener('click', () => {
      const parent = e.parentElement;
      parent.classList.add('check');
      const grand = e.parentElement.parentElement;
      const line = grand.querySelector('#tasks');
      line.classList.add('line')
      grand.setAttribute('id','completed');

      te.forEach((t, b) => {
        if (b === n) {
          t.completed = true;
        }
        updateLocalStorage(te);

      })

    });

  });

  // uncheck

  to.forEach((e, n) => {
    e.addEventListener('click', () => {
      const parent = e.parentElement;
      parent.classList.remove('check');
      const grand = e.parentElement.parentElement;
      const line = grand.querySelector('#tasks');
      line.classList.remove('line')
      grand.removeAttribute('id');
      te.forEach((t, b) => {
        if (b === n) {
          t.completed = false;
        }
        updateLocalStorage(te);
      });
      
    });

  });

};

export default checker;