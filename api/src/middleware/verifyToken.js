const verifyToken = async (req, res, next) => {
	const token = req.cookies.token;
	if (!token) {
		return res.status(401).json({
			error: "Unauthorized",
		});
	}
	try {
		const decoded = await jwt.verify(token, process.env.JWT_SECRET);
		req.user = decoded.user;
		next();
	} catch (err) {
		return res.status(403).json({
			error: "Token is invalid!",
		});
	}
};

export default verifyToken;
