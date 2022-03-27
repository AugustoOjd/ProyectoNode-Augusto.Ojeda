const express = require('express')
const app = express()
const routers = express.Router()
const { Server: HttpServer } = require('http');
const { Server: IOServer } = require('socket.io');

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api/productos', routers)

const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

const Contenedor = require('./contenedor')
const contProductos = new Contenedor()


app.set('views', './views')
app.set('view engine', 'pug')

const statusOk = 200
const errUsuario = 400
const errServer = 500


const messages = [
    { author: "Juan", text: "¡Hola! ¿Que tal?" },
    { author: "Pedro", text: "¡Muy bien! ¿Y vos?" },
    { author: "Ana", text: "¡Genial!" }
];


io.on('connection', function(socket) {
    console.log('Un cliente se ha conectado');
    socket.emit('messages', messages);

    socket.on('new-message',data => {
        messages.push(data);
        io.sockets.emit('messages', messages);
    });

});

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
    const producto = contProductos.getAll()
    res.render('form', {producto})
})

routers.get('/', (req, res)=>{
    const producto = contProductos.getAll()
    res.render('form', {producto})
})

routers.post('/', (req, res)=>{
    const producto = contProductos.postProduct(req.body)
    res.render('form', {producto})
})



app.listen(8080, ()=> console.log('ready'))



// app.get('urlparam', (req,res)=>{
//     res.render(req.query)
// })

// app.get('urlparam', (req,res)=>{
//     res.render(req.query)
// })

