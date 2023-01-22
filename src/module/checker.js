import updateLocalStorage from "./localstorage";

const checker = (te,bo,to) => {
//check
  bo.forEach((e,n)=>{
    e.addEventListener('click',()=>{
        let parent = e.parentElement;
        parent.classList.add('check');
        let grand = e.parentElement.parentElement;
        let line = grand.querySelector('#tasks');
        line.classList.add('line')
        grand.setAttribute('id','completed');

        te.forEach((t,b)=>{
            if(b === n){
             t.completed = true;
            }
            updateLocalStorage(te)
        })
      
    })
    
  })

  //uncheck
  to.forEach((e,n)=>{
    e.addEventListener('click',()=>{
        let parent = e.parentElement;
        parent.classList.remove('check');
        let grand = e.parentElement.parentElement;
        let line = grand.querySelector('#tasks');
        line.classList.remove('line')
        grand.removeAttribute('id');
        te.forEach((t,b)=>{
            if(b === n){
             t.completed = false;
            }
            updateLocalStorage(te)
        })
    })
   
  })

}

export default checker;