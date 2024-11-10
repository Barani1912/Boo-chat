

import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSidebar } from "../controllers/user.Controller.js";

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar);

export default router;








////////////////


// const express = require('express');
// const protectRoute = require('../middleware/protectRoute');
// const getUsersForSideBar = require('../controllers/user.Controller');

// const router = express.Router()

// router.get("/",protectRoute,getUsersForSideBar)


// module.exports = router;