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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conteiner = void 0;
const fs_1 = __importDefault(require("fs"));
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
                let read = yield fs_1.default.promises.readFile(this.ruta, 'utf-8');
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
                let read = yield fs_1.default.promises.readFile(this.ruta, 'utf-8');
                let parse = JSON.parse(read);
                this.products = parse;
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
                yield fs_1.default.promises.writeFile(this.ruta, JSON.stringify(this.products, null, 2));
                return this.products;
            }
            catch (e) {
                console.log(e.message);
            }
        });
    }
    actualizar(id, product) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let producto = {
                    timestamp: Date.now(),
                    nombre: product.nombre,
                    descripcion: product.descripcion,
                    codigo: product.codigo,
                    foto: product.foto,
                    precio: product.precio,
                    stock: product.stock,
                    id: id
                };
                let read = yield fs_1.default.promises.readFile(this.ruta, 'utf-8');
                let parse = JSON.parse(read);
                this.products = parse;
                if (id) {
                    let find = yield this.products.find((e) => e.id == id);
                    yield this.products.splice(find, 1, producto);
                    yield fs_1.default.promises.writeFile(this.ruta, (JSON.stringify(this.products, null, 2)));
                    return this.products;
                }
                else {
                    return console.log('no existe ese producto');
                }
            }
            catch (e) {
                console.log(e.message);
            }
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let read = yield fs_1.default.promises.readFile(this.ruta, 'utf-8');
                let datos = yield JSON.parse(read);
                let fil = yield datos.filter((e) => e.id !== id);
                yield fs_1.default.promises.writeFile(this.ruta, JSON.stringify(fil, null, 2));
                return fil;
            }
            catch (e) {
                console.log(e.message);
            }
        });
    }
}
exports.Conteiner = Conteiner;
const contenedor = new Conteiner('./productos.txt');
contenedor.save();
contenedor.deleteById();
contenedor.getAll();
contenedor.actualizar();
