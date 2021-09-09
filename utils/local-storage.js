export { setUser, getUser, getTodos, setTodos, addTodo };

const USER = 'USER';

function setUser(userObj){
    const stringUser = JSON.stringify(userObj);
    localStorage.setItem(USER, stringUser);
}

function getUser(){
    return JSON.parse(localStorage.getItem(USER));
}

function getTodos(){
    const user = getUser();
    return user.todos;
}

function setTodos(todos){
    const user = getUser();
    user.todos = todos;
    setUser(user);
}

function addTodo(newMessage){
    const todos = getTodos();
    const newId = todos.length;
    const newTodo = {
        id: newId,
        message: newMessage,
        completed: false
    };

    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
}