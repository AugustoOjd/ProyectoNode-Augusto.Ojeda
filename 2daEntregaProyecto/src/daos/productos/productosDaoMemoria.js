import ContenedorMemoria from "../../contenedores/contenedorMemoria.js";

export default class productosDaoMemoria extends ContenedorMemoria{
    constructor(){
        super()
    }


}

const contenedorA = new productosDaoMemoria()

// contenedorA.save({
//     title: "fs hola",
//     price: 4512,
//     thumbnail: "fs link img"
// }).then(res=> console.log(res)) 

// contenedorA.getId().then(res => console.log(res))

// contenedorA.update(1, {
//     title: "fs updateeee",
//     price: 2552,
//     thumbnail: "fs link img update"
// }).then(res=> console.log(res))

// contenedorA.deleteById(2).then(res=> console.log(res)) 