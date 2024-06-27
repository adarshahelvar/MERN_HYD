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
