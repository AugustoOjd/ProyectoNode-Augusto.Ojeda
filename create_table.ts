import { opcion } from './options/mariaDB';
import { option } from './options/sqliteDB';
// // import knex from 'knex';
// const {opcion} = require('./options/mariaDB')
const knex = require('knex')(option)

const create = async ()=>{
    try{
        await knex.schema.createTable('products', (table:any) => {
            table.increments('id')
            table.integer('timestamp')
            table.string('name')
            table.string('description')
            table.string('code')
            table.string('foto')
            table.integer('price')
            table.integer('stock')
        })
        console.log('tabla creada')
    }
    catch(e:any){
        console.log(e.message)
    }
    finally{
        knex.destroy()
    }
}

// create()

const createSqlite = async ()=>{
    try{
        await knex.schema.createTable('ecommerce', (table:any) => {
            table.increments('id')
            table.string('correo')
            table.string('mensaje')
        })
        console.log('tabla sql creada')
    }
    catch(e:any){
        console.log(e.message)
    }
    finally{
        knex.destroy()
    }
}

createSqlite()