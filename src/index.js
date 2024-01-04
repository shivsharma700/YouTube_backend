import dotenv from 'dotenv';
import connectDB from './db/index.js';
import express from 'express';

const app = express();

dotenv.config({
    path: './env'
})

const port = process.env.PORT || 8000;

connectDB()
.then(()=>{
    app.on("error", (error)=>{
        console.log("Error: ", error);
        throw error
    })
    app.listen(port, ()=>{
        console.log(`server is running at port : ${port}`);
    })
})
.catch((error)=>{
    console.log("MONGO dv connection failed !!!", error);
})









/*
import express from "express";
const app = express();
;(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("Error: ", error);
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.log("Error: ", error);
        throw error
    }
})()
*/