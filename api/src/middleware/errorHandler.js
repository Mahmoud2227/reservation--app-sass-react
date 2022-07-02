const errorHandler = (err, req, res, next) => {
	console.log(err);
	res.status(err.statusCode || 500).send({
		success: false,
		status: err.status || "error",
		message: err.message || "Something went wrong!",
		stack: err.stack,
	});
};

export default errorHandler;
