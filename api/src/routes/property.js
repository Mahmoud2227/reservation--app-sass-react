import express from "express";

import verifyToken from "../middleware/verifyToken.js";
import verifyUser from "../middleware/verifyUser.js";
import {createProperty, getPropertyListByUser} from "../controllers/property.js";

const router = express.Router();

router.post("/:ownerId", verifyToken, verifyUser, createProperty);

router.get("/:ownerId", verifyToken, verifyUser, getPropertyListByUser);

export default router;