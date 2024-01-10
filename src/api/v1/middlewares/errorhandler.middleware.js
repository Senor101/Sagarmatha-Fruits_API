const customErrorHandler = async (err, req, res, next) => {
    if (err.name === "CastError" && err.kind === "ObjectId") {
      return res.status(404).json({
        error: { message: "Invalid object ID" },
      });
    }
    console.error(err);
    let statusCode = 500;
    if (err.status) {
      statusCode = err.status;
    }
    res.status(statusCode).json({
      error: {
        message: err.message || "Internal Server Error",
      },
    });
  };
  
  module.exports = customErrorHandler;
  