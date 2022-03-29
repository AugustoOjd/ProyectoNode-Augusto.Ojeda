// const express = require("express");
// const { Server: HttpServer } = require("http");
// const { Server: IOServer } = require("socket.io");

// const app = express();

// const routers = express.Router()
// app.use(express.json())
// app.use(express.urlencoded({extended: true}))
// app.use('/api/productos', routers)




// app.set('views', './views')
// app.set('view engine', 'ejs')

// const statusOk = 200
// const errUsuario = 400
// const errServer = 500


// app.get('/', (req, res)=>{
//     const producto = contProductos.getAll()
//     res.render('form', {producto})
// })

// app.post('/', (req, res)=>{
//     const producto = contProductos.postProduct(req.body)
//     res.render('form', {producto})
// })

// // app.listen(8080, () => console.log('ready 8080'))

// // Seccion Chat

// const httpServer = new HttpServer(app);
// const io = new IOServer(httpServer);

// httpServer.listen(8080, function () {
//   console.log("Servidor corriendo en http://localhost:8080");
// });

// const messages = [
//   { author: "Juan", text: "¡Hola! ¿Que tal?" },
//   { author: "Pedro", text: "¡Muy bien! ¿Y vos?" },
//   { author: "Ana", text: "¡Genial!" },
// ];

// io.on("connection", socket=> {
//   console.log("Un cliente se ha conectado");
//   socket.emit("messages", messages);

//   socket.on("new-message", data => {
//     messages.push(data);
//     io.sockets.emit("messages", messages);
//   });
// });





const express = require("express");
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");


const Contenedor = require('./contenedor')
const contProductos = new Contenedor()

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

const messages = [
  // { author: "Juan", text: "¡Hola! ¿Que tal?" },
  // { author: "Pedro", text: "¡Muy bien! ¿Y vos?" },
  // { author: "Ana", text: "¡Genial!" },
];

io.on("connection", socket=> {
  console.log("Un cliente se ha conectado");
  socket.emit("messages", messages);

  socket.on("new-message", data => {
    messages.push(data);
    io.sockets.emit("messages", messages);
  });
});

// PRUEBA CON FILE SYSTEM

// io.on("connection", socket=>{
//   console.log('Cliente conectado al chat')
//   const chats = contProductos.lecturaM()
//   socket.emit("messages", chats )

//   socket.on("new-message", data =>{
//     const chat = contProductos.enviarM()
//     io.sockets.emit("messages", chat)
//   })
// })


// SOCKET TABLA

io.on("connection", socket =>{
  console.log('Cliente conectado a la tabla')

  socket.on('products', (data)=>{
    io.sockets.emit('products', data)
    console.log(data)
  })
  
})






app.get('/', (req, res)=>{
  const producto = contProductos.getAll()
  res.render('form', {producto})
})

// app.post('/', (req, res)=>{
//   const producto = contProductos.postProduct(req.body)
//   res.render('form', {producto})
// })

app.use(express.static("public"))