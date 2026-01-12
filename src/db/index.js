import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const conncetDB = async () =>{
  try{
     const connectionIstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME }`)
     console.log(`\nMongoDB connected!! DB HOST ${connectionIstance.host}`);
  }catch(error){
    console.log("MONGODB connection error:",error)
    process.exit(1);
  }
}

export default conncetDB;