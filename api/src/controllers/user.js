import User from "../models/User.js";

export const getUserInfo = async (req, res, next) => {
	try {
		return res.status(200).send(req.user);
	} catch (error) {
		next(error);
	}
};

export const getAllUsersInfo = async (req, res, next) => {
	try {
		const users = await User.find({});
		return res.status(200).send(users);
	} catch (error) {
		next(error);
	}
};