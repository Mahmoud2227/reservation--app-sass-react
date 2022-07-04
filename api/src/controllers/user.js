import User from "../models/User.js";

export const getUserInfo = async (req, res, next) => {
	try {
		return res.status(200).json(req.user);
	} catch (error) {
		next(error);
	}
};
