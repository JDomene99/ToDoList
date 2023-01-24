import * as dotenv from 'dotenv'
import app from './app.js'
import bdMongo from './db/db.js'

dotenv.config()
app.listen(process.env.PORT);
bdMongo()

console.log('server listening on port '+process.env.PORT)