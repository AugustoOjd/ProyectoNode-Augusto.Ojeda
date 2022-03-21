const express = require('express')
// const multer = require('multer')
const routers = express.Router()


const app = express()
const Contenedor = require('./contenedor')
const contProductos = new Contenedor()



app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use('/api/productos', routers)

app.use('/static', express.static('public'));


const statusOk = 200
const errUsuario = 400
const errServer = 500


const port = 8080
const server = app.listen(port, ()=>{
    console.log(`Servidor http escuchado en el puerto ${server.address().port}`)
})

server.on("error", error=> console.log(`error del servidor ${error}`))


routers.get('/:id', (req, res)=>{
    //devuelve un producto segun su id
    try{
        const getId = contProductos.getById(parseInt(req.params.id))
        if(getId){
            return res.status(statusOk).json(getId)
        }else{
            return res.status(errUsuario).json('No hay productos disponibles')
        }
        
    }catch(e){
        return res.status(errUsuario).json(e.message)
    }
    
    })
routers.put('/:id',(req, res)=>{
        //recibe y actualiza un producto según su id.
        try{
            const act = contProductos.putProduct(parseInt(req.params.id), req.body)
            res.status(statusOk).json(act)
        }
        catch(e){
            console.log('hubo un error en actualizar', e.message)
        }
    
    })
    
routers
    .delete('/:id',(req, res)=>{
        //elimina un producto según su id.
        try{
            const borrar = contProductos.deleteById(parseInt(req.params.id))
            return res.status(statusOk).json(borrar)
        }
        catch(e){
            return res.status(errUsuario).json
        }
    
    })
    
routers
    .post('/', (req, res)=>{
    //recibe y agrega un producto, y lo devuelve con su id asignado.
    try{
        const producto = contProductos.postProduct(req.body)
        return res.status(statusOk).json(producto)
    }catch(e){
        return res.status(errServer).json(e.message)
    }
    })
        
routers
    .get('/', (req, res)=>{
        //devuelve todos los productos
        try{
            const total = res.send(contProductos.getAll())
            return res.status(statusOk).json(total)
        }catch(e){
            return res.status(errServer).json(e.message)
        }
    })

routers.get('*', (req, res)=>{
    res.send('Pagina no encontrada')
})

    // app.get((req, res)=>{
    // res.sendFile(__dirname + '/public')
    // })


