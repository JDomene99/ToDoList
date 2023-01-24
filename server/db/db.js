import { connect } from "mongoose";
import * as dotenv from 'dotenv'
dotenv.config()

const bdMongo = ( async () => {
    try {
        const DB_URI = process.env.MONGODB_URI;
        const db = await connect(process.env.MONGODB_URI);
        console.log('Conectado a ', db.connection.name)
    } catch (error) {
        console.log('a')
        console.log(error)
    }
    
})

export default bdMongo;