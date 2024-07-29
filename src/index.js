// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
// import mongoose from "mongoose";
// import { DB_NAME } from "./constant";
import express from "express";
import connectDB from "./db/index.js";

const app = express()
// effie 

// ;( async ()=> {
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//        app.on("error", () => {
//         console.log("ERROR", error)
//         throw error
//        })

//        app.listen(process.env.PORT, () => {
//         console.log(`App is listening on port ${process.env.PORT}`)
//        })
//     } catch (error) {
//         console.log("ERROR: ", error)
//         throw error
//     }
// })()

dotenv.config({
    path: './env'
})

connectDB()