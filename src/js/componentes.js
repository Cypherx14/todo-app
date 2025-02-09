//Importaciones
import { Todo } from "../classes";
import { todoList } from "../index";

//referencias del html
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');


export const crearTodoHtml = (todo) => {
    
    const htmlTodo = `<li class="${(todo.completado) ? 'completed' : ''}" data-id="${todo.id}">
						<div class="view">
							<input class="toggle" type="checkbox" ${(todo.completado) ? 'checked' : ''}>
							<label>${todo.tarea}</label>
							<button class="destroy"></button>
						</div>
						<input class="edit" value="Create a TodoMVC template">
					</li>`;
    const div = document.createElement('div'); //div para insertar todo el contenido del li al mismo
    div.innerHTML = htmlTodo;
    
    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;
}

//Eventos
txtInput.addEventListener('keyup', (evento)=>{
	if(evento.keyCode === 13 && txtInput.value.length > 0){
		const nuevoTodo = new Todo(txtInput.value);
		//insertar en el arreglo de todolist
		todoList.nuevoTodo(nuevoTodo);
		//insertar en el HTML
		crearTodoHtml(nuevoTodo);
		console.log(todoList);
		
		//eliminar el texto
		txtInput.value = '';
	}
});