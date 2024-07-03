import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export const authenticate = (req, res, next) => {
  const authToken = req.headers.authorization;
  //   console.log(authToken);
  if (!authToken || !authToken.startsWith("Bearer")) {
    return res
      .status(401)
      .json({ success: false, message: "Token does not exist" });
  }

  
  try {
    const token = authToken.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.userId = decoded.id;
    req.role = decoded.role;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
};

export const restrict = (roles) => async (req, res, next) => {
  try {
    const userId = req.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "User does not exist" });
    }

    const userRole = user.role;
    console.log(userRole);

    if (userRole === "user" && roles.includes("user")) {
      next();
    } else if (userRole === "admin" && roles.includes("admin")) {
      next();
    } else {
      return res
        .status(401)
        .json({ success: false, message: "You're not authorized" });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
