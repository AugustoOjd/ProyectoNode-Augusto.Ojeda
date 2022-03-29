const fs = require('fs');

class Contenedor{
    constructor(ruta){
        this.ruta = ruta
        this.products = []
        this.id = 0
    }

    getAll(){
        try{
            return this.products
        }catch(e){
            return console.log(`Hubo un error en cargar todo los productos ${e.message}`)
        }
    }

    getById(id){
        try{
            return this.products.find(e=> e.id === id)
        }catch(e){
            return console.log(`No se encuentra el producto`)
        }
    }

    postProduct(obj){
        try{
            this.id++
            const newProduct = {
                nombre: obj.nombre,
                precio: obj.precio,
                thumbnail: obj.thumbnail,
                id: this.id,
            }
            this.products.push(newProduct)
            return this.products
        }catch(e){
            console.log(`Hubo un error en guarda producto ${e.message}`)
        }
    }

    putProduct(id, product){
        try{

            const newProduct = {
                nombre: product.nombre,
                precio: product.precio,
                thumbnail: product.thumbnail,
                id: product.id
            }

            const indice = this.products.findIndex(e=> e.id == id)
            const actualizar = this.products.splice(indice, 1, newProduct)
            
            return actualizar
        }catch(e){
            console.log(`Hubo un error en actualizar producto ${e.message}`)
        }
    }

    deleteById(id){
        try{
            return this.products.filter(e=> e.id !== id)
        }catch(e){
            return console.log(`Hubo un error en eliminar producto ${e.message}`)
        }
    }

    // Leer y guardar mensaje del file chat.text

    lecturaM(){
        try{
            let datos = fs.readFileSync(this.ruta, 'utf-8')
            let mensaje = JSON.parse(datos)
            return mensaje
        }   
        catch(e){
            return console.log(e.message)
        }
    }

    enviarM(chat){
        try{
            let datos = fs.writeFileSync(this.ruta, JSON.stringify(chat, null, 2))
            chat = datos
            return chat
        }
        catch(e){
            return console.log(e.message)
        }   
    }


}

const productos = new Contenedor ('./chat.text')


// productos.getAll()
// productos.getById()
// productos.postProduct()
// productos.putProduct()
// productos.deleteById()

productos.lecturaM()
console.log(productos.lecturaM())
productos.enviarM([{
    correo: "asdad@asda.com",
    mensaje: "hola"
},
{
    correo: "asda222d@asda.com",
    mensaje: "hola2"
}
])

module.exports = Contenedor