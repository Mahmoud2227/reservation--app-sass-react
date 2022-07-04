import User from "../models/User.js";

export const registerUser = async (req, res, next) => {
	try {
		const user = new User(req.body);
		const token = await user.generateAuthToken();
		await user.save();
		res.cookie("token", token, {httpOnly: true}).status(201).json({user});
	} catch (error) {
		next(error);
	}
};

export const loginUser = async (req, res, next) => {
	try {
		const user = await User.findByCredentials(req.body.username, req.body.password);
		const token = await user.generateAuthToken();
		res.cookie("token", token, {httpOnly: true}).status(200).json({user});
	} catch (error) {
		next(error);
	}
};
