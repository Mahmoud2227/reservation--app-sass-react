import express from "express";
import {getAllUsersInfo, getUserInfo} from "../controllers/user.js";
import verifyAdmin from "../middleware/verifyAdmin.js";
import verifyToken from "../middleware/verifyToken.js";
import verifyUser from "../middleware/verifyUser.js";

const router = express.Router();

router.get("/:id", verifyToken, verifyUser, getUserInfo);

router.get("/", verifyToken, verifyAdmin, getAllUsersInfo)

export default router;
