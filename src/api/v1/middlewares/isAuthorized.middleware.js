const jwt = require("jsonwebtoken");

const isAuthorized = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({
                error: "Unauthorized, need access token in header",
            });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        console.log(error)
        return res.status(401).json({
            error: "Unauthorized",
      });
    }
}

module.exports = isAuthorized;