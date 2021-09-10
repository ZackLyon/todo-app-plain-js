import { setUser } from '../utils/local-storage.js';

const formEl = document.querySelector('form');
const usernameInput = document.querySelector('[name="username"]');
usernameInput.focus();

formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(formEl);

    const user = {
        username: data.get('username'),
        password: data.get('password'),
        todos: []
    };

    setUser(user);

    window.location = '../todo/index.html';

});
