const {optionMDb} = require('./options/mariaDB')
const {optionSqlite} = require('./options/sqliteDB')


// import {knex} from 'knex'
// const knex = require('knex')(optionSqlite)


class ConteinerProducts{
    constructor(config){
        this.config = config
        this.knex = require('knex')(config)
    }

    async save(datos){
        
        try{
            return await this.knex.from('products').insert(datos)
            
        }
        catch(e){
            console.log(e.message)
        }
        finally{
            this.knex.destroy()
        }
    }
    
    async getAll(idProduct){
        try{
            if(idProduct){
                let show = await this.knex.from('products').select("*").where({id: idProduct})
                return show
            }
            else{
                let show = await this.knex.from('products').select("*")
                return show
            }
        }
        catch(e){
            console.log(e.message)
        }
        finally{
            this.knex.destroy()
        }
    }



    async actualizar(idProduct, product){

        try{
            if(idProduct){
                let producto = {
                    timestamp: product.timestamp,
                    name: product.name,
                    description: product.description,
                    code: product.code,
                    foto: product.foto,
                    price: product.price,
                    stock: product.stock,
                }
                let data = await this.knex.from('products').where({ id: idProduct }).update(producto)
                return data
            }else{
                console.log('el producto no existe')
            }

        }
        catch(e){
            console.log(e.message)
        }
        finally{
            this.knex.destroy()
        }
    }

    async deleteById(idProduct){
        try{
            if(idProduct){
                let borrar = await knex.from('products')
                    .where({ id: idProduct })
                    .del()
                return borrar
            }else{
                console.log('no existe ese producto')
            }
        }
        catch(e){
            console.log(e.message)
        }
        finally{
            this.knex.destroy()
        }
    }


}


class ConteinerMsg{
    constructor(config){
        this.config = config
        this.knex = require('knex')(config)
    }

    async readChat(idMsg){
        try{
            if(idMsg){
                let show = await this.knex.from('ecommerce').select("*").where({id: idMsg})
                return show
            }
            else{
                let show = await this.knex.from('ecommerce').select("*")
                return show
            }
        }   
        catch(e){
            return console.log(e.message)
        }
        finally{
            this.knex.destroy()
        }
    }

    async saveChat(chat){
        try{
            return await this.knex.from('ecommerce').insert(chat)
        }
        catch(e){
            return this.console.log(e.message)
        }
        finally{
            knex.destroy()
        }   
    }

}

module.exports = new ConteinerProducts (optionMDb)
module.exports  = new ConteinerMsg(optionSqlite)

// const msg = new ConteinerMsg(optionSqlite)

// msg.readChat().then(res => console.log(res))
// msg.saveChat({
//     email: "hola.com",
//     date: Date.now(),
//     message: "hola pibe"
// }).then(res => console.log(res))

// contenedor.save()
// contenedor.getAll()
// contenedor.actualizar()
// contenedor.deleteById()

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
//     timestamp: Date.now(),
//     name: 'laptop 4',
//     description: "esto es una laptop",
//     code: "fg345",
//     foto: "link de foto",
//     price: 900000,
//     stock: 10
// }).then(res=> console.log(res))
// contenedor.deleteById() 
// contenedor.getAll()
// contenedor.actualizar()