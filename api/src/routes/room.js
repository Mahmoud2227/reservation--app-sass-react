import express from "express";
import { createRoom } from "../controllers/room.js";

import verifyToken from "../middleware/verifyToken.js"
import verifyUser from "../middleware/verifyUser.js"

const router = express.Router();

router.post("/:id/:propertyId",verifyToken,verifyUser,createRoom)

export default router