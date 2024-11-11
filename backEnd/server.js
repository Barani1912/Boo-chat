import express from "express";
import path from "path";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.Routes.js";
import messageRoutes from "./routes/message.Routes.js";
import userRoutes from "./routes/user.Routes.js";

import connectToMongoDb from "./db/mongodbconnect.js";
import { app, server } from "./socket/socket.js";

dotenv.config();

const __dirname = path.resolve();
//In CommonJS, __dirname is automatically available, so there's no need to redefine it

// const app = express();
const PORT = process.env.PORT || 5000;
// process.env.PORT ...it wont work without importing and cofiguring...

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontEnd/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontEnd", "dist", "index.html"));
});

server.listen(PORT, () => {
  connectToMongoDb();
  console.log(`The Server Is Running On Port ${PORT}`);
});


