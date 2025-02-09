//importando css global
import './styles.css';
//importar modulos
// import { Todo } from "./classes/todo.class";
// import { TodoList } from './classes/todo-list.class';

//reducir importaciones
import {Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();
const tarea = new Todo('Aprender JavaScript');
todoList.nuevoTodo(tarea);

crearTodoHtml(tarea);

