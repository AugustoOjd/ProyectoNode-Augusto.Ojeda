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
const ContAdmin_1 = require("./ContAdmin");
const express = require('express');
const router1 = express.Router();
const router2 = express.Router();
const cont = new ContAdmin_1.Conteiner('./productos.txt');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api/productos', router1);
app.use('/api/carrito', router2);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log('server on'));
// Administradores
router1.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const all = yield cont.getAll();
    return res.status(200).json(all);
}));
router1.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // let data = await cont.save(req.body)
        // return res.status(200).json(data)
        console.log(req.body.data);
        return res.send('hola');
    }
    catch (e) {
        console.log('error post server', e.message);
    }
}));
router1.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
