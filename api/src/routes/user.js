import express from "express";
import {getUserInfo} from "../controllers/user.js";
import verifyToken from "../middleware/verifyToken.js";
import verifyUser from "../middleware/verifyUser.js";

const router = express.Router();

router.get("/:id", verifyToken, verifyUser, getUserInfo);

export default router;
