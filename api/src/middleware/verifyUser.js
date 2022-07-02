import verifyToken from "./verifyToken.js";

const verifyUser = async (req, res, next) => {
	try {
		await verifyToken(req, res, next);
		if (req.user.id === req.params.id || req.user.isAdmin) {
			next();
		}
	} catch (error) {
		return res.status(401).json({
			error: "Unauthorized",
		});
	}
};

export default verifyUser;
