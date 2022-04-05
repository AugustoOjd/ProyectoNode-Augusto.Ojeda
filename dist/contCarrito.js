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
exports.contUsuario = void 0;
const fs_1 = __importDefault(require("fs"));
// id, timestamp(carrito), productos: { id, timestamp(producto), nombre, descripcion, código, foto (url), precio, stock }
class contUsuario {
    constructor(ruta, carrito, id) {
        this.ruta = ruta;
        this.carrito = carrito;
        this.id = id;
        this.productsList = './productos.txt';
        this.ruta = ruta;
        this.carrito = [];
        this.id;
    }
    createCart() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let read = yield fs_1.default.promises.readFile(this.ruta, 'utf-8');
                let parse = JSON.parse(read);
                this.carrito = parse;
                let carrito = {
                    id: this.carrito.length + 1,
                    timestamp: Date.now(),
                    productos: []
                };
                this.carrito.push(carrito);
                yield fs_1.default.promises.writeFile(this.ruta, (JSON.stringify(this.carrito, null, 2)));
                return carrito.id;
            }
            catch (e) {
                return console.log(e.message);
            }
        });
    }
    deleteCart(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let read = yield fs_1.default.promises.readFile(this.ruta, 'utf-8');
                let parse = JSON.parse(read);
                this.carrito = parse;
                let cart = yield this.carrito.find((e) => e.id == id);
                cart.productos = [];
                let filtro = yield this.carrito.filter((e) => e.id !== id);
                yield fs_1.default.promises.writeFile(this.ruta, (JSON.stringify(filtro, null, 2)));
                return filtro;
            }
            catch (e) {
                console.log(e.message);
            }
        });
    }
    listar(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let read = yield fs_1.default.promises.readFile(this.ruta, 'utf-8');
                let parse = JSON.parse(read);
                this.carrito = parse;
                let find = yield this.carrito.find((e) => e.id == id);
                let contenido = find.productos;
                return contenido;
            }
            catch (e) {
                return console.log(e.message);
            }
        });
    }
    pushProductToCart(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // carritos
                let read = yield fs_1.default.promises.readFile(this.ruta, 'utf-8');
                let parse = JSON.parse(read);
                this.carrito = parse;
                // lista productos
                let read2 = yield fs_1.default.promises.readFile(this.productsList, 'utf-8');
                let parse2 = JSON.parse(read2);
                let findProduct = yield parse2.find((e) => e.id == id);
                let findCarrito = yield this.carrito.find((e) => e.id == id);
                if (findCarrito && findProduct) {
                    yield findCarrito.productos.push(findProduct);
                    yield fs_1.default.promises.writeFile(this.ruta, (JSON.stringify(this.carrito, null, 2)));
                    return this.carrito;
                }
                else {
                    console.log('error: no hay carrito o producto');
                }
            }
            catch (e) {
                return console.log(e.message);
            }
        });
    }
    deleteProductToCart(idCart, idProduct) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let read = yield fs_1.default.promises.readFile(this.ruta, 'utf-8');
                let parse = JSON.parse(read);
                this.carrito = parse;
                let findCart = yield this.carrito.find((e) => e.id == idCart);
                let findProd = yield findCart.productos.filter((e) => e.id !== idProduct);
                findCart.productos = findProd;
                yield fs_1.default.promises.writeFile(this.ruta, (JSON.stringify(this.carrito, null, 2)));
                return this.carrito;
            }
            catch (e) {
                return console.log(e.message);
            }
        });
    }
}
exports.contUsuario = contUsuario;
const contU = new contUsuario('./carrito.txt');
contU.createCart();
contU.deleteCart();
contU.listar();
contU.pushProductToCart();
contU.deleteProductToCart();
