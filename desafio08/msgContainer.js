const {optionSqlite} = require('./options/sqliteDB')

class ConteinerMsg{
    constructor(config){
        this.config = config
        this.knex = require('knex')(config)
    }

    async readChat(idMsg){
        try{
            if(idMsg){
                let show = await this.knex.from('ecommerce').select("*").where({id: idMsg})
                return show
            }
            else{
                let show = await this.knex.from('ecommerce').select("*")
                return show
            }
        }   
        catch(e){
            return console.log(e.message)
        }
        finally{
            this.knex.destroy()
        }
    }

    async saveChat(chat){
        try{
            return await this.knex.from('ecommerce').insert(chat)
        }
        catch(e){
            return this.console.log(e.message)
        }
        finally{
            knex.destroy()
        }   
    }

}

module.exports  = new ConteinerMsg(optionSqlite)