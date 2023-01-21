import List from './list.js';

const todo = new List();
const display = () => {
    const list = document.querySelector('.list')
    list.replaceChildren();
    if (todo.todes.length > 0) {
        list.style.display = 'block';
        const contain = document.querySelector('.todos');
        todo.todes.map((value) => {
            const items = document.createElement('li');
            items.className = 'todo';
            let container = `<div>
            <input type="checkbox" id="check" class="check">
            <p id="description">${value.description}</p>
            <i class="fa fa-ellipsis-v"></i>
            <i class="fa fa-trash" id=${value.index}></i>
            </div>`
            let input = document.querySelector('.check')
            if (value.completed === true) {
                input.checked = 'checked'
            }
            input.onclick = (event) => {
                todo.completeList(event.target.checked, value.index)
            };
            let description = document.querySelector('p')
            items.appendChild(container)
            let icon1 = document.querySelector('.fa-ellipsis-v')
            items.onclick = () => {
                description.contentEditable = 'true'
                items.style.backgroundColor = 'aqua'
                description.style.color = 'black'
                icon1.style.display='none'
            }
            description.addEventListener('keyup', (event) => {
                if (event.target.id === 'description')
                  if (event.key === 'Enter'){
                    display()
                   } else {
                    todo.edit(event.target, value.index)
                }
            })
            contain.append(items)
            return items
        })
        list.appendChild(contain)
    }
}
export { display, todo}