import mongoose from 'mongoose';
import * as model from "./models/productos.js"
// const mongoose = require('mongoose');
// const datos = require('./models/productos.js')


export default class ContenedorMongoDb{
    constructor( collection, schema){
        this.collection = mongoose.model(collection, schema)
    }
    
    async conection(){
        try {
            await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce", {
                useNewUrlParser:  true,
                useUnifiedTopology: true
            })

            return console.log("conectado a mongo")
        } catch (e) {
            return console.log(e.message)
        }
    }

    async save(datos){
        try {
            let data = new this.collection(datos)
            let dataSave = await data.save()
            return dataSave
        } catch (e) {
            console.log(e.message)
        }
    }

    async getId(idData){
        try {
            if(idData){
                let datos = await this.collection.find({_id: idData})
                return datos
            }else{
                return await this.collection.find({})
            }
        } catch (e) {
            return console.log(e.message)
        }
    }

    async update(nameData, newData){
        try {
            let datos = await this.collection.updateOne({name: nameData}, {$set: {name: newData}})
            // let datos = await model.productos.updateOne({name: nameData}, {$set: {name: newData}})
            return datos
        } catch (e) {
            return console.log(e.message)
        }
    }

    async deleteById(idData){

    }

}

// const contenedorMongo = new ContenedorMongoDb()

// contenedorMongo.conection()
// contenedorMongo.getId().then(res=> console.log(res))
// contenedorMongo.update('laptop hp', "laptop razer").then(res=> console.log(res))