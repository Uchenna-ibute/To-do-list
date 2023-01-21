import { updateLocalStorage, tasks } from './update.js';
const editList = () => {
  const pen = document.querySelectorAll('#pen');
    pen.forEach((p,y)=>{
        p.addEventListener('click',()=>{
        //change the icon
        p.parentElement.classList.add('change')
        let grand = p.parentElement.parentElement;

        //set the input to readonly
        const edit = grand.querySelector('#word')
        edit.removeAttribute('readonly');
        edit.focus();

        //change the description in array and LS
        edit.addEventListener('keyup',()=>{
          tasks.forEach((e,z)=>{
            if(y === z){
              e.description = edit.value;
              updateLocalStorage();
            }
          })
        })

        //off the edit function
        let worr = grand.querySelector('#worr');
       worr.addEventListener('submit',(e)=>{
      e.preventDefault();
      p.parentElement.classList.remove('change');
      edit.setAttribute('readonly','readonly')
    })


      })
      })
}
export default editList
