import { Producto } from './interface'
// import knex from 'knex'
import { opcion } from './options/mariaDB'
const knex = require('knex')(opcion)


export class Conteiner{
    
    
    constructor(public products?: any){
        this.products = []
    }

    public async save(datos?:any){
        
        try{
            let newProduct: Producto = {
                timestamp: Date.now(),
                name: datos.name,
                description: datos.description,
                code: datos.code,
                foto: datos.foto,
                price: datos.price,
                stock: datos.stock
            }
            this.products.push(newProduct)
            return await knex('products').insert(this.products)
            
        }
        catch(e:any){
            console.log(e.message)
        }
        finally{
            knex.destroy()
        }

    }
    
    public async getAll(idProduct?:number){
        try{
            if(idProduct){
                let show = await knex.from('products').select("*").where({id: idProduct})
                return show
            }
            else{
                let show = await knex.from('products').select("*")
                return show
            }
        }
        catch(e:any){
            console.log(e.message)
        }
        finally{
            knex.destroy()
        }
    }



    public async actualizar(idProduct?:number, product?:any){

        try{
            if(idProduct){
                let producto: Producto = {
                    timestamp: product.timestamp,
                    name: product.name,
                    description: product.description,
                    code: product.code,
                    foto: product.foto,
                    price: product.price,
                    stock: product.stock,
                }
                let data = await knex.from('products').where({ id: idProduct }).update(producto)
                return data
            }else{
                console.log('el producto no existe')
            }

        }
        catch(e:any){
            console.log(e.message)
        }
        finally{
            knex.destroy()
        }
    }

    public async deleteById(idProduct?:number){
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
        catch(e:any){
            console.log(e.message)
        }
        finally{
            knex.destroy()
        }
    }


}

const contenedor = new Conteiner ()

contenedor.save()
contenedor.getAll()
contenedor.actualizar()
contenedor.deleteById()

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
//     name: 'laptop',
//     description: "esto es una laptop",
//     code: "fg345",
//     foto: "link de foto",
//     price: 900000,
//     stock: 5
// })
// contenedor.deleteById() 
// contenedor.getAll()
// contenedor.actualizar()