import express from "express";

import verifyToken from "../middleware/verifyToken.js";
import verifyUser from "../middleware/verifyUser.js";
import {createProperty} from "../controllers/property.js";

const router = express.Router();

router.post("/:ownerId", verifyToken, verifyUser, createProperty);

export default router;