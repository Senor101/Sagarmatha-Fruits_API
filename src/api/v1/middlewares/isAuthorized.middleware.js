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
        console.log(decoded)
        if(decoded.email != process.env.ADMIN_EMAIL || decoded.password != process.env.ADMIN_PASSWORD){
            return res.status(401).json({
                error: "Unauthorized, Invalid admin token",
            });
        
        }
        next();
    } catch (error) {
        console.log(error)
        return res.status(401).json({
            error: "Unauthorized",
      });
    }
}

module.exports = isAuthorized;