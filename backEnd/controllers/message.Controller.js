const Conversation = require("../models/converstion.Model");
const Message = require("../models/message.Model");

const sendMessage = async(req,res)=>{
    try {
        const { message } = req.body;
        const {id: receiverId} = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants:{$all:[senderId,receiverId]}
        })

        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId,receiverId]
            })
        }
        
        const newMessage = new Message({
            senderId,
            receiverId,      //obj shorthand
            message,
        });

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }


        // SOCKET IO FUNTIONALITY...





    // this will run line by line...

        // await conversation.save();
        // await newMessage.save();
        // 1:24:00-yt
       
    // this will run in parallel...
        await Promise.all([conversation.save(), newMessage.save()]);
        
        res.status(201).json(newMessage);

    } catch (error) {
        console.log("Error in sendMessage Controller: ",error.message)
        res.status(500).json({error:"Internal server error"})
    }
}

const getMessages = async(req,res)=>{
    
    try {
        
        const {id: userToChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
           participants:{ $all:[senderId,userToChatId]} 
        }).populate("messages"); //1:27:00 ->yt


        if(!conversation){
            return res.status(200).json([]);
        }

        const messages = conversation.messages;

        res.status(200).json(messages)

    } catch (error) {
        console.log("Error in getMessages Controller: ",error.message)
        res.status(500).json({error:"Internal server error"})
    }
}

module.exports={sendMessage, getMessages}