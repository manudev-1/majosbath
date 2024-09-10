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

    static async post(Name){
        const db = new DBManager()
        await db.connect()

        const resp = await db.query("INSERT INTO registrationTypes (name) VALUES ($1)", [Name])

        await db.close()
        return resp
    }

    static async put(Id, Name){
        const db = new DBManager()
        await db.connect()

        const resp = await db.query("UPDATE registrationTypes SET name = $1 WHERE typeID = $2", [Name, Id])

        await db.close()
        return resp
    }

    static async delete(Id){
        const db = new DBManager()
        await db.connect()

        const resp = await db.query("DELETE FROM registrationTypes WHERE roleID = $1", [Id])

        await db.close()
        return resp
    }
}

export default RegistrationTypeTable