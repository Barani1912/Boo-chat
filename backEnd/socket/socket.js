//for ref use--> https://github.com/Barani1912/Socket.io-demo


const express = require("express");
const { Server } = require("socket.io");
const http= require("http");


const app = express();

const server = http.createServer(app);
const io = new Server(server,{
    cors:{
        origin:["http://localhost:3000"],
        methods:["GET","POST"]
    }
});

const getReceiverSocketId = (receiverId) =>{
    return userSocketMap[receiverId]
}

const userSocketMap = {}; //{userId : socketId}

io.on("connection",(socket)=>{
    console.log("user connected",socket.id);

    const userId = socket.handshake.query.userId;
    if(userId != "undefined"){
        userSocketMap[userId] = socket.id;
    }
    io.emit("getOnlineUsers",Object.keys(userSocketMap));
    // socket.on() ->
    //  used to listen events
    // used on both frontEnd n backEnd
    socket.on("disconnect",()=>{
        console.log("user disconnected",socket.id);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers",Object.keys(userSocketMap));
    })
})

module.exports = {app,io,server,getReceiverSocketId}