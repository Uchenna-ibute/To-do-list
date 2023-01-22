import updateLocalStorage from "./localstorage.js";
import deleteTask from "./deleteTask.js";
import display from "./showItem.js";
import checker from "./checker.js";
import MOR from "./markonreload.js";

const form = () =>{
   const form = document.querySelector('.form'); 
   const list = document.querySelector('.list');

   //created an array
   let tasks = [];

   form.addEventListener('submit', (e)=>{
    e.preventDefault()

    

    //created an object
    const input = document.querySelector("input");
    if (input.value === "") {return;};
    const task = {
      description: input.value,
      completed: false,
      index: tasks.length + 1
    };

    

  
    // add tasks 
    tasks.push(task);
    list.innerHTML = "";
    tasks.map(task => display(task,list))
    input.value = "";
    updateLocalStorage(tasks);

    MOR(tasks);

   


    //edit task and change icon
    const pen = document.querySelectorAll('#more');
      pen.forEach((p,y)=>{
      p.addEventListener('click',()=>{
      //change the icon
      p.parentElement.classList.add('ic')
      let grand = p.parentElement.parentElement;

        //remove list
        const times = document.querySelectorAll('#trash');
        times.forEach((time,n)=>{
        time.addEventListener('click', ()=>{
        time.parentElement.parentElement.remove();
       tasks.forEach((t,m)=>{
       if (n === m) {
        tasks = tasks.filter(tee => tee.index !== t.index);
        console.log(tasks)
        //changeindexs
        tasks.forEach((tep, num)=>{
            tep.index = num + 1;
        })
        updateLocalStorage(tasks);
      } 
       })
      }) 
    })
         

  
      //set the input to readonly
      const edit = grand.querySelector('#tasks')
      edit.removeAttribute('readonly');
      edit.focus();
  
      //change the description in array and LS
      edit.addEventListener('keyup',()=>{
        tasks.forEach((e,z)=>{
          if(y === z){
            e.description = edit.value;
            updateLocalStorage(tasks);
          }
        }) 
      })
  
      //off the edit function
      let worr = grand.querySelector('#worr');
      worr.addEventListener('submit',(e)=>{
        e.preventDefault();
        p.parentElement.classList.remove('ic');
        edit.setAttribute('readonly','readonly')
      })
    }) 
    })

    //check on button
    let box = document.querySelectorAll('.goes');
    let checked = document.querySelectorAll('#checked')
    checker(tasks,box,checked);

     

    //remove all marked tasks
    const clear = document.querySelector('.come');
    clear.addEventListener('click',()=>{
      const each = document.querySelectorAll('#completed');
      each.forEach((e,n)=>{
        if(e.id==='completed'){
          e.remove();
        }
        tasks = tasks.filter(t => t.completed !== true);
        updateLocalStorage(tasks)
      })
    })
  
   })


   //for reload 
   window.addEventListener('load',()=>{
    const reshow = JSON.parse(localStorage.getItem('store')) || [];
    tasks.push(...tasks,...reshow);
    tasks.map(task => display(task,list))
    updateLocalStorage(tasks);
  
     
    //edit task
    const pen = document.querySelectorAll('#more');
    pen.forEach((p,y)=>{
        
      p.addEventListener('click',()=>{
      //change the icon
      p.parentElement.classList.add('ic')
      let grand = p.parentElement.parentElement;


      //remove task
      const times = document.querySelectorAll('#trash');
        times.forEach((time,n)=>{
        time.addEventListener('click', ()=>{
        time.parentElement.parentElement.remove();
       tasks.forEach((t,m)=>{
       if (n === m) {
        tasks = tasks.filter(tee => tee.index !== t.index);
        //changeindexs
        tasks.forEach((tep, num)=>{
            tep.index = num + 1;
        })
        updateLocalStorage(tasks);
      } 
       })
      }) 
    })
  
      //set the input to readonly
      const edit = grand.querySelector('#tasks')
      edit.removeAttribute('readonly');
      edit.focus();
  
      //change the description in array and LS
      edit.addEventListener('keyup',()=>{
        tasks.forEach((e,z)=>{
          if(y === z){
            e.description = edit.value;
            updateLocalStorage(tasks);
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
    //check on button
    let box = document.querySelectorAll('.goes');
    let checked = document.querySelectorAll('#checked')
    checker(tasks,box,checked);

    //remove all marked tasks
      const clear = document.querySelector('.come');
      clear.addEventListener('click',()=>{
        const each = document.querySelectorAll('#completed');
        each.forEach((e,n)=>{
          if(e.id==='completed'){
            e.remove();
          }
          tasks = tasks.filter(t => t.completed !== true);
          updateLocalStorage(tasks)
        })
      })

      MOR(tasks);

    })
   })
 }

 export default form;