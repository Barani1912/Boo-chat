import User from "../models/user.Model.js";

export const getUsersForSideBar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    // shows all the users...
    // const allUser = await User.find()

    // shows users except ourself...
    // .select("-password") -> remove the password from the array of obj..
    const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("Error in getUserForSideBar Controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};


