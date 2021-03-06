import express from "express";

import verifyToken from "../middleware/verifyToken.js";
import verifyUser from "../middleware/verifyUser.js";
import verifyAdmin from "../middleware/verifyAdmin.js";
import {
	createProperty,
	deleteProperty,
	getFeaturedCities,
	getPropertyById,
	getPropertyList,
	getPropertyListByUser,
	updateProperty,
} from "../controllers/property.js";

const router = express.Router();

router.post("/:id", verifyToken, verifyUser, createProperty);

router.get("/get/featuredCites", getFeaturedCities);

router.get("/:id", verifyToken, verifyUser, getPropertyListByUser);

router.get("/", verifyToken, verifyAdmin, getPropertyList);

router.get("/:id/:propertyId", verifyToken, verifyUser, getPropertyById);

router.patch("/:id/:propertyId", verifyToken, verifyUser, updateProperty);

router.delete("/:id/:propertyId", verifyToken, verifyUser, deleteProperty);

export default router;
