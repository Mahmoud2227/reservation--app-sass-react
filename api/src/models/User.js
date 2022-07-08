import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

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
	avatar: {
		type: Buffer,
	},
	isAdmin: {
		type: Boolean,
		default: false,
	},
});

userSchema.virtual("property",{
	ref:"Property",
	localField:"_id",
	foreignField:"owner"
})

userSchema.methods.generateAuthToken = async function () {
	const user = this;
	const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET);
	await user.save();
	return token;
};

userSchema.methods.toJSON = function () {
	const user = this;
	const userObject = user.toObject();
	delete userObject.password;
	return userObject;
};

userSchema.statics.findByCredentials = async (username, password) => {
	const user = await User.findOne({username});
	if (!user) {
		throw new Error("Unable to login");
	}
	const isMatch = bcrypt.compare(password, user.password);

	if (!isMatch) {
		throw new Error("Unable to login");
	}
	return user;
};

userSchema.pre("save", async function (next) {
	const user = this;
	if (user.isModified("password")) {
		user.password = await bcrypt.hash(user.password, 8);
	}
	next();
});

const User = mongoose.model("User", userSchema);

export default User;
