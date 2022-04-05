import fs from 'fs'


// id, timestamp(carrito), productos: { id, timestamp(producto), nombre, descripcion, código, foto (url), precio, stock }

export class contUsuario{
    constructor(public ruta:string, public carrito?:any, public id?:number){
        this.ruta = ruta
        this.carrito = []
        this.id
    }

    productsList:string = './productos.txt'

    public async createCart(){
        try {
            let read = await fs.promises.readFile(this.ruta, 'utf-8' )
            let parse = JSON.parse(read)
            this.carrito = parse
            
            let carrito =
                {
                    id: this.carrito.length + 1,
                    timestamp: Date.now(),
                    productos: []
                }
            this.carrito.push(carrito)
            await fs.promises.writeFile(this.ruta, (JSON.stringify(this.carrito, null, 2)))
            return carrito.id
        } catch (e:any) {
            return console.log(e.message)
        }

    }

    public async deleteCart(id?:any){
        try {
            let read = await fs.promises.readFile(this.ruta, 'utf-8')
            let parse = JSON.parse(read)
            this.carrito = parse
            
            let cart = await this.carrito.find((e:any)=> e.id == id) 
            cart.productos = []

            let filtro = await this.carrito.filter((e:any)=> e.id !== id)

            await fs.promises.writeFile(this.ruta, (JSON.stringify(filtro, null, 2)))
            return filtro
        } catch (e:any) {
            console.log(e.message)
        }

    }

    public async listar(id?:number){
        try {
            let read = await fs.promises.readFile(this.ruta, 'utf-8')
            let parse = JSON.parse(read)
            this.carrito = parse

            let find = await this.carrito.find((e:any)=> e.id == id)
            let contenido = find.productos

            return contenido
        } catch (e:any) {
            return console.log(e.message)
        }
    }

    public async pushProductToCart(id?:number){
        try {
            // carritos
            let read = await fs.promises.readFile(this.ruta, 'utf-8')
            let parse = JSON.parse(read)
            this.carrito = parse
            // lista productos
            let read2 = await fs.promises.readFile(this.productsList, 'utf-8')
            let parse2 = JSON.parse(read2)

            let findProduct = await parse2.find((e:any)=> e.id == id)
            let findCarrito = await this.carrito.find((e:any)=> e.id == id)
            if(findCarrito && findProduct){
                await findCarrito.productos.push(findProduct)
                await fs.promises.writeFile(this.ruta, (JSON.stringify(this.carrito, null, 2)) )
            
                return this.carrito
            }else{
                console.log('error: no hay carrito o producto')
            }
            

            
        } catch (e:any) {
            return console.log(e.message) 
        }
    }

    public async deleteProductToCart(idCart?:number, idProduct?:number){
        try {
            let read = await fs.promises.readFile(this.ruta, 'utf-8')
            let parse = JSON.parse(read)
            this.carrito = parse

            let findCart = await this.carrito.find((e:any)=> e.id == idCart)

            let findProd = await findCart.productos.filter((e:any)=> e.id !== idProduct)
            findCart.productos = findProd

            await fs.promises.writeFile(this.ruta, (JSON.stringify(this.carrito, null, 2)))

            return this.carrito

        } catch (e:any) {
            return console.log(e.message)  
        }
    }
}

const contU = new contUsuario('./carrito.txt')

contU.createCart()
contU.deleteCart()
contU.listar()
contU.pushProductToCart()
contU.deleteProductToCart()