import { getUser } from './utils/local-storage.js';
const user = getUser();
const logIn = document.querySelector('#log-in');

if (user) { //only show login if user available
    logIn.classList.remove('hidden');
}
