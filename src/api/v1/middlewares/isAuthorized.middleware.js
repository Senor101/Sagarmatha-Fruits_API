const jwt = require("jsonwebtoken");

const isAuthorized = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        console.log(token)
        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded)
      next();
    } catch (error) {
        console.log(error)
        return res.status(401).json({
            error: "Auth failed",
      });
    }
}

module.exports = isAuthorized;