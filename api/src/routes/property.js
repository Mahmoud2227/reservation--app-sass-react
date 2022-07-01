import express from "express";
import Property from "../models/Property.js";

const router = express.Router();

router.post("/", async (req, res) => {
	const newProperty = new Property(req.body);

	try {
		await newProperty.save();
		res.status(201).send(newProperty);
	} catch (error) {
		res.status(500).json(error);
	}
});
