import createError from "../utils/createError.js";

const verifyUser = (req, res, next) => {
	if (req.user._id.toString() === req.params.id || req.user.isAdmin) {
		next();
	} else {
		return next(createError(403, "Unauthorized"));
	}
};

export default verifyUser;
