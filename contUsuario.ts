import fs from 'fs'


// id, timestamp(carrito), productos: { id, timestamp(producto), nombre, descripcion, código, foto (url), precio, stock }

export class contUsuario{
    constructor(public ruta:string, public carrito?:any, public id?:number){
        this.ruta = ruta
        this.carrito = []
        this.id
    }

    productsList:string = './productos.txt'

    public async createCart(id?:number){
        let read = await fs.promises.readFile(this.productsList, 'utf-8' )
        let parse = JSON.parse(read)

        parse.map((e:any) => {
            this.carrito.push({
                id: this.carrito.length + 1,
                timestamp: Date.now(),
                productos: {
                    id: e.id,
                    timestamp: e.timestamp,
                    nombre: 'esto es nombre',
                    descripcion: 'esto es descripcion',
                    codigo: 2323,
                    foto: 'foto',
                    precio: 232,
                    stock: 4
                }
            })
        });
        await fs.promises.writeFile(this.ruta, (JSON.stringify(this.carrito, null, 2)))
        return this.carrito
    }

    public async deleteCart(id?:any){
        try {
            let read = await fs.promises.readFile(this.ruta, 'utf-8')
            let parse = JSON.parse(read)

            let filtro = parse.filter((e:any)=> e.id !== id)
            await fs.promises.writeFile(this.ruta, (JSON.stringify(filtro, null, 2)))
            return filtro
        } catch (e:any) {
            console.log(e.message)
        }



    }

    public async listar(){

    }

    public async getCart(){

    }

    public async deleteProduct(){

    }
}

const contU = new contUsuario('./carrito.txt')

contU.createCart()
contU.deleteCart()