import {Conteiner} from './ContAdmin';

const express = require('express')
const router1 = express.Router();
const router2 = express.Router();
const cont = new Conteiner('./productos.txt')

const app = express()

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use('/api/productos', router1)
app.use('/api/carrito', router2)


const PORT = process.env.PORT || 8080

app.listen(PORT, ()=>console.log('server on'))

// Administradores

router1.get('/', async (req:any, res:any)=>{
    const all = await cont.getAll()
    return res.status(200).json(all)
})

// router1.post('/', async (req:any, res:any)=>{
//     try{
//         let data = await cont.save(req.body)
//         return res.status(200).json(data)
//     }
//     catch(e:any){
//         console.log('error post server', e.message)
//     }
// })

router1.post('/', async (req:any, res:any)=>{
    let data = await cont.save(req.body)
    res.render('form', {data})
})

router1.put('/:id', async (req:any, res:any)=>{

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
