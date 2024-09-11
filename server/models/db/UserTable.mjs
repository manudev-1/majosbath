import Table from "./Table.mjs";
import DBManager from './DBManager.mjs'

class UserTable extends Table{
    constructor(){
        super()
    }

    static async getColumn(){
        const db = new DBManager()
        await db.connect()
        
        const resp = await db.query("SHOW COLUMNS FROM users")
     
        await db.close()
        return resp
    }

    static async get(){
        const db = new DBManager()
        await db.connect()

        const resp = await db.query("SELECT * FROM users")

        await db.close()
        return resp
    }

    static async getById(Id = -1){
        const db = new DBManager()
        await db.connect()

        const resp = await db.query("SELECT * FROM users WHERE userID = $1", [Id])

        await db.close()
        return resp
    }

    static async post(Nick, Email, Password){
        const db = new DBManager()
        await db.connect()

        const resp = await db.query("INSERT INTO users (nick, email, password, rolefk) VALUES ($1, $2, md5($3::TEXT), 1002395372045631489)", [Nick, Email, Password])

        await db.close()
        return resp
    }

    static async put(Id, Nick, Email, Password, RoleFK){
        const db = new DBManager()
        await db.connect()

        const resp = await db.query("UPDATE users SET nick = $1, email = $2, password = $3, rolefk = $4 WHERE roleID = $5", [Nick, Email, Password, RoleFK, Id])

        await db.close()
        return resp
    }

    static async delete(Id){
        const db = new DBManager()
        await db.connect()

        const resp = await db.query("DELETE FROM users WHERE roleID = $1", [Id])

        await db.close()
        return resp
    }
}

export default UserTable