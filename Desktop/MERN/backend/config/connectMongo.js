import mongoose from "mongoose";


export const connectDatabase = async()=>{
    try {
        await
        mongoose.connect("mongodb://localhost:27017/");
        console.log("Database connected successfully");
    } catch (error) {
        console.log(error.messange)
    }
}
