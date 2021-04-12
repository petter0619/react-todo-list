# React Todo List

This is the classic Todo app exercise. Tech stack:
* React JS (using class based components)
* SCSS

Demo can be found here: [https://petter0619.github.io/react-todo-list/](https://petter0619.github.io/react-todo-list/)

### UI Description
* Initially, the list of todo cards will be empty.
* There is a form where the user can add a new 'todo'.
* When a new todo task is submitted from the form, a new todo card will be appended to the list.
* Clicking on a todo card will visually mark the card as done. Clicking it again will toggle the card back to its original appearance. 
* A remove-button is added to cards marked as 'done'. When the button is clicked, the card will be removed from the board.
* Cards marked as 'done' are moved to the bottom of the list.

### Technical description
* State is persisted in [localstorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage). When the app is closed and then opened again, the state will be restored.
