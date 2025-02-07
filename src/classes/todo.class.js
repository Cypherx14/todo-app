
export class Todo{

    constructor(tarea){
        this.tarea = tarea;
        this.id = new Date().getTime(); //1244545858
        this.completado = false;
        this.creado = new Date();
    }
}