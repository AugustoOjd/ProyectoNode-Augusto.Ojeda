import express from 'express'
import productosDaoMemoria from './src/daos/productos/productosDaoMemoria'
import carritosDaoMemoria from './src/daos/carritos/carritosDaoMemoria'


const app = express()
const port = 8080
const routerProducts = express.Router()


routerProducts.get('/:id', async (req, res)=>{
 
})


app.listen(port, ()=>{
  console.log('server ready')
})