import { renderTodos } from '../render/render.js';
import { getTodos, setTodos, addTodo } from '../utils/local-storage.js';

const addBtnEl = document.querySelector('#add-btn');
const formEl = document.querySelector('form');
const todos = getTodos();

renderTodos();

const allLiEl = document.querySelectorAll('li');
allLiEl.forEach(li => {
    li.addEventListener('click', () => {
        const currentTodo = todos.find(({ id }) => id === li.value);
        currentTodo.completed = true;
        setTodos(todos);
        renderTodos();
    });
});

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
});