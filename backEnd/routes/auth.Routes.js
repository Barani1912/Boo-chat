import express from "express";
import { login, logout, signup } from "../controllers/auth.Controllers.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

export default router;



// const express = require("express")
// const {login,logout,signup} = require("../controllers/auth.Controllers")

// const router = express.Router();

// router.post("/signup",signup)
// router.post("/login",login)
// router.post("/logout",logout)

// module.exports = router;