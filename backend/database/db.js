import mongoose, { mongo } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();


const Connection = (MONGODB_URI) => {
    
    mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log("Database Connected");
    })

    mongoose.connection.on('disconnected', () => {
        console.log("Database Disconnected");
    })

    mongoose.connection.on('error', () => {
        console.log("error", 
        +error.message)
    })
    
}

export default Connection;