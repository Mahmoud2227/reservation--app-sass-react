import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		trim: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		trim: true,
		unique: true,
	},
});

userSchema.methods.generateAuthToken = async function () {
	const user = this;
	const token = jwt.sign({user}, process.env.JWT_SECRET);
	await user.save();
	return token;
};

const User = mongoose.model("User", userSchema);

export default User;
