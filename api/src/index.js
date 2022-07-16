import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import propertyRoute from "./routes/property.js"
import roomRoute from "./routes/room.js"

import errorHandler from "./middleware/errorHandler.js";

import "./db/mongoose.js";

dotenv.config();
const app = express();

//middleware
app.use(cookieParser());
app.use(express.json());

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/property", propertyRoute);
app.use("/api/v1/room",roomRoute)

app.use(errorHandler);

const port = process.env.PORT || 8000;
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
