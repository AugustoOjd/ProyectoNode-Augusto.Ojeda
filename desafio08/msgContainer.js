const {optionSqlite} = require('./options/sqliteDB')

class ConteinerMsg{
    constructor(config){
        this.config = config
        this.knex = require('knex')(config)
    }

    async readChat(idMsg){
        try{
            if(idMsg){
                let show = await this.knex.from('messages').select("*").where({id: idMsg})
                return show
            }
            else{
                let show = await this.knex.from('messages').select("*")
                return show
            }
        }   
        catch(e){
            return console.log(e.message)
        }
    }

    async saveChat(chat){
        try{
            return await this.knex.from('messages').insert(chat)
        }
        catch(e){
            return this.console.log(e.message)
        }  
    }

}

module.exports  = new ConteinerMsg(optionSqlite)