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
// import knex from 'knex'
const mariaDB_1 = require("./options/mariaDB");
const knex = require('knex')(mariaDB_1.opcion);
class Conteiner {
    constructor(products) {
        this.products = products;
        this.products = [];
    }
    save(datos) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let newProduct = {
                    timestamp: Date.now(),
                    name: datos.name,
                    description: datos.description,
                    code: datos.code,
                    foto: datos.foto,
                    price: datos.price,
                    stock: datos.stock
                };
                this.products.push(newProduct);
                return yield knex('products').insert(this.products);
            }
            catch (e) {
                console.log(e.message);
            }
            finally {
                knex.destroy();
            }
        });
    }
    getAll(idProduct) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (idProduct) {
                    let show = yield knex.from('products').select("*").where({ id: idProduct });
                    return show;
                }
                else {
                    let show = yield knex.from('products').select("*");
                    return show;
                }
            }
            catch (e) {
                console.log(e.message);
            }
            finally {
                knex.destroy();
            }
        });
    }
    actualizar(idProduct, product) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (idProduct) {
                    let producto = {
                        timestamp: product.timestamp,
                        name: product.name,
                        description: product.description,
                        code: product.code,
                        foto: product.foto,
                        price: product.price,
                        stock: product.stock,
                    };
                    let data = yield knex.from('products').where({ id: idProduct }).update(producto);
                    return data;
                }
                else {
                    console.log('el producto no existe');
                }
            }
            catch (e) {
                console.log(e.message);
            }
            finally {
                knex.destroy();
            }
        });
    }
    deleteById(idProduct) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (idProduct) {
                    let borrar = yield knex.from('products')
                        .where({ id: idProduct })
                        .del();
                    return borrar;
                }
                else {
                    console.log('no existe ese producto');
                }
            }
            catch (e) {
                console.log(e.message);
            }
            finally {
                knex.destroy();
            }
        });
    }
}
exports.Conteiner = Conteiner;
const contenedor = new Conteiner();
contenedor.save();
contenedor.getAll();
contenedor.actualizar();
contenedor.deleteById();
// contenedor.deleteById().then(res => console.log(res))
// contenedor.actualizar(2, {
//     timestamp: Date.now(),
//     name: 'PC Asus',
//     description: "PC gamersss",
//     code: "fasd25",
//     foto: "link de foto actualizada",
//     price: 250000,
//     stock: 8
// }).then(res=> console.log(res))
// contenedor.actualizar(1, {
//     timestamp: Date.now(),
//     name: 'PC',
//     description: "esto es una PC",
//     code: "fg3451235",
//     foto: "link de foto act",
//     price: 125000,
//     stock: 5
// }).then(res=> console.log(res))
// contenedor.getAll().then(res => console.log(res))
// contenedor.save({
//     name: 'laptop',
//     description: "esto es una laptop",
//     code: "fg345",
//     foto: "link de foto",
//     price: 900000,
//     stock: 5
// })
// contenedor.deleteById() 
// contenedor.getAll()
// contenedor.actualizar()
