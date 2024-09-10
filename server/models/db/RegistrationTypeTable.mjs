import Table from "./Table.mjs";
import DBManager from './DBManager.mjs'

class RegistrationTypeTable extends Table{
    constructor(){
        super()
    }

    static async getColumn(){
        const db = new DBManager()
        await db.connect()
        
        const resp = await db.query("SHOW COLUMNS FROM registrationTypes")
     
        await db.close()
        return resp
    }

    static async get(){
        const db = new DBManager()
        await db.connect()

        const resp = await db.query("SELECT * FROM registrationTypes")

        await db.close()
        return resp
    }

    static async getById(Id){
        const db = new DBManager()
        await db.connect()

        const resp = await db.query("SELECT * FROM registrationTypes WHERE typeID = $1", [Id])

        await db.close()
        return resp
    }
}

export default RegistrationTypeTable