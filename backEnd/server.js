//1:38:00 -> backend part1 ends here...

const path = require("path") ; 
const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/auth.Routes.js");
const messageRoutes = require("./routes/message.Routes.js");
const userRoutes = require("./routes/user.Routes.js");

const connectToMongoDb = require("./db/mongodbconnect.js");
const {app,server} = require("./socket/socket.js")


dotenv.config();

// const __dirname = path.resolve();
//In CommonJS, __dirname is automatically available, so there's no need to redefine it

// const app = express();
const PORT = process.env.PORT || 5000;
// process.env.PORT ...it wont work without importing and cofiguring...

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes)
app.use("/api/message",messageRoutes)
app.use("/api/users",userRoutes)

app.use(express.static(path.join(__dirname, "../frontEnd/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../frontEnd/dist/index.html"));
});

server.listen(PORT,()=>{
    connectToMongoDb();
    console.log(`The Server Is Running On Port ${PORT}`)
});