import { renderTodos } from '../render/render.js';
import { getTodos, setTodos, addTodo } from '../utils/local-storage.js';

const addBtnEl = document.querySelector('#add-btn');
const formEl = document.querySelector('form');

renderTodos();
clickableLi();

addBtnEl.addEventListener('click', ()=> {
    
    addBtnEl.classList.add('hidden');
    formEl.classList.remove('hidden');
    
});

formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(formEl);
    const message = data.get('message');

    addTodo(message);

    formEl.classList.add('hidden');
    addBtnEl.classList.remove('hidden');
    formEl.reset();

    renderTodos();
    clickableLi();
});

function clickableLi(){
    const allLiEl = document.querySelectorAll('li');
    const todos = getTodos();
  
    allLiEl.forEach(li => {
        li.addEventListener('click', () => {
            const currentTodo = todos.find(({ id }) => id === li.value);
            currentTodo.completed = true;
            setTodos(todos);
            renderTodos(); //after click, render again
            clickableLi(); //make sure all new renders are clickable
        });
    });
}
