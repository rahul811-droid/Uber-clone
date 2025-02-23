import User from "../models/user.models.js";
import jwt from "jsonwebtoken";
import BlackListToken from "../models/blackListToken.js";

const authUser = async (req, res, next) => {
  try {
    const token =
      req.cookies?.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Not authorized, no token" });
    }

    const isBlackListed = await BlackListToken({ token: token });
    if (!isBlackListed) {
      return res
        .status(401)
        .json({ message: "Not authorized, token blacklisted" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded._id).select("-password"); // Exclude password

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Not authorized, invalid token" });
  }
};

export default authUser;
