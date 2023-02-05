import mongoose from "mongoose"

import {app} from "./app.js"
import { connectDatabase } from "./config/database.js"

import {config} from "dotenv"

config({path:"./config/config.env"})


mongoose.set('strictQuery', true);
connectDatabase()
app.get("/",(req,res)=>{
  res.send("<h1>hello world<h1/>")
})

app.listen(3000 , ()=>{
    console.log("server running on port "+ 3000)
})

