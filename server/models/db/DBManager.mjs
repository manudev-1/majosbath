import Client from 'pg'
import dotenv from 'dotenv'

dotenv.config()

class DBManager{
    constructor(){
        this.client = new Client.Client(`${process.env.DB_DIALECT}://${process.env.DB_USER}:${process.env.DB_PW}@${process.env.DB_URL}/${process.env.DB_DB}?sslmode=verify-full`)
    }

    async connect() {
        try {
            await this.client.connect();
            console.log('Connected to the database');
        } catch (error) {
            console.error('Failed to connect to the database:', error);
        }
    }

    async query(queryText, params) {
        try {
            const res = await this.client.query(queryText, params);
            return res.rows;
        } catch (error) {
            console.error('Error executing query:', error);
            throw error;
        }
    }

    async close() {
        try {
            await this.client.end();
            console.log('Disconnected from the database');
        } catch (error) {
            console.error('Failed to disconnect from the database:', error);
        }
    }

}

export default DBManager