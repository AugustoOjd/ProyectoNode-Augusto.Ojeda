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
    createCart(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let read = yield fs_1.default.promises.readFile(this.productsList, 'utf-8');
            let parse = JSON.parse(read);
            parse.map((e) => {
                this.carrito.push({
                    id: this.carrito.length + 1,
                    timestamp: Date.now(),
                    productos: {
                        id: e.id,
                        timestamp: e.timestamp,
                        nombre: 'esto es nombre',
                        descripcion: 'esto es descripcion',
                        codigo: 2323,
                        foto: 'foto',
                        precio: 232,
                        stock: 4
                    }
                });
            });
            yield fs_1.default.promises.writeFile(this.ruta, (JSON.stringify(this.carrito, null, 2)));
            return this.carrito;
        });
    }
    deleteCart(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let read = yield fs_1.default.promises.readFile(this.ruta, 'utf-8');
                let parse = JSON.parse(read);
                let filtro = parse.filter((e) => e.id !== id);
                yield fs_1.default.promises.writeFile(this.ruta, (JSON.stringify(filtro, null, 2)));
                return filtro;
            }
            catch (e) {
                console.log(e.message);
            }
        });
    }
    listar() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    getCart() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    deleteProduct() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.contUsuario = contUsuario;
const contU = new contUsuario('./carrito.txt');
contU.createCart();
contU.deleteCart();
