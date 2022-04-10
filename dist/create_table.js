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
const sqliteDB_1 = require("./options/sqliteDB");
// // import knex from 'knex';
// const {opcion} = require('./options/mariaDB')
const knex = require('knex')(sqliteDB_1.option);
const create = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield knex.schema.createTable('products', (table) => {
            table.increments('id');
            table.integer('timestamp');
            table.string('name');
            table.string('description');
            table.string('code');
            table.string('foto');
            table.integer('price');
            table.integer('stock');
        });
        console.log('tabla creada');
    }
    catch (e) {
        console.log(e.message);
    }
    finally {
        knex.destroy();
    }
});
// create()
const createSqlite = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield knex.schema.createTable('ecommerce', (table) => {
            table.increments('id');
            table.string('correo');
            table.string('mensaje');
        });
        console.log('tabla sql creada');
    }
    catch (e) {
        console.log(e.message);
    }
    finally {
        knex.destroy();
    }
});
createSqlite();
