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
const contProductos_1 = require("./contProductos");
const contCarrito_1 = require("./contCarrito");
const express = require('express');
const router1 = express.Router();
const router2 = express.Router();
const cont = new contProductos_1.Conteiner('./productos.txt');
const contU = new contCarrito_1.contUsuario('./carrito.txt');
const app = express();
// app.set('views', './views');
// app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api/productos', router1);
app.use('/api/carrito', router2);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log('server on'));
let administrador;
// ---- Ruta no encontrada
// ----------------Ruta de solo Administradores
router1.get('/:id?', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const all = yield cont.getAll(parseInt(req.params.id));
    return res.status(200).json(all);
}));
router1.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = yield cont.save(req.body);
        return res.status(200).json(data);
    }
    catch (e) {
        console.log('error post server', e.message);
    }
}));
router1.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = yield cont.actualizar(parseInt(req.params.id), req.body);
        return res.status(200).json(data);
    }
    catch (e) {
        console.log('error en act producto admin', e.message);
    }
}));
router1.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dele = yield cont.deleteById(parseInt(req.params.id));
        return res.status(200).json(dele);
    }
    catch (e) {
        return console.log(e.message);
    }
}));
// ----------------- Ruta de Admin y usuarios
// crea un carrito
router2.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let datos = yield contU.createCart();
        return res.status(200).json(datos);
    }
    catch (e) {
        return console.log(e.message);
    }
}));
// push products by id al carrito
router2.post('/:id/productos', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let datos = yield contU.pushProductToCart(req.params.id);
        return res.status(200).json(datos);
    }
    catch (e) {
        return console.log(e.message);
    }
}));
// Listar productos del carrito
router2.get('/:id/productos', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let datos = yield contU.listar(parseInt(req.params.id));
        return res.status(200).json(datos);
    }
    catch (e) {
        return console.log(e.message);
    }
}));
// Vaciar el carrito y eliminarlo
router2.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let datos = yield contU.deleteCart(parseInt(req.params.id));
        return res.status(200).json(datos);
    }
    catch (e) {
        return console.log(e.message);
    }
}));
// Eliminar un producto del carrito por id
router2.delete('/:id/productos/:id_prod', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let datos = yield contU.deleteProductToCart(parseInt(req.params.id), parseInt(req.params.id));
        return res.status(200).json(datos);
    }
    catch (e) {
        return console.log(e.message);
    }
}));
