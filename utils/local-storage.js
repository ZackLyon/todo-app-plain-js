export { setUser, getUser };

const USER = 'USER';

function setUser(userObj){
    const stringUser = JSON.stringify(userObj);
    localStorage.setItem(USER, stringUser);
}

function getUser(){
    return JSON.parse(localStorage.getItem(USER));
}