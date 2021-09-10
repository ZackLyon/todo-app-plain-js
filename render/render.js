export { renderClickableTodo };
import { getTodos, setTodos } from '../utils/local-storage.js';

function renderTodos(){
    const todos = getTodos();
    const todoContainer = document.querySelector('#todo-container');
    todoContainer.textContent = '';

    todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.message;
        li.value = todo.id;
        if (todo.completed === true) {
            li.classList.add('dynamic-todo-done');
        } else {
            li.classList.add('dynamic-todo');
        }
        
        todoContainer.append(li);
    });
}

function clickableLi(){
    const allLiEl = document.querySelectorAll('li');
    const todos = getTodos();
  
    allLiEl.forEach(li => {
        li.addEventListener('click', () => {
            const currentTodo = todos.find(({ id }) => id === li.value);
            currentTodo.completed = true;
            setTodos(todos);

            renderClickableTodo(); //render all again after marking a todo done
        });
    });
}

function renderClickableTodo(){
    renderTodos(); 
    clickableLi(); 
}
