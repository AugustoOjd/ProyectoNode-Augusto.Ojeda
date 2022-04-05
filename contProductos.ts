import fs from 'fs'
import { Producto } from './interface'

export class Conteiner{
    
    
    constructor(public ruta:string, public products?: any, public id?:number ){
        this.ruta = ruta
        this.products = []
        this.id
    }
    
    public async getAll(id?:number){

        
        try{
            let read = await fs.promises.readFile(this.ruta, 'utf-8')
            let total = await JSON.parse(read)

            if(id){
                let find = await total.find((e:any)=> e.id === id)
                return find
            }
            else{
                return total
            }

        }
        catch(e:any){
            console.log(e.message)
        }
    }

    public async save(datos?:any){
        
        
        try{
            let read = await fs.promises.readFile(this.ruta, 'utf-8')
            let parse = JSON.parse(read)
            this.products = parse
            let newProduct: Producto = {
                timestamp: Date.now(),
                nombre: datos.nombre,
                descripcion: datos.descripcion,
                codigo: datos.codigo,
                foto:datos.foto,
                precio: datos.precio,
                stock: datos.stock,
                id: this.products.length + 1,
            }
            this.products.push(newProduct)
            await fs.promises.writeFile(this.ruta, JSON.stringify(this.products, null, 2))
            return this.products
        }
        catch(e:any){
            console.log(e.message)
        }

    }

    public async actualizar(id?:number, product?:any){

        try{
            
            let producto = {
                timestamp: Date.now(),
                nombre: product.nombre,
                descripcion: product.descripcion,
                codigo: product.codigo,
                foto: product.foto,
                precio: product.precio,
                stock: product.stock,
                id: id
            }
            let read = await fs.promises.readFile(this.ruta, 'utf-8')
            let parse = JSON.parse(read)
            this.products = parse
            if(id){
                let find = await this.products.find((e:any)=> e.id == id)
                await this.products.splice(find, 1, producto)

                await fs.promises.writeFile(this.ruta, (JSON.stringify(this.products, null, 2)))
                return this.products
            }else{
                return console.log('no existe ese producto')
            }
        }
        catch(e:any){
            console.log(e.message)
        }
    }

    public async deleteById(id?:number){
        try{
            let read = await fs.promises.readFile(this.ruta, 'utf-8')
            let datos = await JSON.parse(read)

            let fil = await datos.filter((e:any)=> e.id !== id)

            await fs.promises.writeFile(this.ruta, JSON.stringify(fil, null, 2))
            return fil
        }
        catch(e:any){
            console.log(e.message)
        }
    }

    // public async deleteAll(){
    //     try{
    //         let borrar = await fs.promises.writeFile(this.ruta, '[]')
    //         return borrar
    //     }
    //     catch(e:any){
    //         console.log(e.message)
    //     }
    // }




}

const contenedor = new Conteiner ('./productos.txt')


contenedor.save()
contenedor.deleteById() 
contenedor.getAll()
contenedor.actualizar()
