export { setUser };

const USER = 'USER';

function setUser(userObj){
    const stringUser = JSON.stringify(userObj);
    localStorage.setItem(USER, stringUser);
}