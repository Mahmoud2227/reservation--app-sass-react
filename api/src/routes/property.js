import express from "express";

import verifyToken from "../middleware/verifyToken.js";
import verifyUser from "../middleware/verifyUser.js";
import verifyAdmin from "../middleware/verifyAdmin.js";
import {createProperty, getPropertyById, getPropertyList, getPropertyListByUser} from "../controllers/property.js";

const router = express.Router();

router.post("/:ownerId", verifyToken, verifyUser, createProperty);

router.get("/:ownerId", verifyToken, verifyUser, getPropertyListByUser);

router.get("/",verifyToken,verifyAdmin,getPropertyList)

router.get("/:id/:propertyId",verifyToken,verifyUser,getPropertyById)

export default router;