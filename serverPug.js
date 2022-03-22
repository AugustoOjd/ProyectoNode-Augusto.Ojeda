const express = require('express')
const app = express()
const routers = express.Router()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api/productos', routers)

const Contenedor = require('./contenedor')
const contProductos = new Contenedor()


app.set('views', './views')
app.set('view engine', 'pug')

const statusOk = 200
const errUsuario = 400
const errServer = 500

// app.use('/static', express.static(__dirname + '/views'))

// const productos = []


// app.get('/', (req, res)=>{
//     res.render('form', {productos})
// })

// routers.post('/', (req, res)=>{
//     productos.push(req.body)
//     res.render('form', {productos})
// })

app.get('/', (req, res)=>{
    res.render('form')
})

routers.get('/', (req, res)=>{
    const producto = contProductos.getAll()
    res.render('tablas/tabla', {producto})
})

routers.post('/', (req, res)=>{
    const producto = contProductos.postProduct(req.body)
    res.render('tablas/tabla', {producto})
})



app.listen(8080, ()=> console.log('ready'))



// app.get('urlparam', (req,res)=>{
//     res.render(req.query)
// })

// app.get('urlparam', (req,res)=>{
//     res.render(req.query)
// })

