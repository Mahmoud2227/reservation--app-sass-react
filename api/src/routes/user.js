import express from "express";
import {
  deleteAvatar,
	deleteUser,
	getAllUsersInfo,
	getAvatar,
	getUserInfo,
	UpdateUserInfo,
	uploadAvatar,
} from "../controllers/user.js";
import verifyAdmin from "../middleware/verifyAdmin.js";
import verifyToken from "../middleware/verifyToken.js";
import verifyUser from "../middleware/verifyUser.js";
import upload from "../middleware/multer.js";

const router = express.Router();

router.get("/:id", verifyToken, verifyUser, getUserInfo);

router.get("/", verifyToken, verifyAdmin, getAllUsersInfo);

router.patch("/:id", verifyToken, verifyUser, UpdateUserInfo);

router.delete("/:id", verifyToken, verifyUser, deleteUser);

router.post("/:id/avatar", verifyToken, verifyUser, upload.single("avatar"), uploadAvatar);

router.get("/:id/avatar",getAvatar);

router.delete("/:id/avatar", verifyToken, verifyUser, deleteAvatar);

export default router;
