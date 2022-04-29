import ContenedorFirebase from "../../contenedores/contenedorFirebase.js";

export default class productosDaoFirebase extends ContenedorFirebase{
    constructor(){
        super('productos')
    }
}