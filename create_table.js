const {optionMDb} =  require('./options/mariaDB');
const {optionSqlite}= require('./options/sqliteDB');
const knex = require('knex')(optionSqlite)

const create = async ()=>{
    try{
        await knex.schema.createTable('products', (table) => {
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
        await knex.schema.createTable('ecommerce', (table) => {
            table.increments('id')
            table.string('email')
            table.string('date')
            table.string('message')
        })
        console.log('tabla sql creada')
    }
    catch(e){
        console.log(e.message)
    }
    finally{
        knex.destroy()
    }
}

createSqlite()