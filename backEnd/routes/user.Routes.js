const express = require('express');
const protectRoute = require('../middleware/protectRoute');
const getUsersForSideBar = require('../controllers/user.Controller');

const router = express.Router()

router.get("/",protectRoute,getUsersForSideBar)


module.exports = router;