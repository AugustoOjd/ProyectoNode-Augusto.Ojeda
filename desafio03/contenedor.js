const fs = require('fs')

class Contenedor{
    constructor(ruta){
        this.ruta = ruta
    }

    async getAll(){
        try{
            const datos = await fs.promises.readFile(this.ruta, 'utf-8')
            const conver = JSON.parse(datos)
            return conver
        }catch(e){
            return console.log(`No hay archivos ${e.message}`)
        }
    }

    async getRandom(){
        try{
            const datos = await fs.promises.readFile(this.ruta, 'utf-8')
            const conver = JSON.parse(datos)
            const random = conver[Math.round(Math.random()*conver.length)];
            return random
        }
        catch(e){
            return console.log(`error en random: ${e.message}`)
        }
    }


}

const productos = new Contenedor ('../productos.txt')


productos.getAll().then(res=> console.log(res))
productos.getRandom().then(res=> console.log(res))

module.exports.all = productos.getAll
module.exports.random = productos.getRandom