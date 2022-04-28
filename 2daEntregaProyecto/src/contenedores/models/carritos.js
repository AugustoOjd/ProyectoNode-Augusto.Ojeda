import mongoose from "mongoose";
// const mongoose = require('mongoose')

const carritoColletion = 'carritos'

export const CarritosSchemma = new mongoose.Schema({
    id: {type: Number, require: true, max: 100},
    title: {type: String, require: true, max: 100},
    price: {type: Number, require: true, max: 100},
    thumbnail: {type: String, require: true, max: 100}
})

export const carritos = mongoose.model(carritoColletion, CarritosSchemma);