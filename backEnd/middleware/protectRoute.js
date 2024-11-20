import jwt from "jsonwebtoken";
import User from "../models/user.Model.js";

const protectRoute = async (req, res, next) => {
    try {
       
        const token = req.cookies.jwt;//for this we need to use -> cookie-parser

        if (!token) {
            return res.status(401).json({ error: "Unauthorized - No Token Provided" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SIGNATURE);

        // ex:The decoded has,
                //{
                    // The MongoDB _id (userId)
                    // Issued At timestamp (when the token was created)
                    // Expiration timestamp (when the token expires)
                //}
                    

        if (!decoded) {
            return res.status(401).json({ error: "Unauthorized - Invalid Token" });
        }

        const user = await User.findById(decoded.userId).select("-password");
     
        // .select("-password") is a best practice
        // Even though the password isn't present in the JWT, it's still part of the MongoDB user document. That's why you explicitly exclude it with .select("-password").


        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        req.user = user;

        next();
    } catch (error) {
        console.log("Error in protectRoute middleware :", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

export default protectRoute;


