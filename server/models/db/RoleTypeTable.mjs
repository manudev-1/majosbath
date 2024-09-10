import Table from "./Table.mjs";
import DBManager from './DBManager.mjs'

class RoleTypeTable extends Table{
    constructor(){
        super()
    }

    static async getColumn(){
        const db = new DBManager()
        await db.connect()
        
        const resp = await db.query("SHOW COLUMNS FROM roleTypes")
     
        await db.close()
        return resp
    }

    static async get(){
        const db = new DBManager()
        await db.connect()

        const resp = await db.query("SELECT * FROM roleTypes")

        await db.close()
        return resp
    }

    static async getById(Id = -1){
        const db = new DBManager()
        await db.connect()

        const resp = await db.query("SELECT * FROM roleTypes WHERE roleID = $1", [Id])

        await db.close()
        return resp
    }

    static async post(Name){
        const db = new DBManager()
        await db.connect()

        const resp = await db.query("INSERT INTO roleTypes (name) VALUES ($1)", [Name])

        await db.close()
        return resp
    }

    static async put(Id, Name){
        const db = new DBManager()
        await db.connect()

        const resp = await db.query("UPDATE roleTypes SET name = $1 WHERE roleID = $2", [Name, Id])

        await db.close()
        return resp
    }

    static async delete(Id){
        const db = new DBManager()
        await db.connect()

        const resp = await db.query("DELETE FROM roleTypes WHERE roleID = $1", [Id])

        await db.close()
        return resp
    }
}

export default RoleTypeTable