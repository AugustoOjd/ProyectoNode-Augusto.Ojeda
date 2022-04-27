import ContenedorArchivos from "../../contenedores/contenedorArchivo";

export default class ProductosDaoArchivo extends ContenedorArchivos{
    constructor(){
        super('DB/productos.js')
    }

    async save(){
        
    }
} 