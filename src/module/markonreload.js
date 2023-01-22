const MOR = (tasks) => {
    tasks.forEach((element,n) => {
        if (element.completed === true) {
           const task = document.querySelectorAll('#tasks');
           task.forEach((task,v)=>{
            if(n===v){
                task.classList.add('line');
                let parent = task.parentElement.parentElement;
                parent.setAttribute('id', 'completed');
                let check = parent.querySelector('.item');
                check.classList.add('check')
            }
           })
        }
    });
}

export default MOR