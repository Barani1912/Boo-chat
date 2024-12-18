
import Conversation from "../models/converstion.Model.js";
import Message from "../models/message.Model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";
// const io = require("socket.io-client");

const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    //const receiverId = req.params.id;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] }
      //$all mongoose syntax..
      
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId]
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId, // obj shorthand
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    // this will run line by line...
    // await conversation.save();
    // await newMessage.save();
  

    // this will run in parallel...
    await Promise.all([conversation.save(), newMessage.save()]);

    // SOCKET IO FUNTIONALITY...
 
    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      // io.to().emit()--> send to a specific person only
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessage Controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] }
    }).populate("messages");
    // populate method from mongoose

    if (!conversation) {
      return res.status(200).json([]);
    }

    const messages = conversation.messages;

    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getMessages Controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export { sendMessage, getMessages };



