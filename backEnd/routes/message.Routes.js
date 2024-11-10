
import express from "express";
import { getMessages, sendMessage } from "../controllers/message.Controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);

export default router;







////////////




// const express = require('express');
// const { sendMessage, getMessages } = require("../controllers/message.Controller");
// const protectRoute = require('../middleware/protectRoute');

// const router = express.Router()


// router.get("/:id",protectRoute,getMessages)
// router.post("/send/:id",protectRoute,sendMessage)

// module.exports = router;