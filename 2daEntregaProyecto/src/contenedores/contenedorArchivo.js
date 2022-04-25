const fs = require('fs')

class ContenedorArchivos{
    constructor(ruta){
        this.ruta = ruta
        this.container = []
    }

    async save(datos){
        try {
            if(fs.existsSync(this.ruta)){
                let read = await fs.promises.readFile(this.ruta, 'utf-8')
                let parse = JSON.parse(read)
                this.container = parse
                
                datos.id = this.container.length + 1
                this.container.push(datos)

                await fs.promises.writeFile(this.ruta, JSON.stringify(this.container, null, 2))
                return this.container
            }else{
                this.container.push(datos)
                await fs.promises.writeFile(this.ruta, JSON.stringify(this.container, null, 2))
                return this.container
            }

        } catch (e) {
            return console.log(e.message)    
        }
    }

    async getId(idDatos){
        try {
            let read = await fs.promises.readFile(this.ruta, 'utf-8')
            let parse = JSON.parse(read)
            this.container = parse

            if(this.container.some(e=> e.id == idDatos)){
                let find = await this.container.find(e=> e.id == idDatos)
                return find
            }else{
                return this.container
            }
        } catch (e) {
            return console.log(e.message)
        }
    }

    async update(idDatos, newData){
        try {
            let read = await fs.promises.readFile(this.ruta, 'utf-8')
            let parse = JSON.parse(read)
            this.container = parse

            if(this.container.some(e=> e.id == idDatos)){
                let indice = this.container.findIndex(e=> e.id == idDatos)

                newData.id = this.container.length + 1
                await this.container.splice(indice, 1, newData)

                await fs.promises.writeFile(this.ruta, JSON.stringify(this.container, null, 2))
                return this.container
            }else{
                return console.log('No existe este dato')
            }
        } catch (e) {
            return console.log(e.message)
        } 
    }

    async deleteById(idDatos){
        try {
            let read = await fs.promises.readFile(this.ruta, 'utf-8')
            let parse = JSON.parse(read)
            this.container = parse

            if(this.container.some(e=> e.id == idDatos)){
                let dele = await this.container.filter(e=> e.id !== idDatos)
                await fs.promises.writeFile(this.ruta, JSON.stringify(dele, null, 2))
                return this.container
            }else{
                return console.log('Este dato no existe')
            }
        } catch (e) {
            return console.log(e.message)
        }
    }
}

const contenedorA = new ContenedorArchivos('./datos.txt')

// contenedorA.save({
//     title: "fs hola",
//     price: 4512,
//     thumbnail: "fs link img"
// }).then(res=> console.log(res)) 

// contenedorA.getId().then(res => console.log(res))

// contenedorA.update(1, {
//     title: "fs updateeee",
//     price: 2552,
//     thumbnail: "fs link img update"
// }).then(res=> console.log(res))

contenedorA.deleteById(2).then(res=> console.log(res)) 