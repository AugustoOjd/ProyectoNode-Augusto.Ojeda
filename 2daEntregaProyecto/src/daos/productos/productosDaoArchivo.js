import ContenedorArchivos from "../../contenedores/contenedorArchivo.js";

export default class ProductosDaoArchivo extends ContenedorArchivos{
    constructor(){
        super('DB/productos.json') 
    }

} 

// const productos = new ProductosDaoArchivo()

// productos.save({
//     title: "fs hola",
//     price: 4512,
//     thumbnail: "fs link img"
// }).then(res=> console.log(res)) 

// productos.getId().then(res => console.log(res)) 