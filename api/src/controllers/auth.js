import User from "../models/User.js";

export const registerUser = async (req, res, next) => {
	try {
		const newUser = new User(req.body);
		const token = await newUser.generateAuthToken();
		await newUser.save();
		res.status(201).json({newUser, token});
	} catch (error) {
		next(error);
	}
};
