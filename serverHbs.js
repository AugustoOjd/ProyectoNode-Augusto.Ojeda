const express = require('express')
// const multer = require('multer')
const routers = express.Router()


const app = express()
const Contenedor = require('./contenedor')
const contProductos = new Contenedor()


app.set('views', './views')
app.set('view engine', 'hbs')



app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use('/api/productos', routers)

// app.use('/static', express.static('public'));


const statusOk = 200
const errUsuario = 400
const errServer = 500


app.get('/', (req, res)=>{
    res.render('form')
})

routers.get('/', (req, res)=>{
    const producto = contProductos.getAll()
    res.render('tablas/tabla', {producto})
})

routers.post('/', (req, res)=>{
    const producto = contProductos.postProduct(req.body)
    res.render('tablas/tabla', {producto} )
})



const server = app.listen(8080, ()=> console.log('ready'))