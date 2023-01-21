import { updateLocalStorage, tasks } from './update.js';
function deleteTask() {
  const times = document.querySelectorAll('#times');
  times.forEach((time,n)=>{
    time.addEventListener('click', ()=>{
     time.parentElement.parentElement.remove();
     tasks.forEach((t,m)=>{
     if (n === m) {
      tasks = tasks.filter(tee => tee.index !== t.index);
      //changeindexs
      tasks.forEach((t,n)=>{
        t.index = n+1;
      })
     updateLocalStorage();
    }

     })
    })
  })
}
export default deleteTask