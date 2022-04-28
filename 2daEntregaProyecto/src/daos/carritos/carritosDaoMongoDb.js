import ContenedorMongoDb from "../../contenedores/contenedorMongoDb.js";
import { CarritosSchemma } from "../../contenedores/models/carritos.js";

export default class carritosDaoMongoDb extends ContenedorMongoDb{
    constructor(){
        super('carritos', CarritosSchemma)
    }
}

// const datos = new carritosDaoMongoDb()

// datos.conection()
// datos.save({
//     title: "fs hola",
//     price: 4512,
//     thumbnail: "fs link img"
// }).then(res=> console.log(res)) 

// datos.getId().then(res => console.log(res))         