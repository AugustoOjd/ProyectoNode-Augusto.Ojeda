
const express = require("express");
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");



const contProductos = require('./productsContainer.js')
const contMessages = require('./msgContainer.js')

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.set('views', './views')
app.set('view engine', 'ejs')

httpServer.listen(8080, function () {
  console.log("Servidor corriendo en http://localhost:8080");
});


io.on("connection", async socket=>{
  console.log('Cliente conectado al chat')
  let chats = await contMessages.readChat()
  socket.emit("messages", chats) 
  
  socket.on("new-message", async data =>{
    const chat = await contMessages.saveChat({
      correo: data.correo,
      date: new Date().toDateString(),
      mensaje: data.mensaje
    })
    io.sockets.emit("messages", chat) 
  })
})

// SOCKET TABLA

io.on("connection", async socket =>{
  console.log('Cliente conectado a la tabla')

  socket.emit('products', await contProductos.getAll())

  socket.on('products', async data=>{
    await contProductos.postProduct(data)
    io.sockets.emit('products', await contProductos.getAll())
    console.log(data)
  })
  
})



app.get('/', (req, res)=>{
  const producto = contProductos.getAll()
  res.render('form', {producto})
})


app.use(express.static("public"))