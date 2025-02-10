//Importaciones
import { Todo } from "../classes";
import { todoList } from "../index";

//referencias del html
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
 
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

divTodoList.addEventListener('click', (event) => {
	
	const nombreElemento = event.target.localName;  //input, label o boton
	const todoElemento = event.target.parentElement.parentElement; //para obtener todo el li
	const todoId = todoElemento.getAttribute('data-id');
	
	if(nombreElemento.includes('input')){// hizo click en el checkbox
		todoList.marcarCompletado(todoId);
		// agregar la clase para tachar 
		todoElemento.classList.toggle('completed');
	}else if(nombreElemento.includes('button')){
		todoList.eliminarTodo(todoId);
		//eliminar en el HTML
		divTodoList.removeChild(todoElemento);
	}	
});

btnBorrar.addEventListener('click', ()=>{
	todoList.eliminarCompletados();  //elimina del arreglo de Todos
	
	//eliminar del HTML
	for (let i = divTodoList.children.length-1; i >=0; i--) {
		const elemento = divTodoList.children[i];
		if(elemento.classList.contains('completed')){
			divTodoList.removeChild(elemento);
		}	
	}
});