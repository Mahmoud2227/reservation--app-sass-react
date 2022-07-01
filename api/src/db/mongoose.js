import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(
	process.env.MONGO_URL,
	{
		autoIndex: true,
	},
	(error) => {
		if (error) {
			console.log(error);
		}
		console.log("Connected to MongoDB");
	}
);

mongoose.connection.on("disconnected", () => {
	console.log("MongoDB disconnected");
});
mongoose.connection.on("connected", () => {
	console.log("MongoDB connected");
});
