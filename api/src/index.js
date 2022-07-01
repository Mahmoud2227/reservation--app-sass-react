import express from "express";
import dotenv from "dotenv";
import "./db/mongoose.js";

import authRoute from "./routes/auth.js";

dotenv.config();
const app = express();

//middleware
app.use(express.json());

app.use("/api/v1/auth", authRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
