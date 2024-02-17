const jwt = require('jsonwebtoken');

const isAuthorized = (req, res, next) => {
    try {
        const { authorization } = req.headers;
        if (!authorization) 
            return res.status(401).json({
                error: "Missing authorization header"
            })
        const token = authorization.split(" ")[1];
        if (!token) 
            return res.status(401).json({
                error: "Invalid header format, missing token"
            })
        if (!process.env.JWT_SECRET) 
            return res.status(500).json({
                error: "Internal server error, something went wrong"
            })

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) 
            return res.status(401).json({
                error: "Unauthorized, Invalid token"
            })
        if (decoded.id != process.env.ADMIN_ID) {
            return res.status(401).json({
                error: "Unauthorized, Invalid token",
            });
        }
        return next();
    } catch (error) {
        console.log(error)
        return res.status(401).json({
            error: "Unauthorized",
      });
    }
}

module.exports = isAuthorized;
