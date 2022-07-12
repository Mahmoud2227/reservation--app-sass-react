import express from "express";
import {createRoom, getRoomById, getRoomsByProperty, updateRoom} from "../controllers/room.js";

import verifyToken from "../middleware/verifyToken.js";
import verifyUser from "../middleware/verifyUser.js";

const router = express.Router();

router.post("/:id/:propertyId", verifyToken, verifyUser, createRoom);

router.get("/:propertyId", getRoomsByProperty);

router.get("/get/:id/:roomId", verifyToken, verifyUser, getRoomById);

router.patch("/:id/:roomId", verifyToken, verifyUser, updateRoom);

export default router;
