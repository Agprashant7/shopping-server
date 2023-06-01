require('dotenv').config()
const express=require('express')
const app=express();
const cors=require('cors');     
const router=require('./routes/index')
const port=process.env.PORT||5000
const connectDB = require('./db/connectDb');


app.use(cors());
app.use(express.json())
app.use('/',router)

const start=async()=>{
    try{
        await connectDB();
        app.listen(port,()=>{
            console.log(`Server Up and running on ${port}`)
        })
    }
    catch(err){
        console.log(`Error while connecting to the server`,err)
    }
}
start()