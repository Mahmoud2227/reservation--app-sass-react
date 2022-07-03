import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
	res.send("POST request to the homepage");
});

export default router;
