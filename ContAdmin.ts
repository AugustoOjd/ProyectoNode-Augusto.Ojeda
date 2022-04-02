const fs = require('fs')

export class Conteiner{
    

    constructor(public ruta:string, private products?: any, private id?:number ){
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
            let newProduct= {
                timestamp: datos.timestamp ,
                nombre: datos.nombre,
                descripcion: datos.descripcion,
                codigo: datos.codigo,
                foto:datos.foto,
                precio: datos.precio,
                stock: datos.stock,
                id: this.products.length,
            }
            this.products.push(newProduct)
            await fs.promises.writeFile(this.ruta, JSON.stringify(this.products, null, 2))
            return this.products
        }
        catch(e:any){
            console.log(e.message)
        }


        // let productos = []
        // let id = 0
        
            // const newProduct= {
            //     timestamp: datos ? datos.timestamp : undefined ,
            //     nombre: datos ? datos.nombre : undefined,
            //     descripcion: datos ? datos.descripcion : undefined,
            //     codigo: datos ? datos.codigo : undefined,
            //     foto:datos ? datos.foto : undefined,
            //     precio: datos ? datos.precio : undefined,
            //     stock: datos ? datos.stock : undefined,
            //     id: id++,
            // }
        //     productos.push(newProduct)
            

        
        // if (fs.existsSync(this.ruta)) {
        //     let read = await fs.promises.readFile(this.ruta, 'utf-8')
        //     productos = JSON.parse(read)
    
        //     if (productos.length > 0) {
        //         id = productos[productos.length - 1].id + 1
        //         if(datos){
        //             datos.id = id
        //         }
        //         else{
        //             datos = [{}]
        //         }
        //     } 

        // } 

        // productos.push(datos)

        // try{
        //     let write = await fs.promises.writeFile(this.ruta, JSON.stringify(productos, null, 2))
            
        //     return write
        // }
        // catch(e:any){
        //     console.log(e.message)
        // }
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

            let write = await fs.promises.writeFile(this.ruta, JSON.stringify(fil, null, 2))
            return console.log(write)
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

contenedor.getAll().then(res => console.log(res))

contenedor.save([{}]).then(res => console.log(res))

// contenedor.deleteById()

// contenedor.save(

//     {
//         "timestamp": 12313,
//         "nombre": "primero",
//         "descripcion": "Esto es primero",
//         "codigo": "codigo primero",
//         "foto": "esto es url foto",
//         "precio": 456,
//         "stock": 4,
//     }
// ).then(res => console.log(res))

// contenedor.getAll().then(res => console.log(res))

// contenedor.deleteAll()