import ContenedorMemoria from "../../contenedores/contenedorMemoria.js";

export default class carritosDaoMemoria extends ContenedorMemoria{
    constructor(){
        super()
    }
}

// const carrito = new carritosDaoMemoria()

// carrito.save({
//     title: "fs hola",
//     price: 4512,
//     thumbnail: "fs link img"
// }).then(res=> console.log(res)) 

// carrito.getId().then(res => console.log(res))