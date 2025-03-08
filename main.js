import { addTodo } from './app.js'
addTodo({ userId: 56, id: 56, title: 'delectus aut autem', completed: true });
addTodo({ title: "Invalid todo", completed: false });


import { deleteTodo } from './app.js';
deleteTodo(2);
console.log(todos);


import { updateTodo } from './app.js';

updateTodo(2, { title: "Clean the kitchen", completed: false });
console.log(todos);

