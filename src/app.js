import express from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credential: true
}))

// json take storage only 16kb not more then 
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))

// for publicly save like pdf images, video 
app.use(express.static("public"))

// take a action user browser setcookie and get
app.use(cookieParser())

export default app

// (err, req, res, next)