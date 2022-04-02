"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conteiner = void 0;
const fs = require('fs');
class Conteiner {
    constructor(ruta, products, id) {
        this.ruta = ruta;
        this.products = products;
        this.id = id;
        this.ruta = ruta;
        this.products = [];
        this.id;
    }
    getAll(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let read = yield fs.promises.readFile(this.ruta, 'utf-8');
                let total = yield JSON.parse(read);
                if (id) {
                    let find = yield total.find((e) => e.id === id);
                    return find;
                }
                else {
                    return total;
                }
            }
            catch (e) {
                console.log(e.message);
            }
        });
    }
    save(datos) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let newProduct = {
                    timestamp: datos.timestamp,
                    nombre: datos.nombre,
                    descripcion: datos.descripcion,
                    codigo: datos.codigo,
                    foto: datos.foto,
                    precio: datos.precio,
                    stock: datos.stock,
                    id: this.products.length,
                };
                this.products.push(newProduct);
                yield fs.promises.writeFile(this.ruta, JSON.stringify(this.products, null, 2));
                return this.products;
            }
            catch (e) {
                console.log(e.message);
            }
            // let productos = []
            // let id = 0
            // const newProduct= {
            //     timestamp: datos ? datos.timestamp : undefined ,
            //     nombre: datos ? datos.nombre : undefined,
            //     descripcion: datos ? datos.descripcion : undefined,
            //     codigo: datos ? datos.codigo : undefined,
            //     foto:datos ? datos.foto : undefined,
            //     precio: datos ? datos.precio : undefined,
            //     stock: datos ? datos.stock : undefined,
            //     id: id++,
            // }
            //     productos.push(newProduct)
            // if (fs.existsSync(this.ruta)) {
            //     let read = await fs.promises.readFile(this.ruta, 'utf-8')
            //     productos = JSON.parse(read)
            //     if (productos.length > 0) {
            //         id = productos[productos.length - 1].id + 1
            //         if(datos){
            //             datos.id = id
            //         }
            //         else{
            //             datos = [{}]
            //         }
            //     } 
            // } 
            // productos.push(datos)
            // try{
            //     let write = await fs.promises.writeFile(this.ruta, JSON.stringify(productos, null, 2))
            //     return write
            // }
            // catch(e:any){
            //     console.log(e.message)
            // }
        });
    }
    actualizar() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
            }
            catch (e) {
            }
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let read = yield fs.promises.readFile(this.ruta, 'utf-8');
                let datos = yield JSON.parse(read);
                let fil = yield datos.filter((e) => e.id !== id);
                let write = yield fs.promises.writeFile(this.ruta, JSON.stringify(fil, null, 2));
                return console.log(write);
            }
            catch (e) {
                console.log(e.message);
            }
        });
    }
}
exports.Conteiner = Conteiner;
const contenedor = new Conteiner('./productos.txt');
contenedor.getAll().then(res => console.log(res));
contenedor.save([{}]).then(res => console.log(res));
// contenedor.deleteById()
// contenedor.save(
//     {
//         "timestamp": 12313,
//         "nombre": "primero",
//         "descripcion": "Esto es primero",
//         "codigo": "codigo primero",
//         "foto": "esto es url foto",
//         "precio": 456,
//         "stock": 4,
//     }
// ).then(res => console.log(res))
// contenedor.getAll().then(res => console.log(res))
// contenedor.deleteAll()
