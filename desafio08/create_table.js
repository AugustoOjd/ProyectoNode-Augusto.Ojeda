const {optionMDb} =  require('./options/mariaDB');
const {optionSqlite}= require('./options/sqliteDB');
const knex = require('knex')(optionSqlite)

const create = async ()=>{
    try{
        await knex.schema.createTable('products', (table) => {
            table.increments('id')
            table.string('title')
            table.integer('price')
            table.string('thumbnail')
        })
        console.log('tabla creada')
    }
    catch(e){
        console.log(e.message)
    }
    finally{
        knex.destroy()
    }
}

// create()

const createSqlite = async ()=>{
    try{
        await knex.schema.createTable('messages', (table) => {
            table.string('email')
            table.string('date')
            table.string('message')
        })
        console.log('tabla sqlite creada')
    }
    catch(e){
        console.log(e.message)
    }
    finally{
        knex.destroy()
    }
}

createSqlite()