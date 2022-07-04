import jwt from "jsonwebtoken";

import createError from "../utils/createError.js";
import User from "../models/User.js";

const verifyToken = async (req, res, next) => {
	const token = req.cookies.token;
	if (!token) {
		return next(createError(401, "unauthorized"));
	}
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.user = await User.findById(decoded._id);
		next();
	} catch (err) {
		next(createError(403, "Invalid token"));
	}
};

export default verifyToken;
