
class Contenedor{
    constructor(){
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


}

const productos = new Contenedor ()


productos.getAll()
productos.getById()
productos.postProduct()
productos.putProduct()
productos.deleteById()

module.exports = Contenedor