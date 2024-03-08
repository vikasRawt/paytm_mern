const JWT_Token_SECRET = require("./confiig");
const jwt = require("jsonwebtoken")

function authMiddleware(req, res, next){
    const authHeaders= req.headers.authorization;

    if(!authHeaders || !authHeaders.startsWith('Bearer ')){
        return res.status(403).json({})
    }

    const token = authHeaders.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_Token_SECRET);
        req.userId = decoded.userId;
        next();

    } catch (error) {
        return res.status(403).json({})
    }

}

module.exports = authMiddleware;