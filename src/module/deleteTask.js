// import updateLocalStorage from "./localstorage";

// const deleteTask = (tasks) => {
//     const times = document.querySelectorAll('#trash');
//     times.forEach((time,n)=>{
//       time.addEventListener('click', ()=>{
//        time.parentElement.parentElement.remove();
//        tasks.forEach((t,m)=>{
//        if (n === m) {
//         tasks = tasks.filter(tee => tee.index !== t.index);
//         console.log(tasks)
//         //changeindexs
//         tasks.forEach((tep, num)=>{
//             tep.index = num + 1;
//         })
//         updateLocalStorage(tasks);
//       } 
//        })
//       }) 
//     })
//   }

// export default deleteTask;