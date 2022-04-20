const {optionMDb} = require('./options/mariaDB')

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
    }



    async actualizar(idProduct, product){

        try{
            if(idProduct){
                let data = await this.knex.from('products').where({ id: idProduct }).update(product)
                return data
            }else{
                console.log('el producto no existe')
            }

        }
        catch(e){
            console.log(e.message)
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
    }


}




module.exports = new ConteinerProducts (optionMDb)
// const contenedor = new ConteinerProducts(optionMDb)

// const msg = new ConteinerMsg(optionSqlite)

// msg.readChat().then(res => console.log(res))
// msg.saveChat({
//     email: "hola.com",
//     date: Date.now(),
//     message: "hola pibe"
// }).then(res => console.log(res))

// contenedor.save()
// contenedor.getAll().then(res => console.log(res))
// contenedor.actualizar()
// contenedor.deleteById()

// contenedor.deleteById().then(res => console.log(res))

// contenedor.actualizar(2, {
//     title: 'PC Asus',
//     thumbnail: 'foto de PC asus',
//     price: 250000
// }).then(res=> console.log(res))

// contenedor.actualizar(1, {
//     title: 'PC',
//     thumbnail: "link de foto act",
//     price: 125000
// }).then(res=> console.log(res))
// contenedor.getAll().then(res => console.log(res))

// contenedor.save({
//     title: 'laptop 4',
//     thumbnail: "link de foto",
//     price: 900000
// }).then(res=> console.log(res))
// contenedor.deleteById() 
// contenedor.getAll()
// contenedor.actualizar()