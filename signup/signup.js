import { setUser } from '../utils/local-storage.js';

const formEl = document.querySelector('form');

formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(formEl);

    const user = {
        username: data.get('username'),
        password: data.get('password'),
        todos: []
    };

    setUser(user);

});