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
            // Seccion archivos opcion 1
            try {
                let newProduct = {
                    timestamp: Date.now(),
                    nombre: datos.nombre,
                    descripcion: datos.descripcion,
                    codigo: datos.codigo,
                    foto: datos.foto,
                    precio: datos.precio,
                    stock: datos.stock,
                    id: this.products.length + 1,
                };
                this.products.push(newProduct);
                yield fs.promises.writeFile(this.ruta, JSON.stringify(this.products, null, 2));
                return this.products;
            }
            catch (e) {
                console.log(e.message);
            }
            //  Seccion de archivos opcion 2
            //     let productos = []
            //     let id = 1
            //     if (fs.existsSync(this.ruta)) {
            //         let data = await fs.promises.readFile(this.ruta, 'utf-8')
            //         productos = JSON.parse(data)
            //         if (productos.length > 0) {
            //             id = productos[productos.length - 1].id + 1
            //             datos.id = id
            //         } else {
            //         datos.id = 1
            //         }
            //     } else {
            //         datos.id = 1
            //     }
            //     productos.push(datos)
            //     try{
            //         await fs.promises.writeFile(this.ruta, JSON.stringify(productos, null, 2))
            //         return productos
            //     }catch(e:any){
            //         console.log(`hubo un error en guardar ${e.message}`)
            //     }
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
// contenedor.getAll().then(res => console.log(res))
contenedor.save().then(res => console.log(res));
// contenedor.save({
//     nombre: "adolfo",
//     descripcion: "mira aqui esta",
//     codigo: "45345",
//     foto: "esto es url foto",
//     precio: 345,
//     stock: 3
// })
// .then(res=> console.log('res de contAdmin', res))
// contenedor.deleteById()
// contenedor.getAll().then(res => console.log(res))
// contenedor.deleteAll()
