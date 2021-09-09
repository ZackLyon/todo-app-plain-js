export { renderTodos };
import { getTodos } from '../utils/local-storage.js';

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