import User from "../models/User.js";
import createError from "../utils/createError.js";

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

export const UpdateUserInfo = async (req, res, next) => {
	const updates = Object.keys(req.body);
	const allowedUpdates = ["email", "password", "isAdmin"];
	const isValidUpdate = updates.every((update) => allowedUpdates.includes(update));
	const isValidAdminUpdate = updates.includes("isAdmin") ? req.user.isAdmin : true;

	try {
		if (!isValidUpdate || !isValidAdminUpdate) {
			return next(createError(400, "Invalid updates!"));
		} else {
			updates.forEach((update) => (req.user[update] = req.body[update]));
			await req.user.save();
			return res.status(200).send(req.user);
		}
	} catch (error) {
		next(error);
	}
};

export const deleteUser = async (req, res, next) => {
	try {
		const user = User.findByIdAndDelete({_id: req.params.id});
		res.status(200).send(user)
	} catch (error) {
		next(error)
	}
};
