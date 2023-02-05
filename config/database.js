import mongoose from "mongoose"

export const connectDatabase = () => {
    mongoose.connect("mongodb://localhost:27017/anantadiTech")
    .then(()=>{console.log("mongodb is connected")})
    .catch((error)=>{console.log(error.message)})
}