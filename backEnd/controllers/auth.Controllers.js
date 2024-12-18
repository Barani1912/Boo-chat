
import User from "../models/user.Model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

const signup = async (req, res) => {
    // console.log("SignupUser...")
    // res.send("Signup successfully")
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Password don't match" });
        }

        // checking username
        const user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ error: "Username already exists" });
        }

        //password hashing
        const salt = await bcrypt.genSalt(10); // increase in num will increase the process time...
        const hashedPassword = await bcrypt.hash(password, salt);

        // Profile Picture
        //https://avatar-placeholder.iran.liara.run/
        const boyProfilePic = ` https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        // new user data
        const newUser = new User({
            fullName,
            username, // obj shorthand
            password: hashedPassword,
            gender,
            profilePic: gender == "male" ? boyProfilePic : girlProfilePic,
        });

        if (newUser) {
            generateTokenAndSetCookie(newUser._id, res);
            //The newUser._id = (_id) refers to the unique identifier that MongoDB automatically generates for a new document when you save it in the database.
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic,
            });
        } else {
            res.status(400).json({ error: "Invalid User Data" });
        }
    } catch (error) {
        console.log("Error is singup controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");
        //-->  || provides a fallback value in case user?.password is undefined or null.

        
        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid username or password" });
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic,
        });
    } catch (error) {
        console.log("Error is login controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const logout = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.log("Error is logout controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export { login, logout, signup };




