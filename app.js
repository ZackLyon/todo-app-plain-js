import { getUser } from './utils/local-storage.js';
const user = getUser();
const logIn = document.querySelector('#log-in');

if (user) {
    logIn.classList.remove('hidden');
}
