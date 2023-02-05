import express from "express"
import User from "./routers/User.js"
import cookieParser from "cookie-parser";

export const app = express();
import multer from "multer"

app.use(express.json());
app.use(multer().any())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())



app.use("/api/v1", User);