import { renderClickableTodo } from '../render/render.js';
import { addTodo } from '../utils/local-storage.js';

const addBtnEl = document.querySelector('#add-btn');
const formEl = document.querySelector('form');

renderClickableTodo();
addBtnEl.focus(); // focus add button so enter key activates it

addBtnEl.addEventListener('click', ()=> {
    
    addBtnEl.classList.add('hidden');
    formEl.classList.remove('hidden');

    const messageInput = document.querySelector('#message-input');
    messageInput.focus(); //make form ready to type in immediately

});

// addBtnEl.addEventListener('keydown', event => {
//     if (event.keyCode === 13) {
//         console.log("add button pressed");
//     }
// });

formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(formEl);
    const message = data.get('message');

    addTodo(message);

    formEl.classList.add('hidden');
    addBtnEl.classList.remove('hidden');
    formEl.reset();
  
    renderClickableTodo();
    addBtnEl.focus();
});
