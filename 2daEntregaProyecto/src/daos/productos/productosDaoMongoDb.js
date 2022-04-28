import ContenedorMongoDb from "../../contenedores/contenedorMongoDb.js";
import { ProductosSchemma } from "../../contenedores/models/productos.js";
// import * as model from "./models/productos.js"


export default class productosDaoMongoDB extends ContenedorMongoDb{
    constructor(){
        super('productos', ProductosSchemma)
    }

}

const datos = new productosDaoMongoDB()

datos.conection()
datos.save({
 name: 'jose'
}).then(res=> console.log(res))   
datos.getId().then(res=> console.log(res))        