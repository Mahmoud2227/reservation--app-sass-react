import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoute from "./routes/auth.js";

import errorHandler from "./middleware/errorHandler.js";

import "./db/mongoose.js";

dotenv.config();
const app = express();

//middleware
app.use(cookieParser());
app.use(express.json());

app.use("/api/v1/auth", authRoute);

app.use(errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
