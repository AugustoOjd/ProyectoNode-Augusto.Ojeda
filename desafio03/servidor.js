const express = require('express')
const cont = require('./contenedor')
const app = express()

const port = 8080
const server = app.listen(port, ()=>{
    console.log(`Servidor http escuchado en el puerto ${server.address().port}`)
})

server.on("error", error=> console.log(`error del servidor ${error}`))

app.get('/productos', (req, res)=>{
    res.send(cont.all)
})

app.get('/productoRandom', (req, res)=>{
    res.send(cont.random)
})


