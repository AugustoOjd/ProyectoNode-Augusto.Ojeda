import {Conteiner} from './ContAdmin';
import {contUsuario} from './contUsuario';

const express = require('express')
const router1 = express.Router();
const router2 = express.Router();
const cont = new Conteiner('./productos.txt')
const contU = new contUsuario('./carrito.txt')


const app = express()

// app.set('views', './views');
// app.set('view engine', 'ejs');

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use('/api/productos', router1)
app.use('/api/carrito', router2)


const PORT = process.env.PORT || 8080

app.listen(PORT, ()=>console.log('server on'))


let administrador:boolean


// ---- Ruta no encontrada


// ----------------Ruta de solo Administradores

router1.get('/:id?', async (req:any, res:any)=>{
    const all = await cont.getAll(parseInt(req.params.id))
    return res.status(200).json(all)
})

router1.post('/', async (req:any, res:any)=>{
    try{
        let data = await cont.save(req.body)
        return res.status(200).json(data)
    }
    catch(e:any){
        console.log('error post server', e.message)
    }
})

router1.put('/:id', async (req:any, res:any)=>{
    try{
        let data = await cont.actualizar(parseInt(req.params.id), req.body)
        return res.status(200).json(data)
    }
    catch(e:any){
        console.log('error en act producto admin', e.message)
    }
})

router1.delete('/:id', async (req:any, res:any)=>{
    try{
        const dele = await cont.deleteById(parseInt(req.params.id))
        return res.status(200).json(dele)
    }
    catch(e:any){
        return console.log(e.message)
    }
})



// ----------------- Ruta de Admin y usuarios


// crea un carrito
router2.post('/',async (req:any, res:any) => {
    try {
        let datos = await contU.createCart()
        return res.status(200).json(datos)
    } catch (e:any) {
        return console.log(e.message)
    }
})

// push products by id al carrito
router2.post('/:id/productos',async (req:any, res:any) => {
    try {
        let datos = await contU.pushProductToCart(req.params.id)
        return res.status(200).json(datos)
    } catch (e:any) {
        return console.log(e.message)
    }
})

// Listar productos del carrito
router2.get('/:id/productos',async (req:any, res:any) => {
    try {
        let datos = await contU.listar(parseInt(req.params.id))
        return res.status(200).json(datos)
    } catch (e:any) {
        return console.log(e.message)
    }
})

// Vaciar el carrito y eliminarlo
router2.delete('/:id',async (req:any, res:any) => {
    try {
        let datos = await contU.deleteCart(parseInt(req.params.id))
        return res.status(200).json(datos)
    } catch (e:any) {
        return console.log(e.message)
    }
})

// Eliminar un producto del carrito por id
router2.delete('/:id/productos/:id_prod',async (req:any, res:any) => {
    try {
        let datos = await contU.deleteProductToCart(parseInt(req.params.id), parseInt(req.params.id))
        return res.status(200).json(datos)
    } catch (e:any) {
        return console.log(e.message)
    }
})