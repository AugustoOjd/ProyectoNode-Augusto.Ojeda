const fs = require('fs')

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
        
        // Seccion archivos opcion 1

        type admin = {
            timestamp: number,
            nombre: string,
            descripcion: string,
            codigo: string,
            foto: string,
            precio: number,
            stock: number,
            id: number
        }
        
        try{
            let newProduct: admin = {
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


        //  Seccion de archivos opcion 2

    //     let productos = []
    //     let id = 1
    //     if (fs.existsSync(this.ruta)) {
    //         let data = await fs.promises.readFile(this.ruta, 'utf-8')
    //         productos = JSON.parse(data)
    
    //         if (productos.length > 0) {
    //             id = productos[productos.length - 1].id + 1
    //             datos.id = id
    //         } else {
    //         datos.id = 1
    //         }
    //     } else {
    //         datos.id = 1
    //     }


    //     productos.push(datos)

    //     try{
    //         await fs.promises.writeFile(this.ruta, JSON.stringify(productos, null, 2))
    //         return productos
    //     }catch(e:any){
    //         console.log(`hubo un error en guardar ${e.message}`)
    //     }


    }

    public async actualizar(){
        try{

        }
        catch(e){
            
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

// 

contenedor.save().then(res => console.log(res))
contenedor.deleteById() 
contenedor.getAll()

// contenedor.save({
//     nombre: "adolfo",
//     descripcion: "mira aqui esta",
//     codigo: "45345",
//     foto: "esto es url foto",
//     precio: 345,
//     stock: 3
// })
// .then(res=> console.log('res de contAdmin', res))




// contenedor.getAll().then(res => console.log(res))

// contenedor.deleteAll()