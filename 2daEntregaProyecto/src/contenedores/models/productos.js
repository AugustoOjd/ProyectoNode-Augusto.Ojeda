import mongoose from "mongoose";
// const mongoose = require('mongoose')

const productColletion = 'productos'

export const ProductosSchemma = new mongoose.Schema({
    id: {type: Number, require: true, max: 100},
    title: {type: String, require: true, max: 100},
    price: {type: Number, require: true, max: 100},
    thumbnail: {type: String, require: true, max: 100}
})

export const productos = mongoose.model(productColletion, ProductosSchemma);