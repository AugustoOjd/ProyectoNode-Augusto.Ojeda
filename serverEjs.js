const express = require('express')
const app = express()
const routers = express.Router()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api/productos', routers)


app.set('views', './views')
app.set('view engine', 'ejs')

const statusOk = 200
const errUsuario = 400
const errServer = 500


const productos = []


app.get('/', (req, res)=>{
    res.render('form', {productos})
})

routers.post('/', (req, res)=>{
    productos.push(req.body)
    res.render('form', {productos})
})



app.listen(8080, ()=> console.log('ready'))