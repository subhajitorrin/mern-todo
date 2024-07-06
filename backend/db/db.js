import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const {MONGOURL} = process.env
function connectDB() {
    if (!MONGOURL) { 
        console.log("mongourl is not defined in env");
        process.exit(1)
    }
    mongoose.connect(MONGOURL).then(() => {
        console.log("connected to db");
    }).catch(() => {
        console.log("disconnected to db");
    })
}
export default connectDB 