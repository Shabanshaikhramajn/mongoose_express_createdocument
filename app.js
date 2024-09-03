import express from 'express'
import connectDB from './db/connectdb.js'
import './models/Student.js'
import createDoc from './models/Student.js'




const app = express()
const port = process.env.PORT || '3000'
const DATABASE_URL  = process.env.DATABASE_URL || "mongodb://localhost:27017"


connectDB(DATABASE_URL)

//create and save document


// createDoc()
createDoc('sumit',29,7555.60,['gameing','dancing'],false, [{value:'this is bad'}])



app.listen(port,()=>{
    console.log(`server listening at http://localhost:${port}`)
})