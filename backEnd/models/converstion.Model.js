import mongoose from 'mongoose';

const conversationSchema = new mongoose.Schema({
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    messages: [{
       type: mongoose.Schema.Types.ObjectId,
       ref: "Message",
       default: [] 
    }]
    // will show the created and updated time..
}, { timestamps: true });

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;




/////////////////////

// const mongoose = require('mongoose');

// const conversationSchema = new mongoose.Schema({
//     participants:[{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"User"
//     }],
//     messages:[{
//        type:mongoose.Schema.Types.ObjectId,
//        ref:"Message",
//        default:[] 
//     }]
//     //will show the created and updated time..
// },{timestamps:true});

// const Conversation = mongoose.model("Conversation",conversationSchema);

// module.exports = Conversation;