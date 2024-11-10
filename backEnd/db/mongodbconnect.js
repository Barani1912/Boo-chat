
import mongoose from "mongoose";
// const dotenv = require("dotenv");

const connectToMongoDb = async () => {
    try {
        //await mongoose.connect('mongodb://localhost:27017/boo-chat');
         await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to MongoDB");
        const db = mongoose.connection;
        db.once('open', () => {
            console.log("Connected to MongoDB");
        });
    } catch (error) {
        console.log("Error connecting MongoDb", error.message);
    }
};

export default connectToMongoDb;




/////////////////////



// const mongoose = require("mongoose");
// // const dotenv = require("dotenv")

// const connectToMongoDb = async()=>{
//     try{
//        // await mongoose.connect('mongodb://localhost:27017/boo-chat');
//         await mongoose.connect(process.env.MONGO_DB_URI);
//         console.log("Connected to MongoDB")
//         const db = mongoose.connection;
//         db.once('open', ()=>{
//             console.log("Connected to MongoDB")
//         })
//     }
//     catch(error){
//         console.log("Error connecting MongoDb",error.message)
//     }
// }

// module.exports = connectToMongoDb