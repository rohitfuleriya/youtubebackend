// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
// import mongoose from "mongoose";
// import { DB_NAME } from "./constant";
import express from "express";
import connectDB from "./db/index.js";
import mongoose from "mongoose";
import { DB_NAME } from "./constant.js";

const app = express();
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
  path: "./env",
});

connectDB()
  .then(async () => {
    try {
      await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
      app.on("error", () => {
        console.log("ERROR", error);
        throw error;
      });
      app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is Running at Port ${process.env.PORT}`);
      });
    } catch (error) {
      console.log("ERROR ", error);
    }
  })
  .catch((err) => {
    console.log("Mongo DB connect Failed !!!");
  });
