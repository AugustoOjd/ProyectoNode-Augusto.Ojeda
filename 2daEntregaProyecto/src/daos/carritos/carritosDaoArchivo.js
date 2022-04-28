import ContenedorArchivos from "../../contenedores/contenedorArchivo.js";

export default class carritosDaoArchivos extends ContenedorArchivos{
    constructor(){
        super('DB/carritos.json')
    }
}

const carritos = new carritosDaoArchivos()

carritos.save({
    title: "fs hola",
    price: 4512,
    thumbnail: "fs link img"
}).then(res=> console.log(res)) 

carritos.getId().then(res => console.log(res)) 