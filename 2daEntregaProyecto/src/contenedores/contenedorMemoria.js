export default class ContenedorMemoria{
    constructor(){
        this.container = []
    }

    async save(datos){
        try{
            await this.container.push(datos)
            return this.container
        }catch(e){
            console.log(e.message)
        }
    }

    async getId(idDato){
        try {
            if(this.container.some(e=> e.id == idDato)){
                let data = await this.container.find(e=> e.id == idDato)
                return data
            }else{
                return this.container
            }
        } catch (e) {
            return console.log(e.message)
        }
    }

    async update(idDatos, newData){
        try {
            if(this.container.some(e=> e.id == idDatos)){
                let indice = await this.container.findIndex(e=> e.id == idDatos)
                await this.container.splice(indice, 1, newData)

                return this.container
            }else{
                return console.log('no es posible actualizar')
            }
        } catch (e) {
            return console.log(e.message)
        }
    }

    async deteleById(idDatos){
        try {
            if(this.container.some(e=> e.id == idDatos)){
                let dele = await this.container.filter(e=> e.id !== idDatos)
                return dele
            }else{
                return console.log('no existe ese producto')
            }
        } catch (e) {
            return console.log(e.message)
        }
    }


}

// const contenedorM = new ContenedorMemoria()

// contenedorM.save(
//     {
//         id: 1,
//         title: "hola",
//         price: 200,
//         thumbnail: "link img"
//     }
// )

// contenedorM.save(
//     {
//     id: 2,
//     title: "chao",
//     price: 450,
//     thumbnail: "link img2"
//     }
// )
// contenedorM.save(
//     {
//     id: 3,
//     title: "hello",
//     price: 800,
//     thumbnail: "link img3"
//     }
// ).then(res => console.log(res))

// contenedorM.deteleById(3).then(res => console.log('esto es filtro', res))

// contenedorM.update(2,     {
//     id: 5,
//     title: "updataaaa",
//     price: 560,
//     thumbnail: "link img5"
//     }).then(res => console.log(res))

// contenedorM.getId().then(res => console.log('esto es getID', res))