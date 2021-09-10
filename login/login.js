import { getUser } from '../utils/local-storage.js';

const formEl = document.querySelector('form');
const user = getUser();

formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(formEl);

    if (user.username === data.get('username') && 
    user.password === data.get('password')) {
        window.location = '../todo/index.html';
    } else {
        const errorMessageEl = document.querySelector('.error-message');
        
        errorMessageEl.classList.remove('hidden');

        setTimeout(() => {
            errorMessageEl.classList.add('hidden');
        }, 900);
    }

});
