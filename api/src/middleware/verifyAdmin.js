import createError from "../utils/createError.js"

const verifyAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return next(createError(403, "unauthorized"));
  }
  next();
}

export default verifyAdmin;