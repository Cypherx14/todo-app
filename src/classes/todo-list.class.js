export class TodoList{
    constructor(){
        // this.todos = [];
        this.cargarLocalStorage()
    }
    nuevoTodo(todo){
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id){
        this.todos = this.todos.filter( todo => todo.id != id);
        this.guardarLocalStorage();
    }

    marcarCompletado(id){
        for(const todo of this.todos){
            if(todo.id == id){ //recibo un numero pero JS lo transforma a String para poder comparar
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados(){
        this.todos = this.todos.filter( todo => !todo.completado);
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }
    cargarLocalStorage(){
        this.todos = (localStorage.getItem('todo')) ? JSON.parse( localStorage.getItem('todo')) : [];
        // if(localStorage.getItem('todo')){
            
        //     this.todos = JSON.parse( localStorage.getItem('todo'));
        //     console.log('cargar locals', this.todos);
            
        // }else{
        //     this.todos = [];
        // }
    }
}

