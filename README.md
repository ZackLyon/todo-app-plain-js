## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.

# Splash page

## HTML Setup
1) Two `<a>` tags with links for signup or login

# Signup Page
## HTML Setup
1) Form with fields for username and password
2) Create button

## Events
### On click
    - Create user object with username, password, and empty todo array
    - Save user object into local storage
    - Relocate to Todo Page

# Login Page
## HTML Setup
1) Form with fields for username and password
2) Submit button

## Events
### On click
    - Get user object from local storage
    - Check for correct password and username
    - If correct, relocate to Todo Page
    - Else, show error

# Todo Page
## HTML Setup
1) Area for todos
2) Add button

## Events
### On load
    - renderTodos
### On submit
Update state :

    - Get todo data from form
    - Make a new todo object with id, todo and completed properties
    - Push the todo into the todos array (immutable version? : [...todoArr, newObj])
Update DOM :

    - renderTodos()
 
### Todo on click
Update state :

    - Find todo that was clicked
    - Change the completed property to true

Update DOM :

    - renderTodos()

# Functions
renderTodos()

    - Clear out old todos form DOM (ul.textContent = '')
	- Get todos from localStorage
	- Iterate over the todos and for each todo create a 'li' and append it to the hardcoded 'ul'
	- When we iterate, render completed todos differently