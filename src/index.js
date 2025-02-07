//importando css global
import './styles.css';
//importar modulos
// import { Todo } from "./classes/todo.class";
// import { TodoList } from './classes/todo-list.class';

//reducir importaciones
import {Todo, TodoList} from './classes';

const todoList = new TodoList();
const tarea = new Todo('Aprender JavaScript');
console.log(todoList);
console.log(tarea);


todoList.nuevoTodo(tarea);
console.log(todoList);
