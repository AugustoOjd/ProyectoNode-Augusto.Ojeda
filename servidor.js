const express = require('express')
const app = express()
const Contenedor = require('./contenedor')
const contProductos = new Contenedor('./productos.txt')

let prueba = 'El servidor esta funcionando'


const port = 8080
const server = app.listen(port, ()=>{
    console.log(`Servidor http escuchado en el puerto ${server.address().port}`)
})

server.on("error", error=> console.log(`error del servidor ${error}`))

app.get('/productos', async (req, res)=>{
    res.send(await contProductos.getAll())

})

app.get('/productoRandom', async (req, res)=>{
    
    res.send(await contProductos.getRandom())
})

app.get('/', (req, res)=>{
    res.send(prueba)
})


